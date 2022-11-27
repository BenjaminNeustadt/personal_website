const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("theme");
const theme_img = document.getElementById("theme-img");

//const frame_content = frame.contentWindow.document;

let darkMode = localStorage.getItem("dark-mode");


const enableDarkMode = () => {
  //frame_content.body.style.backgroundColor = "blue";
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  theme_img.classList.remove("night-theme-img");
  theme_img.classList.add("day-theme-img");
  toggleBtn.classList.add("dark-mode-toggle-light");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  //frame_content.body.style.backgroundColor = "red";
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

  const iframe = document.getElementById('uploadIFrame');
  var style = document.createElement('style');
  style.textContent =
      'body {' +
      '  background-color: purple;' +
      '}'
  ;

  iframe.contentDocument.head.appendChild(style);


  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


// $('#one').click(function () { // on a click on the button with id 'one'
//   $('#two').trigger('click');// trigger the click on second, and go on
//   }
//
//
//Good idea to try and use the IFrame contentWindow Property
//var x = document.getElementById("uploadIFrame");
//var y = x.contentWindow.document;
//y.body.style.backgroundColor = "red";
