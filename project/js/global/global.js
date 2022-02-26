/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write
/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/
/*property charAt, slicexs*/
/*jslint browser: true */
/*global window */

// Show Scroll Top
function scrollUp(e) {
  let scrollUp = document.getElementById("scroll-up");
  e.preventDefault();

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);



// Dark Light Theme

let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "uil-sun";

// Previously Selected Topic (If User Selected)
let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

// we Obtain the current theme that the interface by validating the dark-theme class
let getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
let getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We Validate If The User Previously chose a topic

// explain if parent have child

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  // add remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save Them To Local Storage
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
