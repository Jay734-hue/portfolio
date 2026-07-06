# Jay Prajapati — Portfolio

A modern, dark-themed personal portfolio website showcasing my projects, skills, and experience.

**Live:** https://Jay734-hue.github.io/portfolio

---

##  Project Structure

```
portfolio/
├── index.html                   ← Main page
├── style.css                    ← All styles & theming
├── app.js                       ← Logic, animations & CONFIG block
├── assets/
│   ├── profile.jpeg             ← Profile photo
│   ├── Jay_CV.pdf               ← Resume (downloaded via Resume button)
│   └── projects/                ← Project screenshots (16:9)
└── .github/
    └── workflows/
        └── deploy.yml           ← Auto-deploy to GitHub Pages on push
```

---

##  Updating Content

All personal content lives in the `CONFIG` block at the top of `app.js` — edit only that section:

- **name, roles, tagline** — hero section
- **bio, location, education, status** — about section
- **skills** — categories, icons, tags
- **projects** — title, description, impact, stack, GitHub & demo links
- **contact** — email, LinkedIn, GitHub

No HTML editing needed for content changes.

---

##  Adding Assets

| File | Description |
|------|-------------|
| `assets/profile.jpeg` |   square crop, minimum 400×400px |
| `assets/Jay_CV.pdf` |   all three Resume buttons link to this |
| `assets/projects/*.png` | Optional project screenshots — 16:9 ratio works best |

---

## 🚀 Deploying to GitHub Pages

Free hosting, auto-deploys on every push.

```bash
# 1. Create a repo named "portfolio" on GitHub, then:
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/Jay734-hue/portfolio.git
git push -u origin main
```

Then in your repo:

**Settings → Pages → Source → GitHub Actions**

Your site goes live at `https://Jay734-hue.github.io/portfolio` within a minute. Every subsequent `git push` to `main` triggers an automatic redeploy.

---

## 📬 Contact Form (Formspree)

The form submits via [Formspree](https://formspree.io) and delivers messages straight to your Gmail.

1. Sign up at formspree.io and create a form
2. Copy your form endpoint ID
3. In `app.js`, update `CONFIG.formspreeUrl` with your endpoint:
   ```js
   formspreeUrl: "https://formspree.io/f/your-id-here",
   ```
4. Test on a live URL — Formspree does not work from `file://` locally

> **Note:** New Formspree forms need one confirmed submission to activate delivery.

---

##  Theming & Colors

All design tokens are CSS variables at the top of `style.css` under `:root {}`:

| Variable | Purpose |
|----------|---------|
| `--accent` / `--accent2` | Primary purple tones |
| `--bg` / `--bg2` / `--bg3` | Background shades |
| `--cyan`, `--green`, `--orange`, `--pink` | Skill tag accent colors |
| `--font` | Body font (Inter) |
| `--mono` | Code/tag font (JetBrains Mono) |

---

##  Tech

- Vanilla HTML, CSS, JavaScript — zero dependencies, zero frameworks
- Deployed via GitHub Actions → GitHub Pages
- Contact form via Formspree

