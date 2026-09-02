# AllClear Hauling — Homepage Concept

A premium, conversion-focused homepage concept for **AllClear Hauling** — junk removal, hauling, cleanouts, and moving help based in **Manassas Park, VA**, serving the DMV.

This is a **homepage shell / concept** — a static, fast, mobile-first single page built to show the business what its web presence could become. No backend or production infrastructure.

## Live site
Published via GitHub Pages (see the repo's Pages settings for the URL).

## Stack
- Plain HTML, CSS, and vanilla JS — **no build step, no dependencies.**
- Google Fonts: Archivo (headings) + Manrope (body).
- Real AllClear Hauling logo in `assets/`.

## Structure
```
index.html      # full homepage markup
styles.css      # design system + all sections + responsive
script.js       # sticky header, mobile menu, scroll reveals, demo form
assets/         # logo + favicon
```

## Design notes
- **Brand colors from the real logo:** white + electric blue + charcoal/black. (Blue is the actual brand; not green.)
- **Sections:** header · hero · service strip · services · junk-removal feature · problem/solution before-after · how it works · work gallery · founder (Jonathan) · trust · residential/commercial · service area · quote form · final CTA · footer · mobile action bar.
- **Imagery:** photos are elegant, labeled placeholders structured for easy swap-in of real AllClear photography. Nothing is fabricated to look like real completed jobs.
- **No fabricated claims** — no invented reviews, ratings, licenses, years in business, or guarantees. Only verified services, contact info, and DMV/Manassas Park positioning.
- Accessible: semantic HTML, one H1, keyboard nav, visible focus, reduced-motion support.

## Verified business info used
- Phone: +1 571-445-1192 · Secondary: (703) 868-4210
- Email: allclearhauling@gmail.com
- Instagram / TikTok / Facebook linked in footer
- Founder: Jonathan · Location: Manassas Park, VA · Serves the DMV

## Replacing placeholders with real photos
Each placeholder uses a `.ph` element with a `data-ph` label. Swap in real images by replacing the placeholder `div` with an `<img>` (or setting a `background-image`) — the labels indicate what shot goes where (truck & crew, furniture pickup, before/after, founder, service map, etc.).

## The demo quote form
The form validates name + phone client-side and shows a confirmation, but is **not wired to a backend**. Connect it to a form service (Formspree, Netlify Forms, GHL, etc.) when going to production.
