const laPierreJ1 = document.querySelector("#bouton1");
const lafeuilleJ1 = document.querySelector("#bouton2");
const leciseauJ1 = document.querySelector("#bouton3");
const laPierreJ2 = document.querySelector("#bouton4");
const lafeuilleJ2 = document.querySelector("#bouton5");
const leciseauJ2 = document.querySelector("#bouton6");

const joueur1 = document.querySelector("#ecranJ1");
const joueur2 = document.querySelector("#ecranJ2");


const A = "a";
const B = "b";
const C = "c";
let valeur1,
    valeur2;






laPierreJ1.addEventListener("click", function () {
    joueur1.classList.remove("papier", "ciseau", "clair");
    joueur1.classList.add("pierre");
    valeur1 = A;
    console.log(valeur1);
});
lafeuilleJ1.addEventListener("click", function () {
    joueur1.classList.remove("pierre", "ciseau", "clair");
    joueur1.classList.add("papier");
    valeur1 = B;
    console.log(valeur1);
});

leciseauJ1.addEventListener("click", function () {
    joueur1.classList.remove("papier", "pierre", "clair");
    joueur1.classList.add("ciseau");
    valeur1 = C;
    console.log(valeur1);
});

laPierreJ2.addEventListener("click", function () {
    joueur2.classList.remove("papier", "ciseau", "clair");
    joueur2.classList.add("pierre");
    valeur2 = A;
    console.log(valeur2);
});
lafeuilleJ2.addEventListener("click", function () {
    joueur2.classList.remove("pierre", "ciseau", "clair");
    joueur2.classList.add("papier");
    valeur2 = B;
    console.log(valeur2);
});

leciseauJ2.addEventListener("click", function () {
    joueur2.classList.remove("papier", "pierre", "clair");
    joueur2.classList.add("ciseau");
    valeur2 = C;
    console.log(valeur2);
});

const résultat = document.querySelector("button");
let score = document.querySelector("h1");



résultat.addEventListener("click", function () {
    joueur1.classList.add("clair");
    joueur2.classList.add("clair");
    

    if (valeur1 === valeur2) {
        score.innerHTML = "Egalité";
    } else if (valeur1 === A && valeur2 === B) {
        score.innerHTML = "Joueur 2 gagne";
    } else if (valeur1 === A && valeur2 === C) {
        score.innerHTML = "Joueur 1 gagne";
    } else if (valeur1 === B && valeur2 === A) {
        score.innerHTML = "Joueur 1 gagne";
    } else if (valeur1 === B && valeur2 === C) {
        score.innerHTML = "Joueur 2 gagne";
    } else if (valeur1 === C && valeur2 === A) {
        score.innerHTML = "Joueur 2 gagne";
    } else if (valeur1 === C && valeur2 === B) {
        score.innerHTML = "Joueur 1 gagne";
    } else {
        score.innerHTML= "merci de  jouer correctement!"
        joueur1.classList.remove("pierre", "pappier", "ciseau");
        joueur2.classList.remove("pierre", "pappier", "ciseau");
    }



});



