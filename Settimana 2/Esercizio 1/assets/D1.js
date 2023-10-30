/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.getElementById("testo1").innerHTML +=
  "Il dato Stringa fa riferimento al testo e viene definito scrivendo all'interno di due apici (virgolette).";

document.getElementById("testo2").innerHTML +=
  "Il dato numerico fa riferimento ai numeri in quanto tali.";

document.getElementById("testo3").innerHTML +=
  "Il dato Booleano è un dato di controllo, può essere true o false, che sono i suoi soli possibili valori.";

document.getElementById("testo4").innerHTML +=
  "Il dato Null è null: dato intenzionalmente vuoto (variabile vuota).";

document.getElementById("testo5").innerHTML +=
  "Il dato Undefined è un dato (temporaneamente) senza un valore.";

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Alice";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//Soluzione 1
let numero1 = 12;
let numero2 = 20;

console.log(numero1 + numero2);

//Soluzione 2
let somma = 12 + 20;
console.log(somma);

//Soluzione 3
console.log(12 + 20);

//Soluzione 4 (best poichè possono manipolare diverse variabili)
let nuovoNumero1 = 12;
let nuovoNumero2 = 20;
let nuovaSomma = nuovoNumero1 + nuovoNumero2;
console.log(nuovaSomma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con la keyword const.
*/

/*  const myName;
myName = "Zarattani";
console.log(myName)
const persona = myName 
persona = Alice Zarattani; Questa istruzione genererà un errore di riassegnazione*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

//Soluzione 1
let a = 4;
console.log(a - x);

//Soluzione 2
console.log(4 - x);

//Soluzione 3
let sottrazione = 4 - x;
console.log(sottrazione);

//Soluzione 4
let nuovaSottrazione = a - x;
console.log(nuovaSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

//Soluzione 1
console.log("I due nome sono uguali?" + (name1 === name2));

//Soluzione 2
console.log("I due nomi sono uguali?", name1 === name2);

//Soluzione 3
let verifica = name1 === name2;
console.log("I due nomi sono uguali?", verifica);

//EXTRA
//Soluzione 1
console.log(
  "I due nomi sono uguali?",
  name1.toLowerCase() === name2.toLowerCase()
);

//Soluzione 2
let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log("I due nomi sono uguali?", altraVerifica);
