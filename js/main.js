// NAVBAR 
// Ajouter la classe "active" au bouton actuel
var menu = document.getElementById("menuRight__navLink");
var elements = menu.getElementsByClassName("navlink");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
        let actuel = document.getElementsByClassName("active");
        actuel[0].className = actuel[0].className.replace(" active", "");
        this.className += " active";
    })
}