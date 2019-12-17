/* Opdracht: 
    - Jouw code-team bestaat uit maximaal 3 coders 
    - De code bestaat uit DRIE (3) functies die jij moet afmaken
    - Elk teamlid maakt tenminste 1 functie
    - Elke functie heeft een lijst met functionaliteiten. LEES DEZE GOED. Daarna ga je coderen in de functie die jij moet maken.
    - Verdeel het werk dus onder elkaar: 
            student_1 maakt hogerAntwoord()
            student_2 maakt lagerAntwoord()
            student_3 maakt berekenScore()
*/

// Hieronder worden de variabelen gemaakt..deze code laat je staan
var getalOud = Math.floor((Math.random() * 100) + 1);
document.getElementById("numberOnSCreen").innerHTML = getalOud;
var getalNieuw;
var aantalXfoutief = 0;
var aantalXGoed = 0;
var score;
var naam;
// Hierboven worden de variabelen gemaakt..deze code laat je staan

/************************************************************************* STUDENT 1 MAAKT ONDERSTAANDE CODE ***************************************************************************************/
/*
    LIJST MET FUNCTIONALITEITEN voor functie hogerAntwoord() - zie regel 38
    Als een speler op de knop hoger drukt dan wordt functie hogerAntwoord() aangeroepen.
    De onderstaande functionaliteiten (1 t/m 7) moeten in de functie hogerAntwoord() staan:
    (1) getalNieuw krijgt een Random Getal 
    (2) getalNieuw moet getoond worden in het element met id: numberOnSCreen
    (3) getalOud heeft een getal gekregen (zie regel-13 van dit JS-bestand)
        Vergelijk variabele getalOud en variabele getalNieuw met elkaar
    (4) De speler klikt dus op hogerAntwoord(). Als het getalNieuw GROTER is dan getalOud dan heeft die persoon het GOED!
        Tel 1 bij aantalXGoed op!
    (5) Het aantal keer dat de speler GOED heeft gegokt moet op het scherm getoond worden... toon dit ( id="aantalGoed")

    (6) De speler klikt dus op hogerAntwoord(). Als het getalNieuw KLEINER is dan getalOud dan heeft die persoon het FOUT!
        Tel 1 bij aantalXFoutief op!
    (7) Het aantal keer dat de speler FOUT heeft gegokt moet op het scherm getoond worden... toon dit ( id="aantalFout")
*/
function hogerAntwoord() {

    getalNieuw = Math.floor((Math.random() * 100) + 1);  // functionaliteit (1) getalNieuw krijgt een Random Getal (tussen 1 en 100).. deze is voor je gemaakt!
    document.getElementById("numberOnSCreen").innerHTML; // functionaliteit (2) maak je op deze regel

    if (getalNieuw) { // functionaliteit (3) maak je op deze regel: denk aan vergelijkingsoperators: ==, > of <. Wat ga je met wat vergelijken?
        aantalXGoed;  // functionaliteit (4) denk aan: += of ++ of aantalXGoed +1. Welke ga jij gebruiken?

        // functionaliteit (5) mag je helemaal zelf coderen (het is maar 1 regel): 
        // Weet je nog hoe je iets kan tonen vanuit JS naar HTML (denk aan het stuk code met .innerHTML )

    } else { //als de if(...) false is dan wordt deze code uitgevoerd
        aantalXfoutief; // functionaliteit (6) maak je op deze regel: De speler heeft het fout: tel 1 punt op bij aantalXfoutief

        // functionaliteit (7) mag je helemaal zelf coderen (het is maar 1 regel): 
        // Weet je nog hoe je iets kan tonen vanuit JS naar HTML (denk aan het stuk code met .innerHTML )
    }

    berekenScore(); //deze regelcode kun je laten staan.
    getalOud = getalNieuw;//deze regelcode kun je laten staan.
}

/************************************************************************* STUDENT 1 MAAKT BOVENSTAANDE CODE ***************************************************************************************/

