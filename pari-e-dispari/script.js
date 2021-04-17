//l'utente sceglie "pari" o "dispari"
var pariDispari = prompt("Ciao! Scegli: pari o dispari?");
console.log(pariDispari);
//l'utente sceglie un numero da 1 a 5
var numeroUtente = parseInt(prompt("Ok! Ora scrivi un numero da 1 a 5"));
console.log(numeroUtente);
//il computer genera random un numero da 1 a 5 usando una funzione
var numeroComputer = randomNum();
console.log(numeroUtente)

function randomNum() {
    return Math.floor(Math.random() * 5);
}

//sommare i mumeri e stabilire se il risultato è pari o dispari usando una funzione

var somma = numeroUtente + numeroComputer;

var risultatoControllo = PariOdispari(somma);

function PariOdispari (numeroDaControllare) {
    return numeroDaControllare % 2 === 0;
}

//decretare il vincitore
if (pariDispari == "pari" && risultatoControllo == true) {
    console.log("Hai vinto!");
} else if (pariDispari == "dispari" && risultatoControllo == false) {
    console.log("Hai vinto!");
} else {
    console.log("Mi dispiace, hai perso.");
}