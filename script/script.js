window.addEventListener("scroll", function () {
  document
    .querySelector("header")
    .classList.toggle("sticky", window.scrollY > 0);
});
document.querySelector(".toggle").addEventListener("click", () => {
  let e = document.querySelector(".toggle"),
    t = document.querySelector(".menu");
  e.classList.toggle("active"), t.classList.toggle("active");
});

