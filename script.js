function firstFunction() {
    alert("First function called!");
}

function secondFunction() {
    alert("Second function called!");
}

var button = document.getElementById("myButton");
button.addEventListener("click", firstFunction);
button.addEventListener("click", secondFunction);