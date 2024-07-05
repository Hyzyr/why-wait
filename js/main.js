var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;

const closeMenu = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    closeMenu();
  }
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

const inputPassword = document.querySelectorAll(".input--password");
if (inputPassword) {
  inputPassword.forEach((item) => {
    let visible = false;
    button = item.querySelector(".input__icon-right");
    input = item.querySelector("input");
    button.onclick = () => {
      visible = !visible;
      if (visible) {
        input.setAttribute("type", "text");
        item.classList.add("_visable");
      } else {
        input.setAttribute("type", "password");
        item.classList.remove("_visable");
      }
    };
  });
}
