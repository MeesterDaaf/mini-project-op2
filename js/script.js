var getalOud;
var getalNieuw;
var score =0;
//hou bij hoevaak iemand een beurt heeft gehad.
var aantalKeer =0;

var scorebord=[];
//hier word het scorebord gevuld met lege scores
for (i=0;i<10;i++) {
    scorebord[i] =0;
}
var scoreNaam=[];
//hier wordt het scorebord gevuld met "lege" namen
for (i=0;i<10;i++) {
    scoreNaam[i] = "?";
}


function init() {
    //genereer een random getal tussen en 1 en de 100
    getalOud = ;
    //toon dit getal op het scherm

    //disable alle buttons behalve de start button en de spluitleg button

    //toon het scorebord
    toonScoreBord();
}

function start() {
    // genereer een nieuw getal. gebruik daar de functie genereerGetal voor
    
    //enable de buttons hoger, lager en einde
    
}
function genereerGetal() {
    //geneneer een nieuwe random getal tussen de 1 en de 100
    getalNieuw = ;
    // dit getal moet anders zijn dan het vorige getal. gebruik een while loop om dat voor elkaar te krijgen

    
    //toon het getal op het scherm
    document.getElementById("getal").innerHTML = ;
    
}

function vergelijk (keuze) {
    //afhankelijk van de keuze die gemaakt is wordt gecontroleerd of deze keuze correct is


    //toon de score op het scherm
    
    //bewaar het huidige getal in getalOud

    //houdt bij hoevaak iemand geweest is

    // is dit 10 keer , stop dan het spel, genereer anders een nieuw getal

}

function einde() {
    //vraag om de naaam van de speler
    var naam =; 
    //maak score bord
    
    // zet de score op de juiste plek. gebruik hiervoor splice n pop
    for(i=0;i<scorebord.length;i++) {
        if (score > scorebord[i]) {
    
            break;  
        }
    }   
    //reset de waardes (denk ook aan het disablen van diverse buttons)

}
function toonScoreBord() {
    //toon het scorebord op het scherm

    for(i=0;i<scorebord.length;i++) {
    
    } 
}
function spelUitleg() {
    //verberg het spel en toon de speluitleg
    }

function sluitUitleg() {
    //verberg de speluitleg en toon het spel 
}