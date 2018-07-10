    var link = document.querySelector(".hotelsearch-button");
    var popup = document.querySelector(".hotel-searching");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");
    });
