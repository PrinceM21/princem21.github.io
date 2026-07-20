# Prince Mayani — Portfolio

Single-page static portfolio (plain HTML/CSS/JS, no build step).
Lives at **https://princem21.github.io/** via GitHub Pages.

## Files

- `index.html` — the whole page (hero KPIs, projects with the DTI chart, skills matrix, education, contact)
- `styles.css` — dashboard visual language: light canvas, navy primary, risk red
- `script.js` — the skill-filter slicer (the page's one interaction)
- `PrinceMayani_Resume.pdf` — linked from the "Resume PDF" buttons; replace this
  file whenever the resume updates (keep the same filename)

The DTI chart values (3.3 / 6.9 / 12.5 / 20.6 / 41.6%) are computed from the
credit risk project's real dataset with its own preprocessing — if the analysis
changes, recompute and update the SVG in `index.html`.

## Publishing

Already published under the **PrinceM21** account: the repo is
`PrinceM21/princem21.github.io`, and GitHub Pages serves the default branch
automatically at **https://princem21.github.io/**.

## Updating later

```
git add -A
git commit -m "Update portfolio"
git push
```

Changes appear on the live site a minute or two after pushing.

## Local preview

Just open `index.html` in a browser — no server needed.
