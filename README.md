# Prince Mayani — Portfolio

Single-page static portfolio (plain HTML/CSS/JS, no build step).
Lives at **https://princemayani.github.io/** via GitHub Pages.

## Files

- `index.html` — the whole page (hero, SQL intro, 4 projects, skills, education, contact)
- `styles.css` — dark + light themes, responsive layout
- `script.js` — count-up KPIs, chart scroll animation, movie search demo, theme toggle
- `PrinceMayani_Resume.pdf` — linked from the "Download Resume" buttons; replace this
  file whenever the resume updates (keep the same filename)

## Publish on GitHub Pages

1. Create an empty **public** repo named exactly `princemayani.github.io` at
   https://github.com/new (no README, no .gitignore — the name is what makes it
   a user site).
2. From this folder, run:

```
git remote add origin https://github.com/princemayani/princemayani.github.io.git
git branch -M main
git push -u origin main
```

That's it — for a repo named `princemayani.github.io`, GitHub Pages turns on
automatically and serves the `main` branch. The site is live at
**https://princemayani.github.io/** within a minute or two of the first push
(check repo **Settings → Pages** if it doesn't appear).

## Updating later

```
git add -A
git commit -m "Update portfolio"
git push
```

## Local preview

Just open `index.html` in a browser — no server needed.
