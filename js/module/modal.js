const heroBtn = document.querySelector(".hero__btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

heroBtn.addEventListener("click", () => {
  overlay.classList.add("overlay_open");
  modal.classList.add("modal_open");

  // When the modal is shown, we want a fixed body
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scrollY}px`;
});

overlay.addEventListener("click", (event) => {
  console.log(event);
  const target = event.target;

  if (target === overlay || target.closest(".modal__close")) {
    overlay.classList.remove("overlay_open");
    modal.classList.remove("modal_open");

    // When the modal is hidden, we want to remain at the top of the scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
});
