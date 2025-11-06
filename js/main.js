/* ------------------------------------------------------------------------------------- */
/* PAGE D'ACCUEIL */
// NAVBAR 
// TODO: Ajouter la classe "active" au bouton actuel
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

// TODO: Afficher des compétences sur HTML en utilisant JS
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

// BUTTONS
var monBtnHome = document.getElementById("btn-backHome");
var monBtnTop = document.getElementById("btn-backTop");

// Les 2 boutons "revenir en haut" & "revenir à l'accueil" apparaissent lorsqu'on fait défiler vers le bas de 150px 
function afficherBouton() {
    if ((document.body.scrollTop > 150) || (document.documentElement.scrollTop > 150)) {
        monBtnHome.style.display = "block";
        monBtnTop.style.display = "block";
    } else {
        monBtnHome.style.display = "none";
        monBtnTop.style.display = "none";
    }
}

// Quand on fait défiler la page, les boutons s'affichent 
window.onscroll = () => { afficherBouton() };

// TODO: Revenir à la page d'accueil
function revenirAccueil() {
    window.location.href = "index.html";
}

// TODO: Revenir en haut 
function revenirEnHaut() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}