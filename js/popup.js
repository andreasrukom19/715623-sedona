var link = document.querySelector(".hotelsearch-button");
var popup = document.querySelector(".hotel-searching");
var field = popup.querySelector(".check-field");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

popup.addEventListener("submit", function (evt) {
  if (!field.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    popup.classList.remove("modal-error");
  }
});
