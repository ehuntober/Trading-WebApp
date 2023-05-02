const menuBar = document.getElementById("menu-button");
const cancel = document.getElementById("cancel");
const menuButton = document.getElementById("button-box");
const navBar = document.getElementById("nav");
let openOne = false;
let openTwo = false;

let isClicked = false;

menuButton.addEventListener("click", () => {
  isClicked = !isClicked;
  if (isClicked) {
    menuBar.style.display = "none";
    cancel.style.display = "block";
    navBar.style.display = "flex";
  } else {
    menuBar.style.display = "block";
    cancel.style.display = "none";
    navBar.style.display = "none";
  }
});

function toggleLinks(content, icon) {
  const myContent = document.getElementById(content);
  const myIcon = document.getElementById(icon);
  openOne = !openOne;
  if (openOne) {
    myIcon.style.transform = "rotate(180deg)";
    myContent.style.height = "auto";
    myContent.style.transform = "scaleY(1)";
  } else {
    myContent.style.height = "0px";
    myIcon.style.transform = "rotate(0deg)";
    myContent.style.transform = "scaleY(0)";
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    navBar.style.display = "flex";
  } else {
    navBar.style.display = "none";
  }
});
