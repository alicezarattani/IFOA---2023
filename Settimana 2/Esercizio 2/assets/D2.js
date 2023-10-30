/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let a = 2;
let b = 6;

if (a < b) {
  console.log("numero a è minore");
} else if (b < a) {
  console.log("il numero a è maggiore");
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.*/

const c = 10;

if (c !== 5) {
  console.log("not equal");
}

/* Soluzione con Ternario ??
const c = c !== 5 ? console.log("Not Equal") : "";*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (5 % c === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 OPPURE se la loro addizione/sottrazione sia uguale a 8 (e una verifica legata a degli OR!)
*/

let d = 7;
let e = 1;

if (d === 8 || e === 8 || d + e === 8 || d - e === 8 || e - d === 8) {
  console.log("Verificato");
} else {
  console.log("Non Verificato");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 51; /* Questo valore potrebbe cambiare e si andrà a modificare se cambierà la spesa*/
let spedizione = 10;
let totale =
  totalShoppingCart; /* Totale che verrà incrementato da spedizione se le condizioni richieste per la spedizione gratuita non si realizzano*/

if (totalShoppingCart < 50) {
  totale += spedizione;
}
console.log(
  "Costo totale = €" + totale
); /* Istruzioni finali sono esterne perchè mostri sempre il valore nel carrello, anche se non rispetta la condizione*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 51;
totalShoppingCart2 = totalShoppingCart2 * 0.8;

let spedizione2 = 10;
let totale2 = totalShoppingCart2;

if (totalShoppingCart2 < 50) {
  totale2 += spedizione2;
}

console.log("Costo totale: €" + totale2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let x1 = 6;
let x2 = 14;
let x3 = 10;

if (x1 >= x2) {
  if (x3 >= x1) {console.log("x3, x1, x2");}
  else {
   if (x3 >= x2) {
    console.log(x1, x3, x2);
   } 
   else {
    console.log(x1, x2, x3);}
  }
  else {if (x3 >= x2) {console.log (x3, x2, x1)}}
  else { if (x3>=x1) {console.log (x2, x3, x1)}}
  else {console.log (x2, x1, x3)}

} */

/* Soluzione con array ???

let arrayOrd = [];
arrayOrd[0] = x1;
arrayOrd[1] = x2;
arrayOrd[2] = x3;

arrayOrd.sort();

console.log = arrayOrd[2];
console.log = arrayOrd[1];
console.log = arrayOrd[0];*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let test = 12;

if (typeof test === "number") {
  console.log(test + " è un numero");
} else {
  console.log(test + "non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let pari = 24;

if (pari % 2 === 0 /* se la sua divisone per 2 da resto 0*/) {
  console.log("è un umero pari");
} else {
  console.log("è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10"); <-- si ferma qui per forza
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 10;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Minore di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);
console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100;
console.log(myArray);
