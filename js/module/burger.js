const mobileBurger = document.querySelector(".mobile__burger");
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__close");

mobileBurger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
});

burgerClose.addEventListener("click", () => {
  burger.classList.remove("burger_active");
});
