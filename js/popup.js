    var link = document.querySelector(".hotelsearch-button");
    var popup = document.querySelector(".hotel-searching");
    var field = popup.querySelector("[required]");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");
      field.focus();
    });

    popup.addEventListener("submit", function (evt) {
      if (!field.value) {
      evt.preventDefault();
      console.log("Ошибка");
      popup.classList.add("modal-error");
    }
    });

    popup.addEventListener("submit", function (evt) {
      evt.preventDefault();
      console.log("Отправляем форму");
      popup.classList.remove("modal-error");
    });
