
const hide = (elem, priceDropdown, priceButtonIcon) => {
  if (
    !elem.classList.contains("price__item_show") ||
    elem.classList.contains("collapsing")
  )
    return;
  priceDropdown.style.height = `${priceDropdown.offsetHeight}px`;
  priceDropdown.offsetHeight;
  priceDropdown.style.display = "block";
  priceDropdown.style.height = 0;
  priceDropdown.style.overflow = "hidden";
  priceDropdown.style.transition = "height 360ms ease-in-out";
  priceButtonIcon.style.transition = "360ms ease-in-out";

  elem.classList.remove("price__item_show");
  elem.classList.add("collapsing");
  priceButtonIcon.classList.add("collapsing");
  priceButtonIcon.classList.remove("price__button-icon_minus");

  setTimeout(() => {
    priceDropdown.style.display = "";
    priceDropdown.style.height = "";
    priceDropdown.style.overflow = "";
    priceDropdown.style.transition = "";
    elem.classList.remove("collapsing");
    priceButtonIcon.classList.remove("collapsing");
  }, 360);
};

const show = (elem, priceDropdown, priceButtonIcon) => {
  if (
    elem.classList.contains("price__item_show") ||
    elem.classList.contains("collapsing")
  )
    return;

  priceDropdown.style.display = "block";
  // получаю высоту блока
  const height = priceDropdown.offsetHeight;
  // обнуляю ее для анимации
  priceDropdown.style.height = 0;
  // что бы не вываливался внутренний блок прописываем скрытие
  priceDropdown.style.overflow = "hidden";
  //  прописываем анимацию
  priceDropdown.style.transition = "height 360ms ease-in-out";
  priceButtonIcon.style.transition = "360ms ease-in-out";
  //  это нужно для нбольшого сброса внутри расчетов браузера
  priceDropdown.offsetHeight;
  //  и прописываем полученную высоту
  priceDropdown.style.height = `${height}px`;

  elem.classList.add("price__item_show");
  elem.classList.add("collapsing");
  priceButtonIcon.classList.add("collapsing");
  priceButtonIcon.classList.add("price__button-icon_minus");
  // обнуляем назад
  setTimeout(() => {
    priceDropdown.style.display = "";
    priceDropdown.style.height = "";
    priceDropdown.style.overflow = "";
    priceDropdown.style.transition = "";
    elem.classList.remove("collapsing");
    priceButtonIcon.classList.remove("collapsing");
  }, 360);
};

export const accordion = () => {
  const list = document.querySelector(".price__items");
  list.addEventListener("click", (e) => {
    const buttons = e.target.closest(".price__buttons");

    if (buttons) {
      const item = buttons.closest(".price__item");
      const priceDropdown = item.querySelector(".price__dropdown");
      const priceButtonIcon = item.querySelector(".price__button-icon");

      // priceButtonIcon.classList.toggle("price__button-icon_minus");

      // для плавности
      item.classList.contains("price__item_show")
        ? hide(item, priceDropdown, priceButtonIcon)
        : show(item, priceDropdown, priceButtonIcon);
    }
  });
};
