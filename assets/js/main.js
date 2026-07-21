const FORM_URL = "https://forms.gle/TAAptMYiKqN9xgYg9";

document.querySelectorAll(".inscripcion-link").forEach((link) => {
  link.setAttribute("href", FORM_URL);
  if (FORM_URL !== "#") {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  }
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
