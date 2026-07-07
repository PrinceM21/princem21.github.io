# Prince Mayani — Portfolio

Single-page static portfolio (plain HTML/CSS, no build step). Deploys free on GitHub Pages.

## Before publishing

Search for `YOUR_EMAIL_HERE`, `YOUR_LINKEDIN_URL_HERE`, and `YOUR_GITHUB_URL_HERE` in
`index.html` and replace them with your real email and profile URLs (they appear in
the hero **and** the contact section).

## Publish on GitHub Pages

1. Create an empty repo named `portfolio` at https://github.com/new (public, no README).
2. Then run, from this folder:

```
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

3. On GitHub: repo **Settings → Pages → Branch: `main` / (root) → Save**.

Your site goes live in about a minute at:
`https://YOUR_GITHUB_USERNAME.github.io/portfolio/`

Tip: if you name the repo `YOUR_GITHUB_USERNAME.github.io` instead, the site lives at
the cleaner URL `https://YOUR_GITHUB_USERNAME.github.io/` — same push commands, and
step 3 is automatic.

## Local preview

Just open `index.html` in a browser — it works from the file system, no server needed.
