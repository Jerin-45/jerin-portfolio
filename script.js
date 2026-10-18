// ===============================
// PORTFOLIO CONFIGURATION
// ===============================
// Edit ONLY this section to update your portfolio content.
// No need to touch the HTML or CSS.

const portfolioData = {

  // ── Personal Info ────────────────────────────────────
  name:        "Arockia Jerin Infant J",
  role:        "MCA Student & Aspiring Software Developer",
  tagline:     "I build modern web experiences and explore software development, AI, cloud computing and emerging technologies.",

  // ── Profile Photo ────────────────────────────────────
  // CHANGE PROFILE PHOTO HERE
  // Replace the file at assets/profile/profile.jpg with your photo.
  // Or change the path below if you rename the file.
  profileImage: "assets/profile/profile.jpg",

  // ── Resume ───────────────────────────────────────────
  // CHANGE RESUME HERE
  // Replace the file at assets/resume/resume.pdf with your resume.
  // Or change the path below if you rename the file.
  resume: "assets/resume/resume.pdf",

  // ── Social Links ─────────────────────────────────────
  linkedin: "https://www.linkedin.com/in/arockia-jerin-infant-j",
  github:   "https://github.com/Jerin-45",
  email:    "arojerin7@gmail.com",

  // ── About Section ────────────────────────────────────
  about: {
    bio: "I'm Arockia Jerin Infant J, currently pursuing my Master of Computer Applications (MCA) at Rathinam Technical Campus, building on my B.Sc. Computer Science foundation. I'm passionate about creating practical technology solutions that make a difference.",
    bio2: "My interests span full-stack web development, artificial intelligence, computer vision, and cloud computing. I enjoy turning ideas into real-world projects — from rescue coordination platforms to gesture-controlled games.",
    stats: [
      { icon: "🎓", label: "MCA Student",           sub: "Rathinam Technical Campus" },
      { icon: "🖥️",  label: "B.Sc. Computer Science", sub: "Graduate"                 },
      { icon: "🌐", label: "Web Development",        sub: "Full-Stack Learner"        },
      { icon: "🤖", label: "AI & Cloud Learning",    sub: "Ongoing"                   }
    ]
  },

  // ── Skills ───────────────────────────────────────────
  // Add or remove skills here. icon can be an emoji or leave "" for default.
  skills: [
    { name: "HTML",             icon: "🌐" },
    { name: "CSS",              icon: "🎨" },
    { name: "JavaScript",       icon: "⚡" },
    { name: "Python",           icon: "🐍" },
    { name: "Java",             icon: "☕" },
    { name: "SQL",              icon: "🗄️" },
    { name: "React",            icon: "⚛️" },
    { name: "Supabase",         icon: "🔥" },
    { name: "Git",              icon: "🌿" },
    { name: "GitHub",           icon: "🐙" },
    { name: "AI",               icon: "🧠" },
    { name: "Computer Vision",  icon: "👁️" },
    { name: "Cloud Computing",  icon: "☁️" }
  ],

  // ── Projects ─────────────────────────────────────────
  // To add a project: copy one object block and fill in your data.
  // image paths: put the image inside assets/projects/
  projects: [
    {
      title:       "Hope Spot Rescue Platform",
      description: "A real-time, role-based rescue-response and coordination platform designed to help people in roadside emergencies. Features location sharing, alert dispatch and multi-role dashboards.",
      image:       "assets/projects/hopespot.jpg",
      technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      github:      "https://github.com/Jerin-45/Hopespotrescueplatform",
      video:       "assets/projects/hopespot-demo.mp4"
    },
    {
      title:       "Vision Car Racing Game",
      description: "A computer-vision based racing game that explores gesture-based interaction. Players steer the car using hand gestures captured via webcam — no keyboard required.",
      image:       "assets/projects/vision-car.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Pygame"],
      github:      "https://github.com/Jerin-45/vision-car-game",
      video:       "assets/projects/vision-car-demo.mp4"
    },
    {
      title:       "AI Cloud Management Platform",
      description: "A modern cloud management platform project focused on creating a clean, intelligent and user-friendly cloud experience with AI-powered insights.",
      image:       "assets/projects/cloud-platform.jpg",
      technologies: ["Cloud Computing", "AI", "Dashboard UI"],
      github:      "https://github.com/Jerin-45/ai-colud-managment",
      live:        "",
      video:       "" // Add video URL here
    }
  ],

  // ── Certifications ───────────────────────────────────
  // Completed certifications, skill competencies & coursework
  certifications: [
    {
      title:        "Design Thinking and Innovation",
      organization: "IIT Bombay",
      issueDate:    "Sep 2026",
      credentialId: "RQ999QR5UB1U",
      description:  "Mastered human-centered design principles, empathy mapping, ideation frameworks, rapid concept prototyping, and user-centric innovation methodologies.",
      skills:       ["Design Thinking", "Human-Centered Design", "User Empathy", "Prototyping", "Innovation Strategy"],
      icon:         "design"
    },
    {
      title:        "C for Everyone, Part 2: Structured Programming",
      organization: "University of California, Santa Cruz",
      issueDate:    "Sep 2026",
      credentialId: "UQ5U4T4XDYXN",
      description:  "Engineered robust procedural software leveraging advanced C structured programming, dynamic memory allocation, pointer arithmetic, structs, and recursive algorithms.",
      skills:       ["Structured C", "Pointers & Memory", "Dynamic Allocation", "Structs & ADTs", "Recursion"],
      icon:         "c-lang"
    },
    {
      title:        "C for Everyone, Part 1: Programming Fundamentals",
      organization: "University of California, Santa Cruz",
      issueDate:    "Sep 2026",
      credentialId: "APUFRPJPE4Y1",
      description:  "Mastered foundational C programming concepts including lexical structure, variables, conditional logic, loops, functions, and algorithmic execution.",
      skills:       ["C Fundamentals", "Control Flow", "Functions & Arrays", "Procedural Logic", "Algorithms"],
      icon:         "c-lang"
    },
    {
      title:        "SQL for Data Science",
      organization: "Coursera (UC Davis)",
      issueDate:    "Sep 2026",
      credentialId: "E6N6D5Y7M4YY7",
      description:  "Executed complex relational queries, multi-table joins, subqueries, data aggregation, filtering, and data profiling for data science pipelines.",
      skills:       ["SQL Queries", "Relational Joins", "Data Aggregation", "Subqueries", "Data Profiling"],
      icon:         "database"
    },
    {
      title:        "Programming for Everybody (Getting Started with Python)",
      organization: "University of Michigan",
      issueDate:    "Aug 2026",
      credentialId: "VRTPN5D7TD7M",
      description:  "Completed foundational Python engineering covering data types, expressions, conditional branching, iterative loops, functions, and modular scripting.",
      skills:       ["Python 3", "Conditional Logic", "Loops & Iterations", "Functions", "Procedural Scripting"],
      icon:         "python"
    },
    {
      title:        "Responsible AI: Applying AI Principles with Google Cloud",
      organization: "Google",
      issueDate:    "Jul 2026",
      credentialId: "Google Cloud Verified",
      description:  "Operationalized responsible AI frameworks, ethical machine learning governance, bias mitigation, fairness metrics, and transparency on Google Cloud Platform.",
      skills:       ["Responsible AI", "Google Cloud (GCP)", "AI Governance", "Ethics & Fairness", "Transparency"],
      icon:         "google"
    },
    {
      title:        "Claude Platform 101",
      organization: "Anthropic",
      issueDate:    "Jul 2026",
      credentialId: "Anthropic Verified",
      description:  "Trained on the Claude platform architecture, API integrations, context window optimization, tool-use execution, and prompt engineering best practices.",
      skills:       ["Claude API", "Anthropic Platform", "Prompt Engineering", "Tool Use & Function Calling", "LLM Workflows"],
      icon:         "anthropic"
    },
    {
      title:        "Agents and Workflows",
      organization: "OpenAI",
      issueDate:    "Jul 2026",
      credentialId: "4r6xbltdhfkg",
      description:  "Architected autonomous multi-agent systems, complex workflow orchestrations, function calling pipelines, and stateful agent coordination.",
      skills:       ["AI Agents", "Agentic Workflows", "Function Calling", "Tool Orchestration", "Autonomous Systems"],
      icon:         "openai"
    }
  ],

  // ── Education ────────────────────────────────────────
  education: [
    {
      degree:      "Master of Computer Applications (MCA)",
      field:       "Computer Applications",
      institution: "Rathinam Technical Campus",
      period:      "2024 – Present",
      description: "Pursuing MCA with a focus on software engineering, advanced programming, cloud computing and emerging technologies."
    },
    {
      degree:      "Bachelor of Science (B.Sc.)",
      field:       "Computer Science",
      institution: "Previously attended institution",
      period:      "2021 – 2024",
      description: "Completed B.Sc. Computer Science, building a strong foundation in programming, data structures, algorithms, and database management."
    }
  ],

  // ── Contact Section ──────────────────────────────────
  contactSubtitle: "I'm open to collaborations, internships, and interesting projects. Feel free to reach out!",

  // ── Footer ───────────────────────────────────────────
  footerText: "© 2025 Arockia Jerin Infant J. All rights reserved."

};

