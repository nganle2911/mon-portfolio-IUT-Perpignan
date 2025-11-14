/* ------------------------------------------------------------------------------------- */
/* PAGE D'ACCUEIL */
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
        // console.log(ele);

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

    // EXPLICATION : Pourquoi faut-il vérifier l'existence de l'élément id="skills" ici ?
    // eleSkills.innerHTML = contenuHTML => provoque une erreur si on ne vérifie pas son existence avant
    /* En fait, ce fichier main.js est utilisé en commun pour les 3 pages html, et le script de JS est exécuté de haut en bas, ligne par ligne.
    Lorsque l'utilisateur ouvre la page interet.html ou la page apprentissage.html, le fichier main.js est automatiquement chargé et exécuté entièrement depuis le début. Cependant, comme il n'existe pas id="skills" dans le page interet.html ou apprentissage.html, eleSkills n'est donc pas retrouvé => eleSkills renvoie donc la valeur null. On ne peut pas définir une propriété sur la valeur null, ce qui provoque une erreur et arrête immédiatement l'exécution du script. Par conséquent, les fonctionnalités des boutons situés en bas ne sont pas exécutées */

    const eleSkills = document.getElementById("skills");
    if (eleSkills) {
        eleSkills.innerHTML = contenuHTML;
    }
}

afficherListeComp();

// BUTTONS
const monBtnHome = document.getElementById("btn-backHome");
const monBtnTop = document.getElementById("btn-backTop");

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
    // console.log(window.location);
    const path = window.location.pathname;

    // EXPLICATION: Pourquoi vérifier le chemin actuel (path) avant d'exécuter le retour à l'accueil ?
    /* Car le fichier main.js est utilisé en commun pour les 3 pages html, et quand on se trouve sur index.html, le bouton "retour accueil" doit rediriger vers "index.html", mais quand on se trouve sur interet.html ou apprentissage.html, il faut remonter d'un dossier avec "../index.html", en raison de la structure du projet. */
    // Utilisé l'opération ternaire 
    window.location.href = path.includes("index.html") ? "index.html" : "../index.html";
}

// TODO: Revenir en haut 
function revenirEnHaut() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}