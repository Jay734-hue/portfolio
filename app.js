/* ═══════════════════════════════════════════════
   PORTFOLIO — app.js
   ═══════════════════════════════════════════════ */

/* ─── CONFIG — EDIT EVERYTHING IN THIS BLOCK ─── */
const CONFIG = {
  name: "Jay",                          // Your full name
  roles: [                              // Rotating role titles
    "Full-Stack Engineer",
    "Backend Developer",
    "React & Node.js Dev",
    "Problem Solver"
  ],
  tagline: "Building fast, scalable, delightful products.",
  stats: { projects: 10, experience: 3, stacks: 5 },

  about: {
    location: "📍 Your City, Country",
    status: "🟢 Open to opportunities",
    education: "🎓 Your Degree · Your University",
    bio: [
      "I'm a passionate software engineer who loves turning ideas into reality through clean, performant code.",
      "With a strong foundation in both frontend and backend technologies, I specialize in building full-stack applications that solve real problems. I care deeply about code quality, user experience, and shipping things that actually matter.",
      "When I'm not coding, I'm exploring new technologies, contributing to open source, or leveling up my problem-solving skills."
    ]
  },

  contact: {
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourhandle",
    linkedinLabel: "linkedin.com/in/yourhandle",
    github: "https://github.com/Jay734-hue",
  },

  skills: [
    {
      name: "Frontend",
      icon: "🎨",
      color: "",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      name: "Backend",
      icon: "⚙️",
      color: "cyan",
      tags: ["Node.js", "Express", "Python", "Django", "Flask", "REST APIs", "GraphQL"]
    },
    {
      name: "Database",
      icon: "🗄️",
      color: "green",
      tags: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "SQL"]
    },
    {
      name: "Cloud & DevOps",
      icon: "☁️",
      color: "orange",
      tags: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Vercel", "Render"]
    },
    {
      name: "Tools & Testing",
      icon: "🛠️",
      color: "pink",
      tags: ["Git", "Jest", "Playwright", "ESLint", "Prettier", "Postman", "Figma"]
    },
    {
      name: "Languages",
      icon: "💻",
      color: "",
      tags: ["JavaScript", "TypeScript", "Python", "Bash", "SQL"]
    }
  ],

  projects: [
    {
      title: "Project Alpha",
      desc: "A full-stack web app that does something impressive. Built with React and Node.js, it handles real-time data and delivers a seamless user experience.",
      impact: "⚡ 40% faster load time · 1,000+ active users",
      stack: ["React", "Node.js", "PostgreSQL", "Docker"],
      category: "fullstack",
      featured: true,
      emoji: "🚀",
      thumb: "",            // path: "assets/projects/alpha.png"
      github: "https://github.com/Jay734-hue",
      demo: ""              // "https://your-demo.com"
    },
    {
      title: "Project Beta",
      desc: "A RESTful API service powering a mobile application. Designed for scale with rate limiting, caching, and comprehensive test coverage.",
      impact: "📦 Handles 10K req/day · 99.9% uptime",
      stack: ["Python", "Flask", "Redis", "AWS Lambda"],
      category: "backend",
      featured: false,
      emoji: "⚙️",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    },
    {
      title: "Project Gamma",
      desc: "An interactive dashboard with real-time data visualization. Clean UI, dark mode, and smooth animations built entirely in React with TypeScript.",
      impact: "📊 Visualizes 50K+ data points in real-time",
      stack: ["React", "TypeScript", "D3.js", "WebSocket"],
      category: "frontend",
      featured: true,
      emoji: "📊",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    },
    {
      title: "Project Delta",
      desc: "A machine learning pipeline that processes and classifies data with high accuracy. Includes model training, evaluation, and a simple inference API.",
      impact: "🤖 93% accuracy · Processes 5K samples/sec",
      stack: ["Python", "scikit-learn", "FastAPI", "Docker"],
      category: "ml",
      featured: false,
      emoji: "🤖",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    },
    {
      title: "Project Epsilon",
      desc: "A full-stack e-commerce platform with cart, checkout, payment integration, and an admin dashboard for inventory management.",
      impact: "🛒 End-to-end checkout · Stripe integrated",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      category: "fullstack",
      featured: false,
      emoji: "🛒",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    },
    {
      title: "Project Zeta",
      desc: "A CLI tool that automates repetitive development tasks, generating boilerplate, configs, and documentation from simple templates.",
      impact: "⏱️ Saves 2+ hrs/week per developer",
      stack: ["Node.js", "Commander.js", "Bash", "npm"],
      category: "backend",
      featured: false,
      emoji: "⚡",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    }
  ]
};
/* ─── END CONFIG ─── */


/* ══════════════════════════════
   CURSOR GLOW
══════════════════════════════ */
const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("mousemove", e => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top  = e.clientY + "px";
});
window.addEventListener("mouseleave", () => { cursorGlow.style.opacity = "0"; });
window.addEventListener("mouseenter", () => { cursorGlow.style.opacity = "1"; });


/* ══════════════════════════════
   NAV SCROLL
══════════════════════════════ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
mobileMenu.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);


/* ══════════════════════════════
   HERO TYPING
══════════════════════════════ */
function typeText(el, text, speed = 80) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i === text.length) { clearInterval(interval); resolve(); }
    }, speed);
  });
}

