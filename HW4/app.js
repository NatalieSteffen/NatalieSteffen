document.addEventListener("DOMContentLoaded", function() {
    var changeBackgroundButton = document.getElementById("changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", changeBackground);
});

function changeBackground() {
    var select = document.getElementById("backgroundSelect");
    var selectedColor = select.value;
    var backgroundImageUrl = selectedColor === "lightblue" ? "lightblue.jpg" : "lightgold.jpg";
    document.body.style.backgroundImage = "url('" + backgroundImageUrl + "')";
}