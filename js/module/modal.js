const scrollController = {
  scrollPosition: 0,
  disabedScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
     overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScroll() {
    document.body.style.cssText = "";
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = "";
  }
}

try {
  const modalController = (time = 360) => {
    const heroBtn = document.querySelector(".hero__btn");
    const coursePriceBtn = document.querySelector(".course-price__btn");
    let currentBtn;
    // делаю проверку какая из конопок на странице
    heroBtn ? (currentBtn = heroBtn) : (currentBtn = coursePriceBtn);

    const modalOverlay = document.querySelector(".overlay");

    modalOverlay.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity ${time}ms ease-in-out;
`;

    const closeModal = (event) => {
      const target = event.target;

      if (
        target === modalOverlay ||
        target.closest(".modal__close") ||
        event.code === "Escape"
      ) {
        modalOverlay.style.opacity = 0;

        setTimeout(() => {
          modalOverlay.style.visibility = "hidden";
          scrollController.enabledScroll();
        }, time);

        window.removeEventListener("keydown", closeModal);
      }
    };

    const openModal = () => {
      modalOverlay.style.visibility = "visible";
      modalOverlay.style.opacity = 1;
      window.addEventListener("keydown", closeModal);
      scrollController.disabedScroll();
    };

    currentBtn.addEventListener("click", openModal);

    modalOverlay.addEventListener("click", closeModal);
  };
  modalController();

} catch (error) {
  
}
