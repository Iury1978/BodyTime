let searchButton = document.querySelector(".search__button");
let searchInput = document.querySelector(".search__input");
let servicesFilter = document.querySelector(".services__filter");
let servicesMobile = document.querySelector(".services__mobile");
try {
  const toggleFilterButton = () => {
    servicesFilter.classList.toggle("services__filter_disable");
  };
  const toggleSearchButton = () => {
    searchInput.classList.toggle("search__input_active");
  };
  const toggleServicesFilter = () => {
    servicesMobile.classList.toggle("services__mobile_active");
  };

  searchButton.addEventListener("click", (e) => {
    if (servicesMobile.classList.contains("services__mobile_active")) {
      toggleServicesFilter();
    } else {
      e.stopPropagation();
      toggleSearchButton();
      if (document.body.clientWidth <= 425) {
        toggleFilterButton();
      }
    }
  });
  servicesFilter.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleServicesFilter();
  });

  document.addEventListener("click", (e) => {
    let target = e.target;
    let its_searchButton =
      target == searchInput || searchInput.contains(target);
    let its_searchInput = target == searchButton;
    let searchButton_is_active = searchInput.classList.contains(
      "search__input_active"
    );
    if (!its_searchButton && !its_searchInput && searchButton_is_active) {
      toggleSearchButton();
      toggleFilterButton();
    }
    let its_servicesMobile =
      target == servicesMobile || servicesMobile.contains(target);
    let servicesMobile_is_active = servicesMobile.classList.contains(
      "services__mobile_active"
    );
    if (!its_searchButton && !its_servicesMobile && servicesMobile_is_active) {
      toggleServicesFilter();
    }
  });
} catch (error) {
}
