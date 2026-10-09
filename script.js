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
    link: "https://nuvanti-shop.pages.dev/",
    linkLabel: "Visit storefront",
    visual: "nuvanti",
    visualLabel: "Nuvanti / Storefront and commerce tools",
    screenshots: [
      { src: "assets/projects/nuvanti/nuvanti-homepage.png", alt: "Nuvanti storefront homepage featuring the clothing brand", caption: "Storefront / Homepage" },
      { src: "assets/projects/nuvanti/nuvanti-featured-products.png", alt: "Nuvanti featured clothing collection page", caption: "Storefront / Featured collection" },
      { src: "assets/projects/nuvanti/nuvanti-shop-all.png", alt: "Nuvanti shop all page with clothing products", caption: "Storefront / Shop all" },
      { src: "assets/projects/nuvanti/nuvanti-collection-home.png", alt: "Nuvanti storefront collection and best sellers", caption: "Storefront / Collection" },
      { src: "assets/projects/nuvanti/nuvanti-admin-dashboard.png", alt: "Nuvanti commerce admin dashboard with order and sales summaries", caption: "Commerce tools / Dashboard" },
      { src: "assets/projects/nuvanti/nuvanti-storefront-settings.png", alt: "Nuvanti admin settings for storefront homepage content", caption: "Commerce tools / Storefront settings" },
      { src: "assets/projects/nuvanti/nuvanti-product-inventory.png", alt: "Nuvanti product inventory management screen", caption: "Commerce tools / Product inventory" },
    ],
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
    visualLabel: "PadelSync / Booking and club management screens",
    screenshots: [
      { src: "assets/projects/padelsync/padelsync-homepage.png", alt: "PadelSync homepage for The Glass Court", caption: "PadelSync / Homepage" },
      { src: "assets/projects/padelsync/padelsync-sign-in.png", alt: "PadelSync sign in page alongside a court photograph", caption: "Member access / Sign in" },
      { src: "assets/projects/padelsync/padelsync-registration.png", alt: "PadelSync member registration page", caption: "Member access / Registration" },
      { src: "assets/projects/padelsync/padelsync-member-welcome.png", alt: "PadelSync member welcome screen", caption: "Member area / Welcome" },
      { src: "assets/projects/padelsync/padelsync-court-booking.png", alt: "PadelSync court booking details and availability screen", caption: "Reservations / Court booking" },
      { src: "assets/projects/padelsync/padelsync-my-reservations.png", alt: "PadelSync member reservations page", caption: "Reservations / My reservations" },
      { src: "assets/projects/padelsync/padelsync-admin-dashboard.png", alt: "PadelSync admin dashboard with court and booking summaries", caption: "Club tools / Dashboard" },
      { src: "assets/projects/padelsync/padelsync-court-management.png", alt: "PadelSync admin court management screen", caption: "Club tools / Court management" },
      { src: "assets/projects/padelsync/padelsync-schedule-management.png", alt: "PadelSync schedule and equipment order management", caption: "Club tools / Schedule" },
      { src: "assets/projects/padelsync/padelsync-user-management.png", alt: "PadelSync administrator user management screen", caption: "Club tools / Users" },
    ],
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
    visualLabel: "Juicy Lucy / Restaurant management screens",
    screenshots: [
      { src: "assets/projects/restaurant/restaurant-menu.png", alt: "Juicy Lucy restaurant menu and table management interface", caption: "Restaurant tools / Menu" },
      { src: "assets/projects/restaurant/restaurant-menu-editor.png", alt: "Juicy Lucy menu item editing screen", caption: "Restaurant tools / Menu editor" },
      { src: "assets/projects/restaurant/restaurant-order-builder.png", alt: "Juicy Lucy order building interface", caption: "Service / Build an order" },
      { src: "assets/projects/restaurant/restaurant-reservation-form.png", alt: "Juicy Lucy reservation form for booking a table", caption: "Reservations / Booking form" },
      { src: "assets/projects/restaurant/restaurant-profile.png", alt: "Juicy Lucy staff profile screen", caption: "Staff / Profile" },
      { src: "assets/projects/restaurant/restaurant-checkout.png", alt: "Juicy Lucy restaurant checkout interface", caption: "Service / Checkout" },
      { src: "assets/projects/restaurant/restaurant-order-management.png", alt: "Juicy Lucy restaurant order management screen", caption: "Operations / Orders" },
      { src: "assets/projects/restaurant/restaurant-table-management.png", alt: "Juicy Lucy restaurant table management screen", caption: "Operations / Tables" },
      { src: "assets/projects/restaurant/restaurant-order-details.png", alt: "Juicy Lucy restaurant order details screen", caption: "Service / Order details" },
    ],
    challenge:
      "Staff need one workflow for guest bookings, available tables, meals, and checkout.",
    approach:
      "The supplied screens cover table and menu management, guest reservations, meal selection, and checkout.",
    contribution:
      "The supplied interface captures illustrate the restaurant workflows. Implementation details beyond the visible screens are unverified.",
    more: [],
  },
  {
    number: "04",
    name: "Inventory Management System",
    category: "INVENTORY MANAGEMENT / C++",
    description:
      "A stock management system with workflows for products, inventory monitoring, purchases, sales, returns, employees, and daily reports.",
    tags: ["C++", "OOP", "Data structures", "File streams"],
    link: null,
    linkLabel: null,
    visual: "inventory",
    visualLabel: "Inventory Management System / Stock and sales workflows",
    status: "Still in development — I’m actively working on it",
    screenshots: [
      { src: "assets/projects/inventory/inventory-dashboard.png", alt: "Inventory system dashboard with stock, sales, and purchase summaries", caption: "Overview / Dashboard" },
      { src: "assets/projects/inventory/inventory-monitor.png", alt: "Inventory monitoring screen with current stock figures", caption: "Inventory / Monitor" },
      { src: "assets/projects/inventory/inventory-products.png", alt: "Inventory system product list", caption: "Catalog / Products" },
      { src: "assets/projects/inventory/inventory-categories.png", alt: "Inventory product categories list", caption: "Catalog / Categories" },
      { src: "assets/projects/inventory/inventory-stock-levels.png", alt: "Inventory stock levels and low stock information", caption: "Inventory / Stock levels" },
      { src: "assets/projects/inventory/inventory-stock-settings.png", alt: "Inventory stock settings screen", caption: "Inventory / Stock settings" },
      { src: "assets/projects/inventory/inventory-purchases.png", alt: "Inventory system purchase records", caption: "Transactions / Purchases" },
      { src: "assets/projects/inventory/inventory-sales.png", alt: "Inventory system sales records", caption: "Transactions / Sales" },
      { src: "assets/projects/inventory/inventory-returns.png", alt: "Inventory sales returns screen", caption: "Transactions / Returns" },
      { src: "assets/projects/inventory/inventory-purchase-returns.png", alt: "Inventory purchase returns screen", caption: "Transactions / Purchase returns" },
      { src: "assets/projects/inventory/inventory-employees.png", alt: "Inventory system employee records", caption: "Management / Employees" },
      { src: "assets/projects/inventory/inventory-dashboard-summary.png", alt: "Inventory dashboard with updated stock and sales summaries", caption: "Overview / Dashboard summary" },
      { src: "assets/projects/inventory/inventory-sales-history.png", alt: "Inventory system sales history", caption: "Transactions / Sales history" },
      { src: "assets/projects/inventory/inventory-daily-report.png", alt: "Inventory system daily report with sales metrics", caption: "Reports / Daily summary" },
    ],
    challenge:
      "Keep product stock, sales, and purchasing activity organized in one place.",
    approach:
      "The supplied screens show a dashboard alongside inventory, product, purchase, sales, returns, employee, and report views.",
    contribution:
      "This is an individual project and is still in development. I’m actively working on it.",
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
    <div class="project-top"><span class="mono project-number">${escapeHtml(project.number)} <i>—</i> ${escapeHtml(project.category)}</span>${project.status ? `<span class="project-status"><i aria-hidden="true"></i>${escapeHtml(project.status)}</span>` : ""}</div>
    <div class="project-main">
      <div class="project-visual visual-${escapeHtml(project.visual)}">
        ${project.screenshots ? `<div class="project-gallery" aria-label="${escapeHtml(project.visualLabel)}">${project.screenshots.slice(0, 3).map((photo, index) => `<figure class="project-gallery-item${index === 0 ? " project-gallery-item--lead" : ""}"><img src="/${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" /><figcaption>${escapeHtml(photo.caption)}</figcaption></figure>`).join("")}${project.screenshots.length > 3 ? `<details class="gallery-more"><summary>View all ${project.screenshots.length} screenshots <span aria-hidden="true">＋</span></summary><div class="project-gallery project-gallery--more">${project.screenshots.slice(3).map((photo) => `<figure class="project-gallery-item"><img src="/${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}" loading="lazy" /><figcaption>${escapeHtml(photo.caption)}</figcaption></figure>`).join("")}</div></details>` : ""}</div>` : ""}
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
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-motion");
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
} else {
  document.querySelectorAll(".reveal").forEach((item) =>
    item.classList.add("is-visible"),
  );
}
