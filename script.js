let r = document.querySelector(":root");

function onload() {
  setTimeout(() => {
    document.querySelector(".transition").style.display = "none";
  }, 950);
}

function onclickme() {
  r.style.setProperty("--transitioncolor1", "rgb(0, 0, 0, 0)");
  r.style.setProperty("--transitioncolor2", "#3454d1");
  document.querySelector(".transition").style.display = "block";
  document.querySelector(".transition").style.animation = "onclickanimation 1s";
  setTimeout(() => {
    window.open("me/me.html", "_self");
  }, 500);
}

function florianclicked() {
  document.querySelector("body").style.animation = "cometohome 6s";
  document.querySelector(".intro").style.animation =
    "colorchange 6s, backgroundchange 6s";
  document.querySelector(".intro:hover").style.animation =
    "colorchange 6s, gradient 16s infinite, backgroundchange 6s";
  document.querySelector("svg").style.animation = "colorchange 6s";
  document.querySelector("svg:hover").style.animation =
    "colorchange 6s, gradient 4s infinite";
  setTimeout(() => {
    document.querySelector("body").style.backgroundPosition = "100%, 50%";
  }, 6000);
}
