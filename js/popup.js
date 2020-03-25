var link = document.querySelector(".button-search");
var popup = document.querySelector(".search-field");

popup.classList.add("search-field-close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
popup.classList.toggle("search-field-show");
popup.classList.toggle("search-field-close");
});
