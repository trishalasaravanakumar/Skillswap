// Shared helpers for every page of Skill Swap.
(function () {
  var cfg = window.SKILLSWAP_CONFIG || {};
  var configured = !!(cfg.url && cfg.anonKey && cfg.url.indexOf("YOUR_") === -1 && cfg.anonKey.indexOf("YOUR_") === -1);
  var sb = null;
  if (configured && window.supabase) sb = window.supabase.createClient(cfg.url, cfg.anonKey);

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function norm(s) { return String(s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
  function similar(a, b) {
    a = norm(a); b = norm(b);
    if (!a || !b) return false;
    if (a === b) return true;
    return a.length >= 3 && b.length >= 3 && (a.indexOf(b) !== -1 || b.indexOf(a) !== -1);
  }

  // Pure matching logic (no network): who can teach me what I want, and who wants what I teach.
  function computeMatches(mine, others, profiles) {
    var iTeach = mine.filter(function (s) { return s.kind === "teach"; });
    var iLearn = mine.filter(function (s) { return s.kind === "learn"; });
    var byUser = {};
    others.forEach(function (s) { (byUser[s.user_id] = byUser[s.user_id] || []).push(s); });
    var result = [];
    Object.keys(byUser).forEach(function (uid) {
      var skills = byUser[uid];
      var theyTeachMe = [], theyWantFromMe = [];
      skills.filter(function (s) { return s.kind === "teach"; }).forEach(function (s) {
        if (iLearn.some(function (m) { return similar(s.title, m.title); })) theyTeachMe.push(s.title);
      });
      skills.filter(function (s) { return s.kind === "learn"; }).forEach(function (s) {
        if (iTeach.some(function (m) { return similar(s.title, m.title); })) theyWantFromMe.push(s.title);
      });
      if (!theyTeachMe.length && !theyWantFromMe.length) return;
      var p = profiles.filter(function (x) { return x.id === uid; })[0] || {};
      result.push({
        user_id: uid,
        name: p.display_name || "Skill Swap member",
        location: p.location || "",
        bio: p.bio || "",
        theyTeachMe: theyTeachMe,
        theyWantFromMe: theyWantFromMe,
        mutual: theyTeachMe.length > 0 && theyWantFromMe.length > 0
      });
    });
    result.sort(function (a, b) {
      if (a.mutual !== b.mutual) return a.mutual ? -1 : 1;
      return (b.theyTeachMe.length + b.theyWantFromMe.length) - (a.theyTeachMe.length + a.theyWantFromMe.length);
    });
    return result;
  }

  async function getUser() {
    if (!sb) return null;
    var r = await sb.auth.getSession();
    return r.data && r.data.session ? r.data.session.user : null;
  }

  function showSetupNotice() {
    var main = document.querySelector("main");
    if (!main) return;
    main.innerHTML =
      '<div class="max-w-2xl mx-auto px-margin-mobile pt-space-xl pb-space-xl">' +
      '<div class="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg">' +
      '<h1 class="font-headline-md text-headline-md text-on-surface mb-space-sm">One setup step left</h1>' +
      '<p class="font-body-md text-body-md text-on-surface-variant">Open <strong>supabase-config.js</strong> and paste your Supabase Project URL and anon key. ' +
      'Step-by-step instructions are in <strong>SETUP.md</strong>.</p></div></div>';
  }

  async function ensureProfile(user) {
    var r = await sb.from("profiles").select("id").eq("id", user.id).maybeSingle();
    if (!r.data) {
      var name = (user.user_metadata && user.user_metadata.display_name) || (user.email || "member").split("@")[0];
      await sb.from("profiles").insert({ id: user.id, display_name: name });
    }
  }

  async function requireLogin() {
    if (!sb) { showSetupNotice(); return null; }
    var user = await getUser();
    if (!user) {
      var page = (location.pathname.split("/").pop() || "index.html");
      location.href = "login.html?next=" + encodeURIComponent(page);
      return null;
    }
    await ensureProfile(user);
    return user;
  }

  async function addAuthButton() {
    var bell = document.querySelector('header button[aria-label="Notifications"]');
    if (!bell) return;
    var user = await getUser();
    var el = document.createElement("a");
    el.className = "px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors cursor-pointer whitespace-nowrap";
    if (user) {
      el.textContent = "Log out";
      el.href = "login.html";
      el.addEventListener("click", async function (e) {
        e.preventDefault();
        await sb.auth.signOut();
        location.href = "login.html";
      });
    } else {
      el.textContent = "Log in";
      el.href = "login.html";
    }
    bell.insertAdjacentElement("beforebegin", el);
  }


  // Bottom menu for phones (the top menu is hidden on small screens)
  function addMobileNav() {
    var page = (location.pathname.split("/").pop() || "index.html");
    if (page === "login.html" || !document.querySelector("header") || document.getElementById("mobile-nav")) return;
    var items = [
      ["index.html", "home", "Home"], ["matches.html", "swap_horiz", "Matches"],
      ["chat.html", "chat", "Messages"], ["profile.html", "person", "Profile"]
    ];
    var nav = document.createElement("nav");
    nav.id = "mobile-nav";
    nav.className = "lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest border-t border-outline-variant flex justify-around py-space-xs";
    nav.innerHTML = items.map(function (it) {
      var on = page === it[0];
      return '<a href="' + it[0] + '" class="flex flex-col items-center px-space-sm py-space-xs rounded-lg ' + (on ? "text-primary" : "text-on-surface-variant") + '">' +
        '<span class="material-symbols-outlined">' + it[1] + '</span><span class="font-label-sm text-label-sm">' + it[2] + '</span></a>';
    }).join("");
    document.body.appendChild(nav);
    document.body.style.paddingBottom = "72px";
  }

  window.SkillSwap = {
    sb: sb, configured: configured, esc: esc, getUser: getUser,
    requireLogin: requireLogin, computeMatches: computeMatches, similar: similar
  };
  if (typeof module !== "undefined") module.exports = window.SkillSwap;
  if (typeof document !== "undefined") {
    var boot = function () { addAuthButton(); addMobileNav(); };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
  }
})();
