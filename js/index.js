const laPierreJ1 = document.querySelector("#bouton1");
const lafeuilleJ1 = document.querySelector("#bouton2");
const leciseauJ1 = document.querySelector("#bouton3");
const laPierreJ2 = document.querySelector("#bouton4");
const lafeuilleJ2 = document.querySelector("#bouton5");
const leciseauJ2 = document.querySelector("#bouton6");

const joueur1 = document.querySelector("#ecranJ1");
const joueur2 = document.querySelector("#ecranJ2");

const résultat = document.querySelector("#result");




const A = "a";
const B = "b";
const C = "c";


let valeur1 = null,
    valeur2 = null;

console.log(valeur1);
const score = document.querySelector("h1");


const lerobot1 = document.querySelector("#robot1");
const lerobot2 = document.querySelector("#robot2");

let computer = 0;

lerobot1.addEventListener("click", function () {
    computer = Math.floor(Math.random() * 3);
    console.log(computer);

    if (computer == 0) {
        joueur1.classList.remove("papier", "ciseau");
        joueur1.classList.add("pierre", "clair");
        valeur1 = A;
        score.classList.add("noDisplay");


    } else if (computer == 1) {
        joueur1.classList.remove("pierre", "ciseau");
        joueur1.classList.add("papier", "clair");
        valeur1 = B;
        score.classList.add("noDisplay");

    } else {
        joueur1.classList.remove("papier", "pierre");
        joueur1.classList.add("ciseau", "clair");
        valeur1 = C;
        score.classList.add("noDisplay");
    };
    console.log(computer);

    computer = valeur2;
});

lerobot2.addEventListener("click", function () {
    computer = Math.floor(Math.random() * 3);
    console.log(computer);

    if (computer == 0) {
        joueur2.classList.remove("papier", "ciseau");
        joueur2.classList.add("pierre", "clair");
        valeur2 = A;
        score.classList.add("noDisplay");

    } else if (computer == 1) {
        joueur2.classList.remove("pierre", "ciseau");
        joueur2.classList.add("papier","clair");
        valeur2 = B;
        score.classList.add("noDisplay");

    } else {
        joueur2.classList.remove("papier", "pierre");
        joueur2.classList.add("ciseau", "clair");
        valeur2 = C;
        score.classList.add("noDisplay");
    };
    console.log(computer);

    computer = valeur2;
});

laPierreJ1.addEventListener("click", function () {
    joueur1.classList.remove("papier", "ciseau");
    joueur1.classList.add("pierre", "clair");
    valeur1 = A;
    score.classList.add("noDisplay");
});
lafeuilleJ1.addEventListener("click", function () {
    joueur1.classList.remove("pierre", "ciseau");
    joueur1.classList.add("papier", "clair");
    valeur1 = B;
    score.classList.add("noDisplay");
});

leciseauJ1.addEventListener("click", function () {
    joueur1.classList.remove("papier", "pierre");
    joueur1.classList.add("ciseau", "clair");
    valeur1 = C;
    score.classList.add("noDisplay");
});

laPierreJ2.addEventListener("click", function () {
    joueur2.classList.remove("papier", "ciseau");
    joueur2.classList.add("pierre", "clair");
    valeur2 = A;
    score.classList.add("noDisplay");
});
lafeuilleJ2.addEventListener("click", function () {
    joueur2.classList.remove("pierre", "ciseau");
    joueur2.classList.add("papier", "clair");
    valeur2 = B;
    score.classList.add("noDisplay");
});

leciseauJ2.addEventListener("click", function () {
    joueur2.classList.remove("papier", "pierre");
    joueur2.classList.add("ciseau", "clair");
    valeur2 = C;
    score.classList.add("noDisplay");
});

const leScore1 = document.querySelector("#score1");
const leScore2 = document.querySelector("#score2");
let score1 = 0;
let score2 = 0;

résultat.addEventListener("click", function () {
    if (valeur1 == null && valeur2 == null) {
        return;
    };
    joueur1.classList.remove("clair");
    joueur2.classList.remove("clair");
    score.classList.remove("noDisplay");


    if (valeur1 === valeur2) {
        score.innerHTML = "Egalité";
    } else if (valeur1 === A && valeur2 === B) {
        score.innerHTML = "J2 gagne";
        score2 += 1;
    } else if (valeur1 === A && valeur2 === C) {
        score.innerHTML = "J1 gagne";
        score1 += 1;
    } else if (valeur1 === B && valeur2 === A) {
        score.innerHTML = "J1 gagne";
        score1 += 1;
    } else if (valeur1 === B && valeur2 === C) {
        score.innerHTML = "J2 gagne";
        score2 += 1;
    } else if (valeur1 === C && valeur2 === A) {
        score.innerHTML = "J2 gagne";
        score2 += 1;
    } else if (valeur1 === C && valeur2 === B) {
        score.innerHTML = "J1 gagne";
        score1 += 1;
    } else {
        score.innerHTML = "GAME OVER"
        joueur1.classList.remove("pierre", "pappier", "ciseau");
        joueur2.classList.remove("pierre", "pappier", "ciseau");
    }





    if (score1 == 3) {
        score.innerHTML = "J1 gagne la manche"
        score1 = 0;
        score2 = 0;
    }

    if (score2 == 3) {
        score.innerHTML = "J2 gagne la manche"
        score1 = 0;
        score2 = 0;
    }


    leScore1.innerHTML = score1;
    leScore2.innerHTML = score2;
    valeur1 = null;
    valeur2 = null;
});









