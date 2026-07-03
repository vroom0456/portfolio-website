// ---------- MOBILE MENU ----------
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navMenu.classList.remove("open"));
});

// ---------- ACTIVE LINK ON SCROLL ----------
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove("active"));
      const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (match) match.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => spy.observe(s));

// ---------- NAVBAR SHADOW ON SCROLL ----------
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 20 ? "0 4px 20px rgba(0,0,0,.3)" : "none";
});

// ---------- CONTACT FORM (front-end only demo) ----------
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formNote.textContent = "Message ready — connect this form to a backend (e.g. Formspree, EmailJS, or your own API) to actually send it.";
  contactForm.reset();
});

