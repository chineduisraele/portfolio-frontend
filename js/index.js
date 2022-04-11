backend_URL = "https://chineduisraeleportfolio.herokuapp.com/";
let form = document.querySelector(".contact-form");
let submitBtn = form.querySelector("button");
let alerts = document.querySelector(".alert");
let menu = document.querySelector(".menu");
let topbtn = document.querySelector(".topbtn");

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

// form handler accesory functions
const submitButtonChange = (opacity, inner, disabled) => {
  submitBtn.style.opacity = opacity;
  submitBtn.innerHTML = inner;
  submitBtn.disabled = disabled;
};

const formAlert = (errorcls, message) => {
  alerts.classList.add(errorcls);
  alerts.classList.add("show");
  alerts.querySelector(".text").innerHTML = message;

  setTimeout(() => {
    // enable submit btn
    submitButtonChange(1, "Send", false);

    alerts.classList.remove(errorcls);
    alerts.classList.remove("show");
  }, 1500);
};

// form hander
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(e.target);

  // disable submit btn
  submitButtonChange(0.5, "Sending...", true);

  fetch(backend_URL + "message/", { method: "POST", body: data })
    .then(() => {
      // reset form
      form.reset();

      formAlert("success", "Your Message was sent successfully!");
    })
    .catch(() => {
      formAlert("error", "There was a problem sending your message!");
    });
});

// top button
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 1.5) {
    topbtn.classList.add("show");
  } else {
    topbtn.classList.remove("show");
  }
});
