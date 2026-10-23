---
name: Skill Swap Community System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#4338d9'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d55f3'
  on-tertiary-container: '#f2eeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c3c0ff'
  on-tertiary-fixed: '#0f0069'
  on-tertiary-fixed-variant: '#3323cc'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a welcoming, dependable, and highly accessible peer-to-peer exchange environment. Grounded in reciprocal learning, the interface prioritizes approachability, clarity, and safety without feeling overly corporate or starkly transactional.

The aesthetic fuses modern digital clarity with gentle tactile warmth:
- **Clean Structure:** A disciplined layout structure using generous whitespace and clean vertical rhythms ensures cognitive ease during complex matching workflows.
- **Warm Approachability:** Soft contours, organic badges, and friendly type curves balance utility with empathy, reassuring learners and mentors as they establish bilateral trust.
- **Non-Transactional Focus:** Visual cues de-emphasize commercial finance mechanisms, replacing them with reciprocal exchange markers, bilateral swap indicators, and skill-alignment highlights.

## Colors

The palette balances dependability with inviting community energy.

### Primary (`#2563EB`)
The primary blue anchors core interactions, navigational states, and key call-to-action triggers. Tints range down to `#EFF6FF` for subtle backgrounds, ensuring high contrast without harshness.

### Secondary (`#F59E0B`)
Warm amber functions as the secondary accent for reciprocal swap indicators, visual ratings, and active swap milestones. It injects warmth and celebration into successful trades.

### Tertiary (`#4F46E5`)
Indigo serves as a thematic counterpoint to primary blue, primarily dedicated to distinguishing "Wants to Learn" demands against instructional offerings.

### Neutrals
- **Backgrounds:** Pure white (`#FFFFFF`) layered over cool foundation tints (`#F8FAFC` and `#F1F5F9`).
- **Typography:** High-legibility deep slate (`#0F172A`), balanced with secondary body slate (`#334155`) and muted label slate (`#64748B`).
- **Semantic Badges:** Soft emerald (`#059669` / `#ECFDF5`) highlights "Can Teach" competencies, while soft indigo (`#4F46E5` / `#EEF2FF`) highlights "Wants to Learn" ambitions.

## Typography

Typography reinforces clarity and friendly structure.

- **Headlines (Plus Jakarta Sans):** Its rounded terminals and modern geometric proportions supply warmth and energetic optimism to titles, card headers, and swap dialogs.
- **Body & Labels (Inter):** Neutral, highly legible, and objective. Inter facilitates high scanability in dense comparative lists, multi-message exchange threads, and criteria tags.
- **Scale Behavior:** Display and primary headlines compress via dedicated mobile variants below 640px viewport widths to prevent word truncation and balance negative space.

## Layout & Spacing

This design system uses a responsive 12-column fluid grid system anchored by strict horizontal alignment tiers:

- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, with responsive outer margins expanding up to a centered 1280px container max-width.
- **Tablet (640px – 1023px):** 8 columns, 20px gutters, 24px side canvas margins. Multi-column cards collapse to 4-column paired arrangements.
- **Mobile (< 640px):** 4 columns, 16px (`1rem`) gutters, 16px (`1rem`) side canvas margins. Skill cards and swap proposals stack vertically in full-width single-column blocks.
- **Rhythm Rules:** Spacing tokens (`space-xs` through `space-xl`) define all gap matrices and containment insets. Stacked content flows with a baseline 8px modular multiplier to maintain consistent vertical tempo across cards, profile overviews, and active conversational panels.

## Elevation & Depth

Visual hierarchy uses ambient low-contrast shadows paired with delicate structural borders to preserve lightness and clarity:

- **Surface Layer 0 (Foundation):** `#F8FAFC` base application background.
- **Surface Layer 1 (Cards & Modules):** Pure `#FFFFFF` resting atop Layer 0, delineated by a subtle 1px border (`#E2E8F0`) and an ambient tinted drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Surface Layer 2 (Interactive Floating & Hover):** On hover or selection, skill cards and floating panels elevate using `0 10px 15px -3px rgba(37, 99, 235, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`, slightly warming the boundary with a soft primary hue.
- **Surface Layer 3 (Modals & Overlays):** Trade agreements, scheduling drawers, and match modals use `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` over a backdrop tint of `rgba(15, 23, 42, 0.35)`.

## Shapes

The interface implements a roundedness level of `2`:

- **Standard Base Components (`0.5rem` / `8px`):** Inputs, buttons, dropdown menus, and standard interactive blocks share consistent medium rounded corners.
- **Large Structural Containers (`1rem` / `16px`):** Profile overview cards, barter comparison boards, and session summaries use `rounded-lg`.
- **Modals and Prominent Paneling (`1.5rem` / `24px`):** Centerpiece swap negotiation modals and onboarding cards use `rounded-xl`.
- **Pills & Status Indicators:** Status tags, reciprocal tags ("Can Teach" / "Wants to Learn"), and user interaction counts employ fully circular boundaries (`9999px`) to immediately convey chip functionality.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, radius `0.5rem`, font `Inter` semi-bold. On hover, background shifts to `#1D4ED8`.
- **Secondary:** Surface `#EFF6FF`, text `#2563EB`, border 1px solid `#DBEAFE`.
- **Barter Action (Swap Request):** Accent gradient or warm accent `#F59E0B` with white text for confirming agreements.

### Skill Badges & Chips
- **"Can Teach":** Background `#ECFDF5`, text `#047857`, 1px solid `#A7F3D0`, fully rounded pill (`9999px`), accompanied by a mini check or graduation icon.
- **"Wants to Learn":** Background `#EEF2FF`, text `#4338CA`, 1px solid `#C7D2FE`, fully rounded pill, paired with an explore or spark icon.

### Swap Visual Indicators
- **Bilateral Link:** Two opposing micro-arrows encased within a circular badge (`#FEF3C7` background, `#B45309` icon), positioned in the center between teaching and learning sections to reinforce the non-monetary trade.

### Cards
- **Skill Swap Card:** Surface `#FFFFFF`, border 1px solid `#E2E8F0`, corner radius `1rem` (`rounded-lg`). Padding is standard `1.5rem`. Contains header with user avatar and star rating, divided middle showcasing "Offering" vs "Seeking" pill clusters, and footer with reciprocal swap call-to-action.

### Form Inputs & Checkboxes
- **Input Fields:** Crisp `#FFFFFF` background, `#CBD5E1` border, 8px corner radius, `#0F172A` text. Focused state triggers a 2px outer ring in `#93C5FD` and border color `#2563EB`.
- **Checkboxes & Radios:** 8px rounded squares (checkbox) or circles (radio), `#2563EB` fill on selection with crisp white check indicators.

### Chat & Negotiation Threads
- **Thread Bubbles:** Incoming messages use `#F1F5F9` with slate text; outgoing user messages use `#2563EB` with pure white text. Integrated interactive widgets within chat display live "Swap Proposals" featuring structured confirmation controls.