let backend_URL = "https://chineduisraeleportfolio.herokuapp.com/",
  // nav
  nav = document.querySelector(".navinner"),
  toggleButton = nav.querySelector(".togglebtn"),
  linksCont = nav.querySelector(".linkscont"),
  links = nav.querySelectorAll("li"),
  // tool boxes
  switch_buttons = document.querySelector(".switch").children,
  set_boxes = document.querySelector(".sets").children,
  skillBox = set_boxes[0].querySelectorAll("img"),
  toolBox = set_boxes[1].querySelectorAll("img"),
  // form
  form = document.querySelector(".contact-form"),
  submitBtn = form.querySelector("button"),
  alerts = document.querySelector(".alert"),
  topbtn = document.querySelector(".topbtn");

// nav
toggleButton.addEventListener("click", () => {
  linksCont.classList.toggle("show");
});

//change nav links color
links.forEach((li) => {
  li.addEventListener("click", (e) => {
    linksCont.querySelector("li.active").classList.remove("active");
    e.currentTarget.classList.add("active");
  });
});

// tool boxes
// toolbox accessory function
const showBox = (e, i, show) => {
  setTimeout(() => {
    e.style.opacity = show ? "1" : "0";
    e.style.transform = show ? "translate(0,0)" : "translate(50%,50%)";
  }, 75 * i);
};

const toggleBox = (show, hide) => {
  show === skillBox &&
    (switch_buttons[2].classList.remove("move"),
    set_boxes[0].classList.add("show"),
    set_boxes[1].classList.remove("show"));

  show === toolBox &&
    (switch_buttons[2].classList.add("move"),
    set_boxes[0].classList.remove("show"),
    set_boxes[1].classList.add("show"));

  show.forEach((e, i) => {
    showBox(e, i, true);
  });

  hide.forEach((e, i) => {
    showBox(e, i, false);
  });
};

window.addEventListener("load", () => {
  skillBox.forEach((e, i) => {
    showBox(e, i, true);
  });
});

// switch buttons
switch_buttons[0].addEventListener("click", () => {
  toggleBox(skillBox, toolBox);
});

switch_buttons[1].addEventListener("click", () => {
  toggleBox(toolBox, skillBox);
});

// form handler accesory functions
const submitButtonChange = (opacity, inner, disabled) => {
  submitBtn.style.opacity = opacity;
  submitBtn.innerHTML = inner;
  submitBtn.disabled = disabled;
};

// form alert
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
