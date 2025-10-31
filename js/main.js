// NAVBAR 
// Ajouter la classe "active" au bouton actuel
var menu = document.getElementById("menuRight__navLink");
var elements = menu.getElementsByClassName("navlink");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function () {
        let actuel = document.getElementsByClassName("active");
        actuel[0].className = actuel[0].className.replace(" active", "");
        this.className += " active";
    })
}

// COMPÉTENCES
const listeComp = [
    {
        nom: "HTML/CSS",
        valeur: 75
    },
    {
        nom: "JavaScript",
        valeur: 60
    },
    {
        nom: "Python",
        valeur: 65
    },
    {
        nom: "Power BI",
        valeur: 70
    },
    {
        nom: "R",
        valeur: 55
    }
];

// Afficher des compétences sur HTML en utilisant JS
function afficherListeComp() {
    let contenuHTML = "";

    listeComp.map((ele, indice) => {
        console.log(ele);

        contenuHTML += `
            <div class="skills__item">
                <div class="skillsItem__content">
                    <p>${ele.nom}</p>
                    <p>${ele.valeur} %</p>
                </div>
                <div class="skillsItem__bar">
                    <div class="bar__value" style="width: ${ele.valeur}%;"></div>
                </div>
            </div>
        `;
    });

    document.getElementById("skills").innerHTML = contenuHTML;
}

afficherListeComp();
