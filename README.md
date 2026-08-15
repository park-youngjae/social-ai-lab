# Social AI Lab Website v2

Static HTML/CSS/JavaScript website for Social Artificial Intelligence Lab at Kwangwoon University.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

- `index.html` — Home
- `team.html` — Professor / members / openings
- `publications.html` — Publications + filtering
- `research.html` — Research directions
- `contact.html` — Contact / map / joining information

## Visual system

The layout follows the VPI Lab (`ihbae.com`) reference at a structural level, while the color system is rebuilt around Kwangwoon University's official burgundy sampled from the provided identity assets: `#7D1A2D`. A light warm-neutral background is used for readability, with a dark burgundy hero/footer for visual hierarchy.

## Replaceable assets

- `assets/images/profile-youngjae.svg` can be replaced with a real professor photo.
- `assets/images/kwangwoon-campus.svg` can be replaced with an authorized campus/lab photograph.
- Paper/research SVGs are intentionally original abstract placeholders; replace them with paper teaser figures when desired.

## Deployment

This folder can be deployed directly to GitHub Pages.
