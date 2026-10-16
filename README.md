# Arockia Jerin Infant J — Personal Portfolio

A modern, highly animated developer portfolio built with pure HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
portfolio/
│
├── index.html          ← Main HTML (do NOT edit personal info here)
├── style.css           ← All styles, colors, animations
├── script.js           ← ⭐ EDIT THIS FILE to update content
│
└── assets/
    ├── profile/
    │   └── profile.jpg         ← 🖼️ YOUR PROFILE PHOTO (replace this)
    │
    ├── projects/
    │   ├── hopespot.jpg
    │   ├── vision-car.jpg
    │   └── cloud-platform.jpg  ← 🖼️ Project images
    │
    └── resume/
        └── resume.pdf          ← 📄 YOUR RESUME (replace this)
```

---

## ✏️ How to Update Content

**All content is controlled from a single location:**

> **`script.js`** — top section labeled `// PORTFOLIO CONFIGURATION`

### 1. Change Your Name / Role / Bio
Open `script.js` and edit the `portfolioData` object:
```js
name:    "Your Name",
role:    "Your Role",
tagline: "Your tagline...",
```

### 2. Update Profile Photo
**Option A (Recommended):** Replace `assets/profile/profile.jpg` with your photo.
- Keep the same filename `profile.jpg`
- The new image will appear automatically everywhere

**Option B:** Change the path in `script.js`:
```js
profileImage: "assets/profile/your-photo.png",
```

**Option C (Instant preview):** Hover over your profile photo on the website and click the camera icon to upload a photo directly from your computer. It will persist across page refreshes.

### 3. Replace Resume
Put your resume at `assets/resume/resume.pdf` (overwrite the existing file).  
Or change the path in `script.js`:
```js
resume: "assets/resume/your-resume.pdf",
```

### 4. Add / Edit Projects
In `script.js`, find the `projects` array and add an object:
```js
{
  title:        "My New Project",
  description:  "What this project does...",
  image:        "assets/projects/my-project.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  github:       "https://github.com/Jerin-45/repo-name",
  live:         "https://my-live-demo.com"  // leave "" if none
}
```

### 5. Add Certifications
Find the `certifications` array in `script.js`:
```js
{
  title:           "Certification Name",
  organization:    "Issuing Organization",
  year:            "2024",
  certificateLink: "https://link-to-certificate.com"
}
```

### 6. Add / Edit Education
Find the `education` array in `script.js` and add or edit entries.

### 7. Update Social Links
```js
linkedin: "https://www.linkedin.com/in/your-profile",
github:   "https://github.com/your-username",
email:    "youremail@gmail.com",
```

---

## 🚀 Running Locally

1. Open the `portfolio` folder in **VS Code**
2. Right-click `index.html` → **Open with Live Server**
3. The site will open in your browser at `http://127.0.0.1:5500`

---

## 🌐 Deploying

This is a static website. You can host it for **free** on:
- [GitHub Pages](https://pages.github.com/) — Push to a repo named `username.github.io`
- [Netlify](https://netlify.com/) — Drag and drop the portfolio folder
- [Vercel](https://vercel.com/) — Connect your GitHub repo

---

## 🎨 Customizing Design

All design tokens (colors, fonts, spacing) are in `style.css` at the top:
```css
:root {
  --clr-primary:   #6c63ff;   /* Main accent color */
  --clr-secondary: #00d4ff;   /* Cyan accent */
  --clr-accent:    #ff6b9d;   /* Pink accent */
  --clr-bg:        #070b14;   /* Background */
  ...
}
```

Change `--clr-primary` to change the overall accent color throughout the site.

---

## ♿ Accessibility

- Respects `prefers-reduced-motion` for users who disable animations
- Semantic HTML throughout
- ARIA labels on all interactive elements
- Keyboard navigable

---

*Crafted with ♥ by Arockia Jerin Infant J*
