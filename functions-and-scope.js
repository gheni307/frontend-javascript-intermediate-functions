// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.
/*
* Stap1 maak een functie heet "studentsHasGraduated"
* Stap2 declareren een variabel om afgestudeerde studenten te kunnen rekenen "let a=0;"
* Stap3 schrijft een for loop om alle grades te kunnen lopen "for (let i = 0; i < grades.length; i++)"
* Stap4 geeft een if condition om afgestudeerde studenten te kiezen "if (grades[i] > 7)"
* Stap5 declareren een variabel om als if condition true is dan het te kunnen 1 getal plussen "const b = 1;"
* Stap6 variabel a + variabel b dan geeft to a om correct afgestudeerde studenten te kunnen krijgen "a = a + b;"
* Stap7 return variabel a om kunnen function te aanroepen "return a;"
* */
// ---- Verwachte uitkomst: 6
function studentsHasGraduated(){
    let a=0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > 7){
            const b = 1;
            a = a + b;
        }
    }
    return a;
}
const totalOfGraduated = studentsHasGraduated();
console.log(totalOfGraduated);
/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
function studentsHasGraduated1(graduatedStudents){
    let a=0;
    for (let i = 0; i < graduatedStudents.length; i++) {
        if (graduatedStudents[i] > 7){
            const b = 1;
            a = a + b;
        }
    }
    return a;
}
const group1 = studentsHasGraduated1(grades);
console.log(group1);
const group2 = studentsHasGraduated1([6, 4, 5]);
console.log(group2);
const group3 = studentsHasGraduated1([8, 9, 4, 6, 10]);
console.log(group3);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.
/*
* Stap1 maak een functie heet "averageGrade"
* Stap2 Declareer een variabele voor de zelfverhogende waarde van cijfers "let total = 0;"
* Stap3 schrijft een for loop om alle grades te kunnen lopen "for (let i = 0; i < grades.length; i++)"
* Stap4 return de automatische verhoging gedeeld door de lengte van grades om kunnen function te aanroepen "return total / grades.length;"
* */
// ---- Verwachte uitkomst: 6.642857142857143
function averageGrade(grades){
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return total / grades.length;
}
const groups = averageGrade(grades);
console.log(groups);
/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx
function averageGrade1(grades){
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return total / grades.length;
}
const groups1 = averageGrade(grades);
console.log(groups1);
const groups2 = averageGrade([6, 4, 5]);
console.log(groups2);
const groups3 = averageGrade([8, 9, 4, 6, 10]);
console.log(groups3);

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!




/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.
/*
* Stap1 maak een functie heet "highestGrade"
* Stap2 return de method Math.max(...array) om kunnen function te aanroepen
* */
// ---- Verwachte uitkomst: 9
function highestGrade(grades){
    return Math.max(...grades);
}
const highest = highestGrade(grades);
console.log(highest);
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
function highestGrade1(grades){
    return Math.max(...grades);
}
const classen1 = highestGrade1(grades);
console.log(classen1);
const classen2 = highestGrade1([6, 4, 5]);
console.log(classen2);
const classen3 = highestGrade1([8, 9, 4, 6, 10]);
console.log(classen3);