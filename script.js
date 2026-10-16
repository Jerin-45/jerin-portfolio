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
  email:    "",   // Add your email here, e.g. "youremail@gmail.com"

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
      live:        "",
      video:       "" // Add video URL here (e.g. MP4 link or YouTube embed)
    },
    {
      title:       "Vision Car Racing Game",
      description: "A computer-vision based racing game that explores gesture-based interaction. Players steer the car using hand gestures captured via webcam — no keyboard required.",
      image:       "assets/projects/vision-car.jpg",
      technologies: ["Python", "OpenCV", "Computer Vision", "Pygame"],
      github:      "https://github.com/Jerin-45/vision-car-game",
      live:        "",
      video:       "" // Add video URL here
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
  // Add your certifications here.
  certifications: [
    {
      title:           "HTML & Web Development Fundamentals",
      organization:    "LinkedIn / Certified",
      issueDate:       "Verified Credential",
      certificateLink: "https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/"
    },
    {
      title:           "CSS & Responsive Web Design",
      organization:    "LinkedIn / Certified",
      issueDate:       "Verified Credential",
      certificateLink: "https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/"
    },
    {
      title:           "JavaScript (ES6+) Programming",
      organization:    "LinkedIn / Certified",
      issueDate:       "Verified Credential",
      certificateLink: "https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/"
    },
    {
      title:           "ATM Builder & System Simulation",
      organization:    "Technical Credential",
      issueDate:       "Verified Credential",
      certificateLink: "https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/"
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

// ── IndexedDB for Media Storage ─────────────────────────────────────────────
const dbName = "PortfolioMediaDB";
const storeName = "videos";

function initDB(callback) {
  try {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = function(e) {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName);
      }
    };
    request.onsuccess = function(e) {
      callback(e.target.result);
    };
    request.onerror = function(e) {
      console.warn("IndexedDB error:", e);
    };
  } catch (err) {
    console.warn("IndexedDB open error:", err);
  }
}

function saveVideoToDB(id, file) {
  initDB(function(db) {
    try {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      store.put(file, id);
    } catch (err) {
      console.warn("Could not save video to DB:", err);
    }
  });
}

function loadVideoFromDB(id, callback) {
  initDB(function(db) {
    try {
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(id);
      request.onsuccess = function(e) {
        if (e.target.result) {
          callback(e.target.result);
        }
      };
      request.onerror = function() {
        console.warn("Could not load video from DB:", id);
      };
    } catch (err) {
      console.warn("DB transaction error:", err);
    }
  });
}

// ── DOM Ready ────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  injectData();
  initNavbar();
  initMobileMenu();
  initHeroCanvas();
  initHeroTextAnimation();
  initScrollReveal();
  initProfileUpload();
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

  // Resolve profile image (localStorage override or default)
  const storedPhoto = localStorage.getItem("profilePhoto");
  const profileSrc  = storedPhoto || d.profileImage;

  // ── Hero Section ─────────────────────────────────
  safeSetAttr("hero-name",        "textContent", d.name);
  safeSetAttr("hero-role",        "textContent", d.role);
  safeSetAttr("hero-description", "textContent", d.tagline);
  safeSetSrc("hero-profile-img",  profileSrc);
  safeSetHref("btn-linkedin",     d.linkedin);
  safeSetHref("btn-github",       d.github);

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
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = d.projects.map((p, i) => {
      const isVideoSaved = localStorage.getItem(`project_video_saved_${i}`) === "true";
      const hasStaticVideo = Boolean(p.video && p.video.trim());
      const isLocked = isVideoSaved || hasStaticVideo;

      return `
      <article class="project-card" role="listitem" data-reveal data-reveal-delay="${Math.min(i * 100, 300)}">
        <div class="project-image-wrap" id="project-media-${i}">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />` : `<div class="project-img" style="background: linear-gradient(135deg, #111, #222);"></div>`}
          <div class="project-overlay"></div>
          
          ${!isLocked ? `
          <label id="project-upload-label-${i}" for="project-upload-${i}" style="position: absolute; top: 10px; right: 10px; z-index: 20; background: rgba(91, 82, 240, 0.9); color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload Video
          </label>
          <input type="file" id="project-upload-${i}" accept="video/*" class="sr-only" onchange="handleProjectVideoUpload(event, ${i})" />
          ` : ""}
          
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

    // Load static videos or saved videos from IndexedDB
    d.projects.forEach((p, i) => {
      if (p.video && p.video.trim()) {
        if (window.renderUploadedVideo) {
          window.renderUploadedVideo(p.video, i);
        }
      } else {
        loadVideoFromDB(`project-video-${i}`, (file) => {
          if (file && window.renderUploadedVideo) {
            localStorage.setItem(`project_video_saved_${i}`, "true");
            window.renderUploadedVideo(file, i);
          }
        });
      }
    });
  }

  // ── Certifications ───────────────────────────────
  const certsGrid = document.getElementById("certs-grid");
  if (certsGrid) {
    if (d.certifications.length === 0) {
      certsGrid.innerHTML = `
        <div class="cert-placeholder" data-reveal>
          <p>🎓 Certifications will appear here once added to the configuration.</p>
        </div>
      `;
    } else {
      certsGrid.innerHTML = d.certifications.map((cert, i) => `
        <div class="cert-card" role="listitem" data-reveal data-reveal-delay="${Math.min(i * 100, 300)}" onclick="window.open('${cert.certificateLink || 'https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/'}', '_blank')" style="cursor: pointer;">
          <div class="cert-icon" style="color: #0a66c2;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div class="cert-title">${cert.title}</div>
          <div class="cert-org">${cert.organization}</div>
          ${cert.issueDate || cert.year ? `<div class="cert-year" style="color: #0a66c2; font-weight: 600;">${cert.issueDate || cert.year}</div>` : ""}
          <a href="${cert.certificateLink || 'https://www.linkedin.com/in/arockia-jerin-infant-j/details/certifications/'}" target="_blank" rel="noopener noreferrer" class="cert-link" aria-label="Watch ${cert.title} on LinkedIn profile" onclick="event.stopPropagation()">
            Watch on LinkedIn Profile →
          </a>
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

// ── Profile Photo Upload (localStorage) ──────────────────────────────────────
function initProfileUpload() {
  const input     = document.getElementById("profile-upload-input");
  const heroImg   = document.getElementById("hero-profile-img");
  const aboutImg  = document.getElementById("about-profile-img");

  if (!input) return;

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;

      // Update all profile images immediately
      if (heroImg)  heroImg.src  = dataUrl;
      if (aboutImg) aboutImg.src = dataUrl;

      // Persist in localStorage so it survives page refresh
      try {
        localStorage.setItem("profilePhoto", dataUrl);
      } catch (err) {
        // localStorage quota exceeded (large image) – silently fail
        console.warn("Could not save photo to localStorage:", err.message);
      }
    };
    reader.readAsDataURL(file);
  });
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

// ── Project Video Upload Handler ─────────────────────────────────────────────
window.renderUploadedVideo = function(fileOrUrl, index) {
  const videoUrl = typeof fileOrUrl === "string" ? fileOrUrl : URL.createObjectURL(fileOrUrl);
  const wrap = document.getElementById(`project-media-${index}`);
  if (!wrap) return;

  // Permanently remove upload button & file input from DOM
  const uploadLabel = document.getElementById(`project-upload-label-${index}`);
  if (uploadLabel) uploadLabel.remove();
  const uploadInput = document.getElementById(`project-upload-${index}`);
  if (uploadInput) uploadInput.remove();

  const project = portfolioData.projects && portfolioData.projects[index];
  const posterAttr = project && project.image ? `poster="${project.image}"` : "";

  wrap.innerHTML = `
    <video src="${videoUrl}" ${posterAttr} class="project-img" autoplay loop muted playsinline style="object-fit: cover; width: 100%; height: 100%; position: absolute; inset: 0;"></video>
    <div class="project-overlay"></div>
    <span class="project-tag">Project</span>
    
    <div class="play-button-overlay" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 5; pointer-events: none;">
      <button type="button" aria-label="Play video full screen" style="width: 58px; height: 58px; background: rgba(255, 255, 255, 0.95); border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(0,0,0,0.35); pointer-events: all; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onclick="openVideoModal('${videoUrl}')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#0a0a0a" style="margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>
      </button>
    </div>
  `;
};

window.handleProjectVideoUpload = function(event, index) {
  const file = event.target.files && event.target.files[0];
  if (!file || !file.type.startsWith("video/")) return;

  // 1. Permanently lock upload in localStorage so it never shows again
  localStorage.setItem(`project_video_saved_${index}`, "true");

  // 2. Remove upload button and file input immediately from DOM
  const uploadLabel = document.getElementById(`project-upload-label-${index}`);
  if (uploadLabel) uploadLabel.remove();
  const uploadInput = document.getElementById(`project-upload-${index}`);
  if (uploadInput) uploadInput.remove();

  // 3. Automatically save the video into IndexedDB
  saveVideoToDB(`project-video-${index}`, file);

  // 4. Render the uploaded video in the card
  window.renderUploadedVideo(file, index);
};

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

