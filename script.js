const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* ACTIVE LINK */
const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/* =========================
   DARK MODE (SAVED)
========================= */

const darkBtn = document.getElementById("darkToggle");
const darkBtnMobile = document.getElementById("darkToggleMobile");

/* Load saved mode */
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

/* Sync toggle UI */
function syncToggle() {
  const isDark = document.body.classList.contains("dark");

  if (darkBtn) darkBtn.checked = isDark;
  if (darkBtnMobile) darkBtnMobile.checked = isDark;
}

/* Toggle */
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    image.src = 'darkwebsitebackground.png';
  } else {
    localStorage.setItem("darkMode", "disabled");
    image.src = 'websitebackground.png';
  }

  syncToggle();
}

/* Event listeners */
if (darkBtn) darkBtn.addEventListener("change", toggleDarkMode);
if (darkBtnMobile) darkBtnMobile.addEventListener("change", toggleDarkMode);

syncToggle();

/* =========================
   CHECKBOX SAVE SYSTEM
========================= */

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(box => {
  const id = box.id;

  // Load state
  if (localStorage.getItem(id) === "true") {
    box.checked = true;
  }

  // Save state
  box.addEventListener("change", () => {
    localStorage.setItem(id, box.checked);
  });
});