/************************************************************************* STUDENT 2 MAAKT ONDERSTAANDE CODE ***************************************************************************************/
/*
    LIJST MET FUNCTIONALITEITEN voor functie lagerAntwoord()
    Als een speler op de knop hoger drukt dan wordt functie lagerAntwoord() aangeroepen.
    De onderstaande functionaliteiten (1 t/m 7) moeten in de functie lagerAntwoord() staan:
    (1) getalNieuw krijgt een Random Getal 
    (2) getalNieuw moet getoond worden in het element met id: numberOnSCreen
    (3) getalOud heeft een getal gekregen (zie regel-13 van dit JS-bestand)
        Vergelijk variabele getalOud en variabele getalNieuw met elkaar
    (4) De speler klikt dus op lagerAntwoord(). Als het getalNieuw KLEINER is dan getalOud dan heeft die persoon het GOED!
        Tel 1 bij aantalXGoed op!
    (5) Het aantal keer dat de speler GOED heeft gegokt moet op het scherm getoond worden... toon dit ( id="aantalGoed")

    (6) De speler klikt dus op lagerAntwoord(). Als het getalNieuw GROTER is dan getalOud dan heeft die persoon het FOUT!
        Tel 1 bij aantalXFoutief op!
    (7) Het aantal keer dat de speler FOUT heeft gegokt moet op het scherm getoond worden... toon dit ( id="aantalFout")
*/
function lagerAntwoord() {

    getalNieuw = Math.floor((Math.random() * 100) + 1);  // functionaliteit (1). getalNieuw krijgt een Random Getal (tussen 1 en 100).. deze is voor je gemaakt!
    document.getElementById("numberOnSCreen").innerHTML; // functionaliteit (2) maak je op deze regel

    if (getalOud) { // functionaliteit (3) maak je op deze regel: denk aan vergelijkingsoperators: ==, > of <. Wat ga je met wat vergelijken?
        aantalXGoed;  // functionaliteit (4) denk aan: += of ++ of aantalXGoed +1. Welke ga jij gebruiken?

        // functionaliteit (5) mag je helemaal zelf coderen (het is maar 1 regel): 
        // Weet je nog hoe je iets kan tonen vanuit JS naar HTML (denk aan het stuk code met .innerHTML )

    } else { //als de if(...) false is dan wordt deze code uitgevoerd
        aantalXfoutief; // functionaliteit (6) maak je op deze regel: De speler heeft het fout: tel 1 punt op bij aantalXfoutief

        // functionaliteit (7) mag je helemaal zelf coderen (het is maar 1 regel): 
        // Weet je nog hoe je iets kan tonen vanuit JS naar HTML (denk aan het stuk code met .innerHTML )
    }

    berekenScore(); //deze regelcode kun je laten staan.
    getalOud = getalNieuw;//deze regelcode kun je laten staan.
}
/************************************************************************* STUDENT 2 MAAKT BOVENSTAANDE CODE ***************************************************************************************/

/************************************************************************* STUDENT 3 MAAKT ONDERSTAANDE CODE ***************************************************************************************/
/*
    LIJST MET FUNCTIONALITEITEN voor functie berekenScore()
    Als een speler goed of fout heeft gegokt dan krijg hij punten toegekent! 
    Aan jou de taak om deze functionaliteiten te maken
    (1) Bij een goed antwoord krijgt de speler de volgende punten bij score opgeteld: aantalXGoed * 100
    (2) Toon de nieuwe score op het scherm met document.getElementById('').innerHTML = ;
    (3) Bij een fout antwoord worden er punten van de score afgehaald: aantalXFout * 25
    (4) Toon de nieuwe score op het scherm met document.getElementById('').innerHTML = ;
    (5) Controleer of de speler 100 of meer punten heeft gehaald
    (6) Heeft de speler meer dan 100 punten gehaald. vraag om zijn of haar naam met een prompt()
    (7) Toon de NAAM en EINDSCORE van de speler op het scherm (check de span elementen)
*/
function berekenScore() {
    score; // functionaliteit (1) maak je op deze regel: vul de variabele score met de berekening.

    // functionaliteit (2) maak je op deze regel

    score;// functionaliteit (3) maak je op deze regel: vul de variabele score met de berekening.

    // functionaliteit (4) maak je op deze regel

    if (score) { // functionaliteit (5) maak je op deze regel: denk aan vergelijkingsoperators: ==, > of <. Wat ga je met wat vergelijken?
        naam; // functionaliteit (6) maak je op deze regel: hoe kan je om input vragen? 
    }

    // functionaliteit (7) mag je helemaal zelf coderen (het zijn maar 2 regels): 
    // Weet je nog hoe je iets kan tonen vanuit JS naar HTML (denk aan het stuk code met .innerHTML )

}

