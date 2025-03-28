

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById("yearsCount").textContent = calculateYears(2021);
document.getElementById("yearsCount2").textContent = calculateYears(2021);
// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set dark theme as default if no theme is stored
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  if (currentTheme === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

// Dark / light mode
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    if (icon.hasAttribute("src-dark")) {
      icon.src = icon.getAttribute("src-dark");
    }
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    if (icon.hasAttribute("src-light")) {
      icon.src = icon.getAttribute("src-light");
    }
  });
}

// Typing Animation
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
function calculateYears(startYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}



