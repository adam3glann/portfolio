const projects = [
  {
    number: "01", name: "Nuvanti", category: "INDEPENDENT PROJECT · E-COMMERCE",
    description: "An e-commerce experience for a clothing brand, focused on presenting products clearly and creating a polished shopping experience.",
    tags: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Cloudflare", "Supabase"],
    link: "https://nuvanti.wuiltstore.com/en", linkLabel: "Visit storefront",
    visual: "nuvanti", visualLabel: "Nuvanti / Commerce, considered",
    challenge: "Create a clear storefront and connected commerce workflows for a clothing brand.",
    approach: "Built and deployed a storefront and protected admin portal. The implementation includes catalog and inventory workflows, customer orders, and checkout options. The customer facing shop is a hosted storefront.",
    contribution: "Independent project. Worked across the storefront and supporting application, including transactional price and stock validation, role based permissions, revocable sessions, and audit logging.",
    more: ["Cash on delivery, hosted Paymob payments, and manual InstaPay transfers", "Email verification, email code login, and authenticator MFA", "Browsing load test with 100 virtual users and an OWASP ZAP baseline scan"]
  },
  {
    number: "02", name: "PadelSync", category: "UNIVERSITY TEAM PROJECT · MIU SWE230",
    description: "A web based padel court reservation and scheduling platform built by a four student team.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose", "Railway"],
    link: null, linkLabel: null, visual: "padel", visualLabel: "PadelSync / Court availability",
    challenge: "Help players find and reserve available courts while giving club staff tools to manage schedules.",
    approach: "Built reservation features across the frontend and backend, and designed REST APIs and MVC data models for users, courts, and bookings.",
    contribution: "Four person SWE230 team project. My CV documents contributions across frontend and backend development, including reservation features, database level double booking prevention, authentication, and role based access.",
    more: ["JWT authentication and bcrypt password hashing", "A unique compound database index to prevent double bookings", "Deployed to Railway over HTTPS"]
  },
  {
    number: "03", name: "Restaurant Management System", category: "INTERFACE PROJECT · JUICY LUCY",
    description: "A restaurant management interface for staff to manage tables and menu items, book guests, add meals to reservations, and check out orders.",
    tags: [], link: null, linkLabel: null, visual: "restaurant", visualLabel: "Restaurant operations / Service flow",
    challenge: "Staff need one workflow for guest bookings, available tables, meals, and checkout.",
    approach: "The project brief describes table and menu management, guest reservations by table and time, meal selection, and a checkout screen.",
    contribution: "Project implementation described in the supplied brief. The repository contained no source files or screenshots to verify additional technologies or implementation details.", more: []
  },
  {
    number: "04", name: "Inventory & Sales Tracker", category: "ACADEMIC PROJECT · C++",
    description: "A console application for product and transaction tracking, modeled around practical business workflows.",
    tags: ["C++", "OOP", "Data structures", "File streams"], link: null, linkLabel: null, visual: "inventory", visualLabel: "Inventory / Product and transaction records",
    challenge: "Represent product catalogs and transactions in a simple system that can preserve records between runs.",
    approach: "Used modular classes, object oriented design, core data structures, and file streams for persistence.",
    contribution: "Individual academic project, as described in the supplied CV.", more: []
  }
];

const list = document.querySelector("#project-list");
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

list.innerHTML = projects.map((project) => `
  <article class="project" id="project-${escapeHtml(project.number)}">
    <div class="project-top"><span class="mono project-number">${escapeHtml(project.number)} <i>—</i> ${escapeHtml(project.category)}</span><span class="project-marker" aria-hidden="true">↗</span></div>
    <div class="project-main">
      <div class="project-visual visual-${escapeHtml(project.visual)}" role="img" aria-label="Abstract graphic: ${escapeHtml(project.visualLabel)}">
        ${project.visual === "nuvanti" ? '<div class="visual-caption mono">NUVANTI / SELECTED COLLECTION</div><div class="fashion-shape"><span></span></div><div class="visual-footer mono"><span>01 — OBJECTS IN FORM</span><span>VIEW 03 / 08</span></div>' : ""}
        ${project.visual === "padel" ? '<div class="court-lines"><span></span><span></span><span></span></div><div class="court-label mono">COURT 02&nbsp; / &nbsp;AVAILABLE</div><div class="court-ball"></div><div class="visual-footer mono"><span>FIND A COURT</span><span>09:30 — 11:00</span></div>' : ""}
        ${project.visual === "restaurant" ? '<div class="service-flow"><span class="flow-node">01<br><b>BOOK</b></span><i></i><span class="flow-node">02<br><b>SERVE</b></span><i></i><span class="flow-node">03<br><b>CLOSE</b></span></div><div class="visual-footer mono"><span>TABLE SERVICE</span><span>ONE CONTINUOUS FLOW</span></div>' : ""}
        ${project.visual === "inventory" ? '<div class="inventory-lines"><span><i>SKU-0081</i><b>+ 24</b></span><span><i>SKU-0142</i><b>− 03</b></span><span><i>SKU-0207</i><b>+ 16</b></span></div><div class="visual-footer mono"><span>STOCK MOVEMENT</span><span>RECORD / UPDATE</span></div>' : ""}
      </div>
      <div class="project-copy"><p class="project-kicker mono">PROJECT ${escapeHtml(project.number)}</p><h3>${escapeHtml(project.name)}</h3><p class="project-description">${escapeHtml(project.description)}</p>
        ${project.tags.length ? `<div class="project-tags">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
        <details class="case-study"><summary>Explore the case study <span aria-hidden="true">＋</span></summary><div class="case-content"><div><span class="mono">THE CHALLENGE</span><p>${escapeHtml(project.challenge)}</p></div><div><span class="mono">THE APPROACH</span><p>${escapeHtml(project.approach)}</p></div><div><span class="mono">MY CONTRIBUTION</span><p>${escapeHtml(project.contribution)}</p></div>${project.more.length ? `<ul>${project.more.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}</div></details>
        ${project.link ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">${escapeHtml(project.linkLabel)} <span>↗</span></a>` : '<span class="project-link project-link-muted">Academic / project work</span>'}
      </div>
    </div>
  </article>`).join("");

document.querySelector("#year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !expanded);
  document.body.classList.toggle("menu-open", !expanded);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll("a")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
  }), { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach((section) => observer.observe(section));
}
