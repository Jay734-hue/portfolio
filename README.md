# Jay's Portfolio

A modern, dark-themed personal portfolio website.

## 🚀 Live on GitHub Pages
Visit: https://Jay734-hue.github.io/portfolio

## 📁 Structure
```
portfolio/
├── index.html          ← Main page
├── style.css           ← All styles
├── app.js              ← All logic + CONFIG block
├── assets/
│   ├── profile.jpg     ← Your photo (drop it here)
│   └── resume.pdf      ← Your resume (drop it here)
│   └── projects/       ← Project screenshots
└── .github/
    └── workflows/
        └── deploy.yml  ← Auto-deploy to GitHub Pages
```

## ✏️ How to customize
Open `app.js` and edit the `CONFIG` block at the top:
- name, roles, bio, location, education
- skills categories and tags
- projects (title, desc, stack, links, screenshots)
- contact info

## 📸 Adding your assets
```
assets/
  profile.jpg       → your headshot (square, min 400×400)
  resume.pdf        → your resume
  projects/
    project1.png    → 16:9 screenshots for each project
```

## 🌐 Deploying to GitHub Pages (5 min)
1. Create a repo named: `portfolio` on GitHub
2. Push all these files to the `main` branch
3. Go to Settings → Pages → Source: GitHub Actions
4. Push again — it auto-deploys!
5. Your site is live at: https://Jay734-hue.github.io/portfolio

## 📬 Contact form
The form shows a success message by default.
To make it actually send emails, connect it to Formspree (free):
1. Sign up at formspree.io
2. Create a form → get your endpoint URL
3. In index.html, change the form action to your Formspree URL
4. Change method to POST and add `name="email"` etc.

## 🎨 Customizing colors
Edit the CSS variables at the top of `style.css` under `:root { }`
- `--accent` / `--accent2` → main purple tones
- `--bg` / `--bg2` → background shades
- `--cyan`, `--green`, `--orange`, `--pink` → tag colors
