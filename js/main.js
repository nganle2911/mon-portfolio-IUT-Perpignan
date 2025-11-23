// PAGE D'ACCUEIL
// COMPÉTENCES 
const listeCompetences = {
    langage: [
        {nom: "Python", valeur: 70}, {nom: "JavaScript", valeur: 75}, {nom: "PHP", valeur: 45}, {nom: "Java", valeur: 30}
    ],
    bdd: [
        {nom: "PostgreSQL", valeur: 55}, {nom: "MySQL", valeur: 40}, {nom: "Access", valeur: 45}
    ],
    dev: [
        {nom: "HTML/CSS", valeur: 85}, {nom: "Bootstrap", valeur: 80}, {nom: "NodeJS", valeur: 65}
    ],
    sig: [
        {nom: "ArcGIS", valeur: 35}, {nom: "QGIS", valeur: 45}
    ],
    dataviz: [
        {nom: "Power BI", valeur: 70}, {nom: "Datawrapper", valeur: 75}
    ],
    graphique: [
        {nom: "Figma", valeur: 85}, {nom: "Photoshop", valeur: 75}, {nom: "Canva", valeur: 85}, {nom: "Illustration", valeur: 55}
    ],
    autres: [
        {nom: "Git/Github", valeur: 65}, {nom: "Docker", valeur: 45}
    ]
};

// TODO: Afficher le contenu HTML sur skills__contenu
function htmlAffiche(listeCompChoisie) {
    var contenuHTML = "";

    listeCompChoisie.map((ele, indice) => {
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

    document.getElementById("skills__contenu").innerHTML = contenuHTML;
}

// TODO: Afficher des compétences sur HTML en utilisant JS
function afficherListeComptetences() {
    var valeurChoisie = document.getElementById("aptitudes").value;
    // console.log(valeurChoisie)
    
    switch (valeurChoisie) {
        case "langage":
            htmlAffiche(listeCompetences["langage"]);
            break;
        case "bdd":
            htmlAffiche(listeCompetences["bdd"]);
            break;
        case "dev":
            htmlAffiche(listeCompetences["dev"]);
            break;
        case "sig":
            htmlAffiche(listeCompetences["sig"]);
            break;
        case "dataviz":
            htmlAffiche(listeCompetences["dataviz"]);
            break;
        case "graphique":
            htmlAffiche(listeCompetences["graphique"]);
            break;
        case "autres":
            htmlAffiche(listeCompetences["autres"]);
            break;
        default:
            htmlAffiche(listeCompetences["langage"]);
            break;
    }
}

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