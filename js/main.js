// Scroll Top

let btnTop = document.querySelector(".btn-top");
window.onscroll = () => {
  if (window.scrollY >= 400) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
};

btnTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
