let r = document.querySelector(":root");

function onload() {
  setTimeout(() => {
    document.querySelector(".transition").style.display = "none";
  }, 950);
}

function onclickhome() {
  r.style.setProperty("--transitioncolor1", "rgb(0, 0, 0, 0)");
  r.style.setProperty("--transitioncolor2", "#3454d1");
  document.querySelector(".transition").style.display = "block";
  document.querySelector(".transition").style.animation = "onclickanimation 1s";
  setTimeout(() => {
    window.open("/about%20me/index.html", "_self");
  }, 500);
}
