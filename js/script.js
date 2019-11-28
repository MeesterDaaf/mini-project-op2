var getalOud = Math.floor((Math.random() * 100) + 1);
var getalNieuw;
var aantalXfoutief = 0;
var aantalXGoed = 0;
var score;

document.getElementById("numberOnSCreen").innerHTML = getalOud;

function hogerAntwoord() {

    getalNieuw = Math.floor((Math.random() * 100) + 1);
    document.getElementById("numberOnSCreen").innerHTML = getalNieuw;

    if (getalNieuw > getalOud) {
        aantalXGoed = aantalXGoed + 1;
        document.getElementById("aantalGoed").innerHTML = aantalXGoed;

    } else {
        aantalXfoutief = aantalXfoutief + 1;
        document.getElementById("aantalFout").innerHTML = aantalXfoutief;
    }
    score = aantalXGoed * 100 - 25 * aantalXfoutief;
    document.getElementById("score").innerHTML = score;
    getalOud = getalNieuw;
}

function lagerAntwoord() {

    getalNieuw = Math.floor((Math.random() * 100) + 1);
    document.getElementById("numberOnSCreen").innerHTML = getalNieuw;

    if (getalNieuw < getalOud) {
        aantalXGoed = aantalXGoed + 1;
        document.getElementById("aantalGoed").innerHTML = aantalXGoed;
    } else {
        console.log("niet goed");
        aantalXfoutief = aantalXfoutief + 1;
        document.getElementById("aantalFout").innerHTML = aantalXfoutief;
    }

    score = aantalXGoed * 100 - 25 * aantalXfoutief;
    document.getElementById("score").innerHTML = score;
    getalOud = getalNieuw;

}