// ===============================
// END OF CONFIGURATION
// ===============================
// Everything below is the engine — you generally don't need to edit it.

// ── DOM Ready ────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  injectData();
  initNavbar();
  initMobileMenu();
  initHeroCanvas();
  initHeroTextAnimation();
  initScrollReveal();
  initBackToTop();
  initSmoothScroll();
});

// ── Loader ───────────────────────────────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      // Trigger hero animations after loader
      document.querySelectorAll(".reveal-text").forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("animate-in");
        }, i * 120 + 100);
      });
    }, 1900);
  });
}

// ── Inject Portfolio Data ────────────────────────────────────────────────────
function injectData() {
  const d = portfolioData;

  // Resolve profile image (fixed to permanent profile asset)
  localStorage.removeItem("profilePhoto");
  const profileSrc = d.profileImage;

  // ── Hero Section ─────────────────────────────────
  safeSetAttr("hero-name",        "textContent", d.name);
  safeSetAttr("hero-role",        "textContent", d.role);
  safeSetAttr("hero-description", "textContent", d.tagline);
  safeSetSrc("hero-profile-img",  profileSrc);
  safeSetHref("btn-linkedin",     d.linkedin);
  safeSetHref("btn-github",       d.github);
  safeSetHref("btn-email",        d.email ? `mailto:${d.email}` : "");

  // Resume modal buttons
  const btnResume = document.getElementById("btn-resume");
  if (btnResume) btnResume.onclick = window.openResumeModal;

  // ── About Section ────────────────────────────────
  safeSetSrc("about-profile-img",  profileSrc);
  safeSetAttr("about-bio",         "textContent", d.about.bio);
  safeSetAttr("about-bio-2",       "textContent", d.about.bio2);

  const aboutResumeBtn = document.getElementById("about-resume-btn");
  if (aboutResumeBtn) aboutResumeBtn.onclick = window.openResumeModal;

  // About stat cards
  const statsEl = document.getElementById("about-stats");
  if (statsEl) {
    statsEl.innerHTML = d.about.stats.map(stat => `
      <div class="about-stat-card" role="listitem">
        <span class="stat-icon">${stat.icon}</span>
        <span class="stat-label">${stat.label}</span>
        <span class="stat-sub">${stat.sub}</span>
      </div>
    `).join("");
  }

  // ── Skills ───────────────────────────────────────
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = d.skills.map((skill, i) => `
      <div class="skill-card" role="listitem" data-reveal data-reveal-delay="${Math.min(i * 50, 400)}" title="${skill.name}">
        <span class="skill-icon">${skill.icon || "💡"}</span>
        <span class="skill-name">${skill.name}</span>
      </div>
    `).join("");
  }

  // ── Projects ─────────────────────────────────────
  // ── Projects Section ─────────────────────────────
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = d.projects.map((p, i) => {
      const hasStaticVideo = Boolean(p.video && p.video.trim());

      return `
      <article class="project-card" role="listitem" data-reveal data-reveal-delay="${Math.min(i * 100, 300)}">
        <div class="project-image-wrap" id="project-media-${i}">
          ${hasStaticVideo ? `
            <video src="${p.video}" ${p.image ? `poster="${p.image}"` : ""} class="project-img" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%; position: absolute; inset: 0;"></video>
            <div class="project-overlay"></div>
            <div class="play-button-overlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 5; pointer-events: none;">
              <button type="button" aria-label="Play video full screen" style="width: 58px; height: 58px; background: rgba(255, 255, 255, 0.95); border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.35); pointer-events: all; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onclick="openVideoModal('${p.video}')">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0a0a0a" style="margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>
              </button>
            </div>
          ` : `
            ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />` : `<div class="project-img" style="background: linear-gradient(135deg, #111, #222);"></div>`}
            <div class="project-overlay"></div>
          `}
          <span class="project-tag">Project</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-techs">
            ${p.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-links">
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${p.title} source code on GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                Source Code
              </a>
            ` : ""}
            ${p.live ? `
              <a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-link live-link" aria-label="View ${p.title} live demo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            ` : ""}
          </div>
        </div>
      </article>
      `;
    }).join("");
  }

  // ── Certifications ───────────────────────────────
  const certsGrid = document.getElementById("certs-grid");
  if (certsGrid) {
    if (!d.certifications || d.certifications.length === 0) {
      certsGrid.innerHTML = `
        <div class="cert-placeholder" data-reveal>
          <p>🎓 Certifications will appear here once added to the configuration.</p>
        </div>
      `;
    } else {
      const getCertIconSvg = (iconType) => {
        switch (iconType) {
          case "design":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`;
          case "c-lang":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
          case "google":
            return `<svg width="22" height="22" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/></svg>`;
          case "anthropic":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 3.5H13.8L21 20.5h3.67L17.47 3.5zm-10.94 0L0 20.5h3.67l1.7-4.1h7.06l1.7 4.1h3.67L10.6 3.5H6.53zm-.12 10.15 2.39-5.75 2.39 5.75H6.41z"/></svg>`;
          case "openai":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.28 9.38a5.95 5.95 0 0 0-.52-4.93 6.08 6.08 0 0 0-6.53-2.86 6.04 6.04 0 0 0-4.66-2.09 6.08 6.08 0 0 0-5.8 4.24 6.06 6.06 0 0 0-4.04 2.92 6.07 6.07 0 0 0 .74 7.15 5.95 5.95 0 0 0 .52 4.93 6.08 6.08 0 0 0 6.53 2.86 6.04 6.04 0 0 0 4.66 2.09 6.08 6.08 0 0 0 5.8-4.24 6.06 6.06 0 0 0 4.04-2.92 6.07 6.07 0 0 0-.74-7.15zm-8.86 11.8a4.57 4.57 0 0 1-2.92-.72l.14-.08 4.88-2.82a.77.77 0 0 0 .39-.67v-6.88l2.07 1.2v5.68a4.58 4.58 0 0 1-4.56 4.29zm-7.66-3.71a4.54 4.54 0 0 1-.53-2.98l.14.09 4.88 2.82c.24.14.53.14.77 0l5.96-3.44v2.39l-4.92 2.84a4.58 4.58 0 0 1-6.3-1.72zm-2.05-8.24a4.57 4.57 0 0 1 2.39-2.27v5.82a.76.76 0 0 0 .38.67l5.96 3.44-2.07 1.2-4.92-2.84a4.58 4.58 0 0 1-1.74-6.02zm12.33 1.95-5.96-3.44 2.07-1.2 4.92 2.84a4.58 4.58 0 0 1 1.74 6.02 4.57 4.57 0 0 1-2.39 2.27v-5.82a.76.76 0 0 0-.38-.67zm3.03-2.58-.14-.09-4.88-2.82a.78.78 0 0 0-.77 0l-5.96 3.44v-2.39l4.92-2.84a4.58 4.58 0 0 1 6.83 4.7zm-8.83 5.09-2.68-1.55 2.68-1.55 2.68 1.55z"/></svg>`;
          case "database":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`;
          case "python":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10 20-6-6 6-6"/><path d="m14 4 6 6-6 6"/></svg>`;
          case "html":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
          case "css":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`;
          case "js":
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 8 5 5-5 5"/><path d="M13 18h4"/></svg>`;
          default:
            return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`;
        }
      };

      certsGrid.innerHTML = d.certifications.map((cert, i) => `
        <div class="cert-card" role="listitem" data-reveal data-reveal-delay="${Math.min(i * 100, 300)}">
          <div class="cert-card-header">
            <div class="cert-icon" aria-hidden="true">
              ${getCertIconSvg(cert.icon)}
            </div>
            <span class="cert-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              ${cert.issueDate || 'Completed'}
            </span>
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-org">${cert.organization}</div>
          ${cert.credentialId ? `
            <div class="cert-cred-id" title="Verified Credential ID">
              <span>ID:</span> ${cert.credentialId}
            </div>
          ` : ""}
          ${cert.description ? `<p class="cert-desc">${cert.description}</p>` : ""}
          ${Array.isArray(cert.skills) && cert.skills.length > 0 ? `
            <div class="cert-skills" aria-label="Skills completed in ${cert.title}">
              ${cert.skills.map(skill => `<span class="cert-skill-tag">${skill}</span>`).join("")}
            </div>
          ` : ""}
        </div>
      `).join("");
    }
  }

  // ── Education ────────────────────────────────────
  const timeline = document.getElementById("education-timeline");
  if (timeline) {
    timeline.innerHTML = d.education.map((edu, i) => `
      <div class="timeline-item" role="listitem" data-reveal data-reveal-delay="${i * 150}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <span class="timeline-period">${edu.period}</span>
          <div class="timeline-degree">${edu.degree}</div>
          <div class="timeline-field">${edu.field}</div>
          <div class="timeline-school">${edu.institution}</div>
          ${edu.description ? `<p class="timeline-desc">${edu.description}</p>` : ""}
        </div>
      </div>
    `).join("");
  }

  // ── Contact Section ──────────────────────────────
  safeSetAttr("contact-subtitle", "textContent", d.contactSubtitle);

  const contactCards = document.getElementById("contact-cards");
  if (contactCards) {
    const links = [];

    if (d.linkedin) {
      links.push({
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
        title: "LinkedIn",
        value: "Connect with me",
        href:  d.linkedin,
        label: "Visit LinkedIn Profile"
      });
    }

    if (d.github) {
      links.push({
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
        title: "GitHub",
        value: "@Jerin-45",
        href:  d.github,
        label: "Visit GitHub Profile"
      });
    }

    if (d.email) {
      links.push({
        icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        title: "Email",
        value: d.email,
        href:  `mailto:${d.email}`,
        label: `Send email to ${d.email}`
      });
    }

    contactCards.innerHTML = links.map((link, i) => `
      <div class="contact-card" role="listitem" data-reveal data-reveal-delay="${i * 100}">
        <div class="contact-icon-wrap">${link.icon}</div>
        <div class="contact-card-title">${link.title}</div>
        <div class="contact-card-value">${link.value}</div>
        <a href="${link.href}" target="${link.href.startsWith("mailto") ? "_self" : "_blank"}" rel="noopener noreferrer" class="btn btn-primary contact-card-btn" aria-label="${link.label}">
          <span>${link.title === "Email" ? "Send Mail" : "Visit " + link.title}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `).join("");
  }

  // ── Footer ───────────────────────────────────────
  safeSetAttr("footer-text", "textContent", d.footerText);
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function safeSetAttr(id, attr, value) {
  const el = document.getElementById(id);
  if (el && value) el[attr] = value;
}

function safeSetSrc(id, src) {
  const el = document.getElementById(id);
  if (el && src) el.src = src;
}

function safeSetHref(id, href) {
  const el = document.getElementById(id);
  if (el && href) el.href = href;
}

// ── Custom Cursor ────────────────────────────────────────────────────────────
function initCustomCursor() {
  const cursor   = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top  = mouseY + "px";
  });

  // Smooth follower
  (function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top  = followerY + "px";
    requestAnimationFrame(animateFollower);
  })();

  // Hover interaction
  document.querySelectorAll("a, button, .skill-card, .project-card, .cert-card, label").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    });
  });
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function initNavbar() {
  const navbar  = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Scroll-based navbar
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    updateActiveNavLink(sections, navLinks);
  }, { passive: true });

  // Initial active state
  updateActiveNavLink(sections, navLinks);
}

function updateActiveNavLink(sections, links) {
  const scrollY = window.scrollY + 100;
  let current   = "";

  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

// ── Mobile Menu ──────────────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn   = document.getElementById("mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openMenu() {
    mobileMenu.classList.add("open");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.contains("open") ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener("click", closeMenu);

  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Close on outside click
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });
}

// ── Hero Canvas (Particle Grid) ───────────────────────────────────────────────
function initHeroCanvas() {
  const canvas  = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx     = canvas.getContext("2d");
  const hero    = canvas.closest(".hero");
  let particles = [];
  let animFrame;
  let mouseX = -1000, mouseY = -1000;

  // Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    initParticles();
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height,
        vx:   (Math.random() - 0.5) * 0.5,
        vy:   (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw subtle grid
    ctx.strokeStyle = "rgba(108, 99, 255, 0.04)";
    ctx.lineWidth   = 1;
    const gridSize  = 60;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw particles and connections
    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounds
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Mouse repel (gentle)
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.5;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
        // Clamp velocity
        p.vx = Math.max(-1.5, Math.min(1.5, p.vx));
        p.vy = Math.max(-1.5, Math.min(1.5, p.vy));
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q    = particles[j];
        const dx2  = p.x - q.x;
        const dy2  = p.y - q.y;
        const d2   = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (d2 < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.12 * (1 - d2 / 120)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      }
    });

    animFrame = requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener("resize", resize, { passive: true });

  canvas.closest(".hero").addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  canvas.closest(".hero").addEventListener("mouseleave", () => {
    mouseX = -1000;
    mouseY = -1000;
  });
}

// ── Hero Text Type-Write Animation ────────────────────────────────────────────
function initHeroTextAnimation() {
  const nameEl = document.getElementById("hero-name");
  if (!nameEl) return;

  // Already set by injectData(); we'll animate it with a typewriter reveal
  const fullText = portfolioData.name;
  nameEl.textContent = "";

  // Start after loader finishes
  setTimeout(() => {
    let i = 0;
    function typeChar() {
      if (i < fullText.length) {
        nameEl.textContent += fullText[i++];
        setTimeout(typeChar, 55);
      }
    }
    typeChar();
  }, 2200);
}

// ── Scroll Reveal (IntersectionObserver) ─────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

  // Observe all data-reveal elements (including dynamically injected ones)
  function observeAll() {
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  }

  observeAll();
  // Re-observe after DOM injection (skills, projects, etc.)
  setTimeout(observeAll, 200);
}



// ── Back to Top ──────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ── Smooth Scroll (for nav links & hero CTA) ──────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const navH   = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 70;
      const top    = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// ── Video Modal ──────────────────────────────────────────────────────────────
window.openVideoModal = function(url) {
  const modal = document.getElementById("video-modal");
  const container = document.getElementById("video-container");
  const content = modal ? modal.querySelector(".video-modal-content") : null;
  if (!modal || !container) return;
  
  let iframeSrc = "";
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("youtube.com/watch?v=")) videoId = url.split("v=")[1].split("&")[0];
    else if (url.includes("youtu.be/")) videoId = url.split("youtu.be/")[1].split("?")[0];
    
    iframeSrc = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>`;
  } else {
    iframeSrc = `<video width="100%" height="100%" controls autoplay playsinline style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit: contain;" src="${url}">Your browser does not support the video tag.</video>`;
  }
  
  container.innerHTML = iframeSrc;
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  if (content) content.style.transform = "scale(1)";
  document.body.style.overflow = "hidden";
};

window.closeVideoModal = function() {
  const modal = document.getElementById("video-modal");
  const container = document.getElementById("video-container");
  const content = modal ? modal.querySelector(".video-modal-content") : null;
  if (!modal || !container) return;
  
  modal.style.opacity = "0";
  if (content) content.style.transform = "scale(0.95)";
  
  const vid = container.querySelector("video");
  if (vid) vid.pause();
  
  setTimeout(() => {
    modal.style.visibility = "hidden";
    container.innerHTML = "";
    document.body.style.overflow = "";
  }, 300);
};

document.addEventListener("DOMContentLoaded", () => {
  const modalClose = document.getElementById("video-modal-close");
  const modal = document.getElementById("video-modal");
  
  if (modalClose) {
    modalClose.addEventListener("click", window.closeVideoModal);
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) window.closeVideoModal();
    });
  }
});



