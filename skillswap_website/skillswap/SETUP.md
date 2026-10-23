# Skill Swap - Setup (about 15 minutes)

## 1. Create your Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**, name it `skillswap`, set a database password (save it, never share it), pick the nearest region, and wait ~2 minutes.

## 2. Create the database tables
1. In Supabase, open **SQL Editor** -> **New query**.
2. Open `schema.sql` from this folder, copy everything, paste it in, and click **Run**.
   You should see "Success".

## 2b. Add chat tables
Run `schema_chat.sql` the same way (SQL Editor -> New query -> paste -> Run).

## 3. Paste your keys into the site
1. In Supabase: **Project Settings -> API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `supabase-config.js` in Notepad or VS Code and replace
   `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY` (keep the quotes).
   (Never use the "service_role" key in the website.)

## 4. Make testing easier
In Supabase: **Authentication -> Providers -> Email**, turn OFF "Confirm email"
while testing, so new accounts can log in immediately. Turn it back on before real launch.

## 5. Try it
Open `index.html` in your browser -> click **Log in** -> **Sign up** -> add skills on
**profile.html** -> see people on **matches.html**.
Matches only appear when other people have signed up, so create a second test account
(use a private/incognito window) with opposite skills: one teaches what the other wants.

## 6. Put it online
Drag this whole folder onto https://app.netlify.com/drop
Then in Supabase: **Authentication -> URL Configuration**, set **Site URL** to your Netlify link.

## What works / what's next
Works: sign up, log in/out, profile, add/delete skills, real matching, chat.
Chat: click "Request Swap" on a match, or open Messages.
Not yet built: ratings, photo upload.
