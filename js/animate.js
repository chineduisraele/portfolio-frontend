let others = [
  document.querySelector(".about"),
  document.querySelector(".skills"),
  document.querySelector(".services"),
  document.querySelector(".portfolio"),
  document.querySelector(".contact"),
];

window.addEventListener("load", () => {
  let intro = [
    document.querySelector(".name"),
    document.querySelector(".social"),
    document.querySelector(".check-cont"),
  ];

  intro.forEach((it) => {
    it.style.transform = "translateX(0)";
    it.style.opacity = "1";
    it.style.zIndex = "0";
  });
});

window.addEventListener("scroll", () => {
  others.forEach((it, i) => {
    if (it.getBoundingClientRect().top - window.innerHeight < 0) {
      it.style.transform = "translate(0)";
      it.style.opacity = "1";
    }
  });
});
