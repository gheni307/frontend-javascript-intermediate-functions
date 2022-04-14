// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.
const members = [
    {
        email: 'n.eeken@novi-education.nl',
        domain: 'novi-education.nl',
        position: 'Student'
    },
    {
        email: 't.mellink@novi.nl',
        domain: 'novi.nl',
        position: 'Medewerker'
    },
    {
        email: 'a.wiersma@outlook.com',
        domain: 'outlook.com',
        position: 'Extern'
    },
    {
        email: 'novi.nlaapjesk@outlook.com',
        position: 'Extern'
    }
];
/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(email){
    let domainOfPerson = '';
    for (let i = 0; i < members.length; i++) {
        if (members[i].email === email){
            domainOfPerson = members[i].domain;
        }
    }
    return domainOfPerson;
}
const emailAdress1 = getEmailDomain("n.eeken@novi-education.nl");
console.log(emailAdress1);
const emailAdress2 = getEmailDomain("t.mellink@novi.nl");
console.log(emailAdress2);
const emailAdress3 = getEmailDomain("a.wiersma@outlook.com");
console.log(emailAdress3);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail(email){
    let positionOfPerson = '';
    for (let i = 0; i < members.length; i++) {
        if (members[i].email === email){
            positionOfPerson = members[i].position;
        }
    }
    return positionOfPerson;
}
const position1 = typeOfEmail("n.eeken@novi-education.nl");
console.log(position1);
const position2 = typeOfEmail("t.mellink@novi.nl");
console.log(position2);
const position3 = typeOfEmail("novi.nlaapjesk@outlook.com");
console.log(position3);
const position4 = typeOfEmail("a.wiersma@outlook.com");
console.log(position4);
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(email){
    if (email.includes('@') && !email.includes(',') && email.slice(-1) !== '.'){
        console.log('true - want @ en punt op de juiste plek');
    }
    if(!email.includes('@')) {
        console.log('false - want geen @');
    }
    if (email.includes(',')){
        console.log('false - want er staat een komma in');
    }
    if (email.slice(-1) === '.'){
        console.log('false - want de punt mag niet als laatst');
    }
}
checkEmailValidity("n.eeken@novi.nl");
console.log('********************************************************');
checkEmailValidity("tessmellink@novi.nl");
console.log('********************************************************');
checkEmailValidity("n.eekenanovi.nl");
console.log('********************************************************');
checkEmailValidity("n.eeken@novinl.");
console.log('********************************************************');
checkEmailValidity("tessmellink@novi,nl");
