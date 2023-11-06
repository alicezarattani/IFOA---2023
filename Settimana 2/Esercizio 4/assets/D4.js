/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  let calcolo = l1 * l2;
  return calcolo;
}

console.log("L'area del rettangolo è: " + area(6, 7));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero1, numero2) {
  somma = numero1 + numero2;
  if (numero1 === numero2) {
    return somma * 3;
  } else {
    return somma;
  }
}

console.log(crazySum(7, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a) {
  let differenza = Math.abs(a - 19);
  if (a > 19) {
    return [differenza, differenza * 3]; //questo è un array dentro al nostro return
  } else {
    return differenza;
  }
}

console.log(crazyDiff(33));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n === 400 || (n >= 20 && n <= 100)) {
    return [true, n];
  } else {
    return [false, n];
  }
}
console.log("Il numero che hai inserito è: " + boundary(42));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let stringa;

function epify(stringa) {
  if (stringa.startsWith("Epicode")) {
    return stringa;
  } else {
    return "Epicode" + stringa;
  }
}

console.log(epify("Epicoders are the best developers!"));
console.log(epify(" Corso front-end"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  numero = Math.abs(numero);
  if (numero % 3 === 0 && numero % 7 === 0) {
    console.log("divisibile per 3 e per 7");
  } else if (numero % 7 === 0) {
    console.log("divisibile per 7");
  } else if (numero % 3 === 0) {
    console.log("divisibile per 3");
  } else {
    console.log("Non multiplo di 3 o 7");
  }
}
console.log(check3and7(42));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  let stringaCapovolta = stringa.split("").reverse().join("");
  return stringaCapovolta;
}

console.log(reverseString("quarantadue"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let frase =
  "Questo è l'esercizio numero otto del giorno quattro, settimana due";

function upperFirst(stringa) {
  let arrayFrase = stringa.split(" ");
  let risultato = []; //array vuoto da utilizzare
  for (
    let i = 0;
    i < arrayFrase.length;
    i++ //ciclo l'array di parola
  ) {
    let prima = arrayFrase[i].charAt(0); //cerchiamo la prima lettera da ogni parola
    let parolaTagliata = arrayFrase[i].slice(1); //tagliamo la prima lettera di ogni parola
    let parolaFinale = prima.toUpperCase() + parolaTagliata; //si aggiunge la prima lettera cercata prima in maiuscolo
    risultato.push(parolaFinale); //il tutto viene pushato nell'array vuoto
  }
  return risultato.join(" ");
}

console.log(upperFirst(frase));

//ALTERNATIVA ASCIUGATA
function upperFirst(stringa) {
  let arrayFrase = stringa.split(" ");
  let risultato = []; //array vuoto da utilizzare
  for (let i = 0; i < arrayFrase.length; i++) {
    let parolaFinale =
      arrayFrase[i].charAt(0).toUpperCase() + arrayFrase[i].substring(1);
    risultato.push(parolaFinale);
  }
  return risultato.join(" ");
}

console.log(upperFirst(frase));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.slice(1, stringa.length - 1); //elimina il primo carattere e fermati al penultimo: gli diciamo da che carattere parte e dove si ferma con 1 e -1
}

console.log(cutString("quarantadue"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let arrayNumeri = [];
  for (let i = 0; i < n; i++) {
    arrayNumeri.push(Math.floor(Math.random() * 11));
  }
  return arrayNumeri;
}

console.log(giveMeRandom(5));
