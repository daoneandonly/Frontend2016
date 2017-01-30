var filter = document.querySelector("fieldset");
var filterButton = document.querySelector(".filterButton");

console.log("It Worked!");
console.log(filter);
console.log(filterButton);


var toggleShow = function() {
    console.log("geklikt!")
    filter.classList.toggle("show");
}

//filterButton.onclick = toggleShow();

filter.addEventListener(onclick, toggleShow);
