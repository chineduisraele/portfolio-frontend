window.addEventListener("load", () => {
  let intro = [
    document.querySelector(".name"),
    document.querySelector(".social"),
    document.querySelector(".check-cont"),
  ];

  intro.forEach((it) => {
    it.style.transform = "translateX(0)";
    it.style.opacity = "1";
    it.style.visibility = "visible";
  });
});
