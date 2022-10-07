const hide = (elem, priceDropdown) => {
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

  elem.classList.remove("price__item_show");
  elem.classList.add("collapsing");
  setTimeout(() => {
    priceDropdown.style.display = "";
    priceDropdown.style.height = "";
    priceDropdown.style.overflow = "";
    priceDropdown.style.transition = "";
    elem.classList.remove("collapsing");
  }, 360);
};

const show = (elem, priceDropdown) => {
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
  //  это нужно для нбольшого сброса внутри расчетов браузера
  priceDropdown.offsetHeight;
  //  и прописываем полученную высоту
  priceDropdown.style.height = `${height}px`;

  elem.classList.add("collapsing");

  // обнуляем назад
  setTimeout(() => {
    elem.classList.add("price__item_show");
    priceDropdown.style.display = "";
    priceDropdown.style.height = "";
    priceDropdown.style.overflow = "";
    priceDropdown.style.transition = "";
    elem.classList.remove("collapsing");
  }, 360);
};

export const accordion = () => {
  const list = document.querySelector(".price__items");
  list.addEventListener("click", (e) => {
    const button = e.target.closest(".price__button");
    if (button) {
      const item = button.closest(".price__item");
      const priceDropdown = item.querySelector(".price__dropdown");

      button.classList.toggle("price__button_minus");
      // item.classList.toggle("price__item_show");
      // для плавности

      item.classList.contains("price__item_show")
        ? hide(item, priceDropdown)
        : show(item, priceDropdown);
    }
  });
};
