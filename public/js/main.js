const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
const theme_img = document.getElementById("theme-img");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  theme_img.classList.remove("night-theme-img");
  theme_img.classList.add("day-theme-img");
  toggleBtn.classList.add("dark-mode-toggle-light");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle-light");
  theme_img.classList.remove("day-theme-img");
  toggleBtn.classList.add("dark-mode-toggle");
  theme_img.classList.add("night-theme-img");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});