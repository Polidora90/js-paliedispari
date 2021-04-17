//chiedere all'utente di inserirer una parola
//creare una funzione per capire se la parola inserita è palindroma


var parolaUtente = prompt("Inserisci una parola");

console.log(controllaSePalindroma(parolaUtente));


function controllaSePalindroma(parolaDaControllare) {
    //invertire una parola
    
    var stringaInvertita = "";
    for (var i = parolaDaControllare.length - 1; i >= 0; i--) {
        stringaInvertita += parolaDaControllare[i];
    }

    //controllare che la parola invertita sia uguale alla parola originale

    return (parolaDaControllare === stringaInvertita);
}
