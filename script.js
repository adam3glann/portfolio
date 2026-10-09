const projects = [
  {
    number: "01",
    name: "Nuvanti",
    category: "E-COMMERCE / INDEPENDENT PROJECT",
    description:
      "An e-commerce experience for a clothing brand, focused on presenting products clearly and creating a polished shopping experience.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudflare",
      "Supabase",
    ],
    link: "https://nuvanti.wuiltstore.com/en",
    linkLabel: "Visit storefront",
    visual: "nuvanti",
    visualLabel: "Nuvanti / Commerce, considered",
    challenge:
      "Create a clear storefront and connected commerce workflows for a clothing brand.",
    approach:
      "Built and deployed a storefront and protected admin portal. The implementation includes catalog and inventory workflows, customer orders, and checkout options. The customer facing shop is a hosted storefront.",
    contribution:
      "Independent project. Worked across the storefront and supporting application, including transactional price and stock validation, role based permissions, revocable sessions, and audit logging.",
    more: [
      "Cash on delivery, hosted Paymob payments, and manual InstaPay transfers",
      "Email verification, email code login, and authenticator MFA",
      "Browsing load test with 100 virtual users and an OWASP ZAP baseline scan",
    ],
  },
  {
    number: "02",
    name: "PadelSync",
    category: "WEB APPLICATION / UNIVERSITY TEAM PROJECT · MIU SWE230",
    description:
      "A padel court reservation and scheduling platform developed as a four-student academic project for MIU SWE230.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Railway",
    ],
    link: null,
    linkLabel: null,
    visual: "padel",
    visualLabel: "PadelSync / Court availability",
    challenge:
      "Help players find and reserve available courts while giving club staff tools to manage schedules.",
    approach:
      "The platform includes member registration and sign-in, court availability and booking, plus admin screens for court and reservation management.",
    contribution:
      "Four person SWE230 team project. My CV documents contributions across frontend and backend development, including reservation features, database level double booking prevention, authentication, and role based access.",
    more: [
      "JWT authentication and bcrypt password hashing",
      "A unique compound database index to prevent double bookings",
      "Deployed to Railway over HTTPS",
    ],
  },
  {
    number: "03",
    name: "Restaurant Management System",
    category: "RESTAURANT MANAGEMENT / INTERFACE · JUICY LUCY",
    description:
      "A restaurant management interface for staff to manage tables and menu items, book guests, add meals to reservations, and check out orders.",
    tags: [],
    link: null,
    linkLabel: null,
    visual: "restaurant",
    visualLabel: "Restaurant operations / Service flow",
    challenge:
      "Staff need one workflow for guest bookings, available tables, meals, and checkout.",
    approach:
      "The project brief describes table and menu management, guest reservations by table and time, meal selection, and a checkout screen.",
    contribution:
      "Project implementation described in the supplied brief. The repository contained no source files or screenshots to verify additional technologies or implementation details.",
    more: [],
  },
  {
    number: "04",
    name: "Inventory & Sales Tracker",
    category: "ACADEMIC PROJECT · C++",
    description:
      "A console application for product and transaction tracking, modeled around practical business workflows.",
    tags: ["C++", "OOP", "Data structures", "File streams"],
    link: null,
    linkLabel: null,
    visual: "inventory",
    visualLabel: "Inventory / Product and transaction records",
    challenge:
      "Represent product catalogs and transactions in a simple system that can preserve records between runs.",
    approach:
      "Used modular classes, object oriented design, core data structures, and file streams for persistence.",
    contribution:
      "Individual academic project, as described in the supplied CV.",
    more: [],
  },
];

// Add verified profile URLs here; empty values keep those profiles out of the page.
const socialProfiles = { GitHub: "", LinkedIn: "" };

const list = document.querySelector("#project-list");
const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );

list.innerHTML = projects
  .map(
    (project) => `
  <article class="project project--${escapeHtml(project.number)}" id="project-${escapeHtml(project.number)}">
    <div class="project-top"><span class="mono project-number">${escapeHtml(project.number)} <i>—</i> ${escapeHtml(project.category)}</span></div>
    <div class="project-main">
      <div class="project-visual visual-${escapeHtml(project.visual)}" role="img" aria-label="Abstract graphic: ${escapeHtml(project.visualLabel)}">
        ${project.visual === "nuvanti" ? '<div class="visual-caption mono">NUVANTI / PRODUCT STUDY</div><div class="fashion-shape"><span></span></div><div class="visual-footer mono"><span>APPAREL / PRESENTATION</span><span>FORM & MATERIAL</span></div>' : ""}
        ${project.visual === "padel" ? '<div class="court-lines"><span></span><span></span><span></span></div><div class="court-label mono">PADELSYNC / COURT STUDY</div><div class="court-ball"></div><div class="visual-footer mono"><span>FIND A COURT</span><span>RESERVE A SLOT</span></div>' : ""}
        ${project.visual === "restaurant" ? '<div class="service-flow"><span class="flow-node">01<br><b>BOOK</b></span><i></i><span class="flow-node">02<br><b>SERVE</b></span><i></i><span class="flow-node">03<br><b>CLOSE</b></span></div><div class="visual-footer mono"><span>TABLE SERVICE</span><span>WORKFLOW STUDY</span></div>' : ""}
        ${project.visual === "inventory" ? '<div class="inventory-lines"><span><i>PRODUCT</i><b>STOCK IN</b></span><span><i>CATALOG</i><b>UPDATE</b></span><span><i>SALES</i><b>RECORD</b></span></div><div class="visual-footer mono"><span>INVENTORY & SALES</span><span>RECORD / UPDATE</span></div>' : ""}
      </div>
      <div class="project-copy"><h3>${escapeHtml(project.name)}</h3><p class="project-description">${escapeHtml(project.description)}</p>
        ${project.tags.length ? `<p class="project-tags"><span class="mono">TECHNOLOGY</span> ${project.tags.map(escapeHtml).join(" · ")}</p>` : ""}
        <details class="case-study"><summary>Explore the case study <span aria-hidden="true">＋</span></summary><div class="case-content"><div><span class="mono">THE CHALLENGE</span><p>${escapeHtml(project.challenge)}</p></div><div><span class="mono">THE APPROACH</span><p>${escapeHtml(project.approach)}</p></div><div><span class="mono">MY CONTRIBUTION</span><p>${escapeHtml(project.contribution)}</p></div>${project.more.length ? `<ul>${project.more.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}</div></details>
        ${project.link ? `<a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">${escapeHtml(project.linkLabel)} <span>↗</span></a>` : ""}
      </div>
    </div>
  </article>`,
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();
const socialLinks = Object.entries(socialProfiles).filter(([, url]) =>
  url.trim(),
);
const profileMarkup = socialLinks
  .map(
    ([name, url]) =>
      `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(name.toUpperCase())} ↗</a>`,
  )
  .join("");
document.querySelector("#social-links").innerHTML = profileMarkup;
document.querySelector("#footer-social").innerHTML = profileMarkup;
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.setAttribute(
    "aria-label",
    expanded ? "Open navigation" : "Close navigation",
  );
  nav.classList.toggle("is-open", !expanded);
  document.body.classList.toggle("menu-open", !expanded);
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }),
);

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...nav.querySelectorAll("a")];
document.documentElement.classList.add("js-motion");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((item) => revealObserver.observe(item));
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.hash === `#${entry.target.id}`,
          ),
        );
      }),
    { rootMargin: "-30% 0px -60% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}
