backend_URL = "https://chineduisraeleportfolio.herokuapp.com/";
let form = document.querySelector(".contact-form");
let submitBtn = form.querySelector("button");
let alerts = document.querySelector(".alert");
var cordinate = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > cordinate) {
    let nav = document.querySelector("nav");
    nav.style.position = "static";
    nav.style.zIndex = "10";
    nav.style.backgroundColor = "transparent";
    nav.style.opacity = "0";
    cordinate = window.scrollY;
  } else if (window.scrollY < cordinate) {
    let nav = document.querySelector("nav");
    nav.style.position = "sticky";
    nav.style.zIndex = "10";
    nav.style.backgroundColor = "#fff";
    nav.style.opacity = "1";
    cordinate = window.scrollY;
  }
});

let switch_buttons = document.querySelector(".switch").children;
let set_boxes = document.querySelector(".sets").children;

window.addEventListener("load", () => {
  let time = 150;
  switch_buttons[2].classList.remove("move");
  set_boxes[0].classList.add("show");
  set_boxes[1].classList.remove("show");

  set_boxes[0].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "1";
      e.style.visibility = "visible";
      e.style.transform = "translate(0,0)";
      e.style.transition = "all 0.3s";
    }, time * i);
  });

  set_boxes[1].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "0";
      e.style.visibility = "hidden";
      e.style.transform = "translate(50%,50%)";
    }, time * i);
  });
});

switch_buttons[0].addEventListener("click", () => {
  let time = 150;
  switch_buttons[2].classList.remove("move");
  set_boxes[0].classList.add("show");
  set_boxes[1].classList.remove("show");

  set_boxes[0].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "1";
      e.style.visibility = "visible";
      e.style.transform = "translate(0,0)";

      e.style.transition = "all 0.3s";
    }, time * i);
  });

  set_boxes[1].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "0";
      e.style.visibility = "hidden";
      e.style.transform = "translate(50%,50%)";
    }, time * i);
  });
});

switch_buttons[1].addEventListener("click", () => {
  let time = 150;

  switch_buttons[2].classList.add("move");
  set_boxes[0].classList.remove("show");
  set_boxes[1].classList.add("show");

  set_boxes[1].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "1";
      e.style.visibility = "visible";
      e.style.transform = "translate(0,0)";

      e.style.transition = "all 0.3s";
    }, time * i);
  });

  set_boxes[0].querySelectorAll(".stackbox").forEach((e, i) => {
    setTimeout(() => {
      e.style.opacity = "0";
      e.style.visibility = "hidden";
      e.style.transform = "translate(50%,50%)";
    }, time * i);
  });
});

// nav
let menu = document.querySelector(".menu");
menu.querySelector("i").addEventListener("click", () => {
  menu.querySelector("ul").classList.toggle("show");
});

// nav links color
let links = document.querySelectorAll("li");

links.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.querySelector("li.active").classList.remove("active");
    e.currentTarget.classList.add("active");
    menu.querySelector("ul").classList.toggle("show");
  });
});

// form handler

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(e.target);

  submitBtn.style.opacity = "0.5";
  submitBtn.innerHTML = "Sending...";
  submitBtn.disabled = true;

  fetch(backend_URL + "message/", { method: "POST", body: data })
    .then((res) => {
      form.reset();
      alerts.classList.add("success");
      alerts.classList.add("show");
      alerts.querySelector(".text").innerHTML =
        "Your Message was sent successfully!";

      submitBtn.style.opacity = "1";
      submitBtn.innerHTML = "Send";
      submitBtn.disabled = false;

      setTimeout(() => {
        alerts.classList.remove("success");
        alerts.classList.remove("show");
      }, 1500);
    })
    .catch((err) => {
      // form.reset();
      alerts.classList.add("error");
      alerts.classList.add("show");
      alerts.querySelector(".text").innerHTML =
        "There was a problem sending your message!";

      submitBtn.style.opacity = "1";
      submitBtn.innerHTML = "Send";
      submitBtn.disabled = false;

      setTimeout(() => {
        alerts.classList.remove("error");
        alerts.classList.remove("show");
      }, 1500);
    });
});

// top button
window.addEventListener("scroll", () => {
  let topbtn = document.querySelector(".topbtn");
  if (window.scrollY > window.innerHeight * 1.5) {
    topbtn.classList.add("show");
  } else {
    topbtn.classList.remove("show");
  }
});
