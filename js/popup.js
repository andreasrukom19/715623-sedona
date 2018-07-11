    var link = document.querySelector(".hotelsearch-button");
    var popup = document.querySelector(".hotel-searching");
    var field = document.querySelector(".check-field");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");
    });

    field.addEventListener("submit", function (evt) {
      if (!check-field.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    }
    });