async function typeRoles(el, roles) {
  while (true) {
    for (const role of roles) {
      await typeText(el, role, 60);
      await new Promise(r => setTimeout(r, 2000));
      // erase
      for (let i = role.length; i >= 0; i--) {
        el.textContent = role.slice(0, i);
        await new Promise(r => setTimeout(r, 30));
      }
      await new Promise(r => setTimeout(r, 300));
    }
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await typeText(document.getElementById("typedName"), CONFIG.name, 100);
  typeRoles(document.getElementById("roleText"), CONFIG.roles);
});


/* ══════════════════════════════
   COUNTER ANIMATION
══════════════════════════════ */
function animateCount(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(ease * target);
    if (t < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const counters = document.querySelectorAll(".stat-num[data-target]");
let counted = false;
const countObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !counted) {
    counted = true;
    counters.forEach(el => animateCount(el, +el.dataset.target));
  }
}, { threshold: 0.5 });
if (counters.length) countObserver.observe(counters[0]);


/* ══════════════════════════════
   PARTICLE CANVAS
══════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function randomParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.2
    };
  }

  for (let i = 0; i < 100; i++) particles.push(randomParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168,85,247,${p.o})`;
      ctx.fill();
    });

    // connect nearby
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - d/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();


/* ══════════════════════════════
   ABOUT SECTION
══════════════════════════════ */
document.getElementById("aboutLocation").textContent = CONFIG.about.location;
document.getElementById("aboutEdu").textContent       = CONFIG.about.education;

const aboutLead = document.querySelector(".about-lead");
if (aboutLead) aboutLead.textContent = CONFIG.about.bio[0];
const aboutPs = document.querySelectorAll(".about-text p");
if (aboutPs[1]) aboutPs[1].textContent = CONFIG.about.bio[1];
if (aboutPs[2]) aboutPs[2].textContent = CONFIG.about.bio[2];


/* ══════════════════════════════
   SKILLS
══════════════════════════════ */
const skillsGrid = document.getElementById("skillsGrid");
CONFIG.skills.forEach((cat, i) => {
  const el = document.createElement("div");
  el.className = "skill-category fade-up";
  el.innerHTML = `
    <div class="skill-cat-header">
      <span class="skill-cat-icon">${cat.icon}</span>
      <span class="skill-cat-name">${cat.name}</span>
    </div>
    <div class="skill-tags">
      ${cat.tags.map(t => `<span class="skill-tag ${cat.color}">${t}</span>`).join("")}
    </div>
  `;
  skillsGrid.appendChild(el);
});


/* ══════════════════════════════
   PROJECTS
══════════════════════════════ */
const projectsGrid = document.getElementById("projectsGrid");
let activeFilter = "all";

function renderProjects(filter) {
  projectsGrid.innerHTML = "";
  const list = filter === "all"
    ? CONFIG.projects
    : CONFIG.projects.filter(p => p.category === filter);

  list.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "project-card fade-up";
    el.style.transitionDelay = `${i * 0.08}s`;

    const thumbHTML = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title}" loading="lazy" />`
      : `<div class="project-thumb-placeholder">${p.emoji}</div>`;

    const badgeHTML = p.featured
      ? `<span class="project-badge featured">⭐ Featured</span>`
      : `<span class="project-badge">${p.category}</span>`;

    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" class="project-link primary">Live Demo ↗</a>`
      : "";

    el.innerHTML = `
      <div class="project-thumb">
        ${thumbHTML}
        ${badgeHTML}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <p class="project-impact">${p.impact}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link">GitHub ↗</a>
          ${demoLink}
        </div>
      </div>
    `;
    projectsGrid.appendChild(el);
  });

  // trigger fade-up
  setTimeout(() => {
    document.querySelectorAll(".project-card.fade-up").forEach(el => {
      el.classList.add("visible");
    });
  }, 50);
}

document.getElementById("filterBar").querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderProjects(activeFilter);
  });
});
renderProjects("all");


/* ══════════════════════════════
   CONTACT
══════════════════════════════ */
document.getElementById("contactEmail").textContent = CONFIG.contact.email;
document.getElementById("contactEmail").href = `mailto:${CONFIG.contact.email}`;

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.className = "form-note success";
  msg.textContent = "✅ Message sent! I'll get back to you soon.";
  this.reset();
  setTimeout(() => { msg.textContent = ""; }, 5000);
  // TIP: Replace this with a real form handler — Formspree, EmailJS, or your own API
});


/* ══════════════════════════════
   INTERSECTION OBSERVER (fade-up)
══════════════════════════════ */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

function observeFadeUps() {
  document.querySelectorAll(".fade-up:not(.visible)").forEach(el => {
    fadeObserver.observe(el);
  });
}
observeFadeUps();
const mutObs = new MutationObserver(observeFadeUps);
mutObs.observe(document.body, { childList: true, subtree: true });


/* ══════════════════════════════
   FOOTER YEAR
══════════════════════════════ */
document.getElementById("year").textContent = new Date().getFullYear();