// ── Resume Modal Handlers ───────────────────────────────────────────────────
window.openResumeModal = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const modal = document.getElementById("resume-modal");
  const dialog = modal ? modal.querySelector(".resume-modal-dialog") : null;
  if (!modal) return;
  modal.style.visibility = "visible";
  modal.style.opacity = "1";
  if (dialog) dialog.style.transform = "scale(1)";
  document.body.style.overflow = "hidden";
};

window.closeResumeModal = function() {
  const modal = document.getElementById("resume-modal");
  const dialog = modal ? modal.querySelector(".resume-modal-dialog") : null;
  if (!modal) return;
  modal.style.opacity = "0";
  if (dialog) dialog.style.transform = "scale(0.96)";
  setTimeout(() => {
    modal.style.visibility = "hidden";
    document.body.style.overflow = "";
  }, 300);
};

window.printResume = function() {
  window.print();
};

document.addEventListener("DOMContentLoaded", () => {
  const resumeModal = document.getElementById("resume-modal");
  if (resumeModal) {
    resumeModal.addEventListener("click", (e) => {
      if (e.target === resumeModal) window.closeResumeModal();
    });
  }
  
  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (window.closeResumeModal) window.closeResumeModal();
      if (window.closeVideoModal) window.closeVideoModal();
    }
  });
});

