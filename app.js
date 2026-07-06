/* ═══════════════════════════════════════════════
   PORTFOLIO — app.js
   ═══════════════════════════════════════════════ */

/* ─── CONFIG — EDIT EVERYTHING IN THIS BLOCK ─── */
const CONFIG = {
  name: "Jay Prajapati",
  roles: [
    "Full Stack Developer",
    "IT & Systems Specialist",
    "MAC Candidate at WLU",
    "Data Analyst"
  ],
  tagline: "Building reliable systems, troubleshooting complex IT infrastructure, and developing responsive software solutions.",
  stats: { projects: 2, experience: 3, stacks: 4 },

  about: {
    location: "📍 Toronto, Ontario, Canada",
    status: "🟢 Seeking Full-Time Full Stack Developer Roles",
    education: "🎓 Master of Applied Computing · Wilfrid Laurier University",
    bio: [
      "I am an aspiring Full Stack Developer currently pursuing my Master's in Applied Computing at Wilfrid Laurier University, with a strong foundation in Computer Science.",
      "With hands-on experience in both full-stack development and IT operations, I thrive on solving complex technical challenges. My background spans from developing distributed network reliability prototypes to providing top-tier academic IT support.",
      "I am deeply detail-oriented, a continuous learner, and passionate about leveraging tools like Python, Java, Docker, and SQL to build efficient, user-centric applications."
    ]
  },

  contact: {
    email: "jaynprajapati14@gmail.com",
    linkedin: "https://linkedin.com/in/jay-prajapati14/",
    linkedinLabel: "linkedin.com/in/jay-prajapati14/",
    github: "https://github.com/Jay734-hue",
  },

  skills: [
    {
      name: "Languages & DBs",
      icon: "💻",
      color: "cyan",
      tags: ["Python", "Java", "SQL", "JavaScript"]
    },
    {
      name: "Tools & DevOps",
      icon: "🛠️",
      color: "orange",
      tags: ["Git", "Docker", "Agile Development", "System Design"]
    },
    {
      name: "IT Operations",
      icon: "⚙️",
      color: "green",
      tags: ["Hardware/Software Troubleshooting", "Computer Provisioning", "Helpdesk Support", "Inventory Management"]
    },
    {
      name: "Systems & Network",
      icon: "☁️",
      color: "pink",
      tags: ["Windows OS", "Microsoft 365", "SharePoint", "Network Connectivity"]
    }
  ],

  projects: [
    {
      title: "System Analytics & Dashboarding",
      desc: "Researched and analyzed large datasets to resolve data inconsistencies. Created detailed reporting dashboards to communicate technical trends to stakeholders.",
      impact: "📊 Generated reliable performance insights",
      stack: ["Python", "SQL", "Data Analysis"],
      category: "backend",
      featured: true,
      emoji: "📊",
      thumb: "",
      github: "https://github.com/Jay734-hue",
      demo: ""
    },
    {
      title: "Network Reliability Prototype",
      desc: "Built a distributed systems prototype to evaluate fault tolerance and system reliability under simulated network connectivity failures.",
      impact: "⚡ Optimized adaptive timeout strategies",
      stack: ["Go", "Docker", "System Design"],
      category: "backend",
      featured: true,
      emoji: "🔌",
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

document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  const btn = this.querySelector("button[type='submit']");

  // 👉 Your actual Formspree URL
  const FORMSPREE_URL = "https://formspree.io/f/mzdlwzyaE";

  msg.className = "form-note";
  msg.textContent = "Sending...";
  btn.disabled = true;

  try {
    const formData = new FormData(this);
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      msg.className = "form-note success";
      msg.textContent = "✅ Message sent! I'll get back to you soon.";
      this.reset();
    } else {
      const data = await response.json();
      msg.className = "form-note error";
      if (data.errors) {
        msg.textContent = "❌ Formspree says: " + data.errors.map(err => err.message).join(", ");
      } else {
        msg.textContent = "❌ Oops! There was a problem sending your message.";
      }
    }
  } catch (error) {
    msg.className = "form-note error";
    msg.textContent = "❌ Network error. Please email me directly instead.";
  }

  btn.disabled = false;
  setTimeout(() => { if(msg.textContent.includes("✅")) msg.textContent = ""; }, 5000);
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
