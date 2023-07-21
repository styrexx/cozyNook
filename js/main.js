// Set the Year In Footer
const dateEle = document.querySelector(".footer .rows .row ul> .by-love span");
let getYear = new Date().getFullYear();
dateEle.innerHTML = getYear;

// GO UP
const goUpEle = document.querySelector(".footer .rows .row .goUp");
goUpEle.onclick = goUP;

function goUP() {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}

// Nave Bare
const navIconEle = document.querySelector(".header .navIcone");
const navBarEle = document.querySelector(".header .nav");

navIconEle.addEventListener("click", showNav);
let startedFn = true;
function showNav() {
  if (startedFn) {
    navBarEle.style.display = "flex";
    setTimeout(() => {
      navBarEle.style.opacity = 1;
    }, 100);
    startedFn = false;
  } else {
    navBarEle.style.opacity = 0;
    setTimeout(() => {
      navBarEle.style.display = "none";
    }, 1000);
    startedFn = true;
  }
}

// Auto Focuse
const emailEle = document.getElementById("email");
const emailSect = document.getElementById("contact");

window.onscroll = function () {
  if (window.scrollY >= emailSect.offsetTop - 400) {
    emailEle.focus();
  }
};
