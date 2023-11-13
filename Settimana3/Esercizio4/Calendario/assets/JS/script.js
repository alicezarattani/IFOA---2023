/*1. capire in che mese siamo per scriverlo in h1 insieme a quanti giorni ha il mese, per generare il corretto numero di celle
 */

const now = new Date(); //senza altre specifiche restituisce anno, mese, giorno, ore, minuti, secondi e fuso orario di oggi

/* per salvare gli appuntamenti ci serve un array -> ogni appuntamento è una stringa, ogni giorno può contenere infiniti appuntamenti e ogni mese ha un numero di giorni variabile: creiamo quindi un array di array con array padre mese e array figli che rappresentano i giorni
ES.
[mese
[primogiorno],[secondo],[terzo],[quarto],...,
]*/

const appointments = []; //array che conterrà dei sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
]; //questo array contiene i nomi in italiano

const scriviMese = function () {
  const title = document.querySelector("h1"); //seleziona l'h1 dove devi scrivere il mese
  const indiceMese = now.getMonth(); //sarà 10 perchè siamo a novembre (parte a contare dallo 0), .getMonth genera un numero non un nome
  const nomeMese = monthNames[indiceMese]; //il numero verrà ciclato e inserito in un indice (indiceMese) che poi sarà associato al nostro array monthNames per recuperare il nome associato a quel numero
  title.innerText = nomeMese;
};

scriviMese();

//Sappiamo in che mese siamo ma dobbiamo definire quanti giorni ha
//Febbraio negli anni bisestili ha 29 giorni, per sapere il mese quanti giorni ha serve anche l'anno dunque

const giorniTotali = function () {
  const anno = now.getFullYear(); //2023
  const mese = now.getMonth(); //numero 10 perchè siamo a novembre

  //nell'oggetto date il numero dei giorni parte da 1, mi basta sapere qual è l'ultimo giorno del mese in corso per avere il suo numero di giorni
  //per sapere l'ultimo giorno creo la data del primo giorno del mese successivo al mese in corso e faccio meno 1

  let ultimoGiorno = new Date(anno, mese + 1, 0); //ad oggi stiamo creando il giorno 0 dicembre 2023, che non esiste, perciò ci darà il 30 novembre 2023 -> se lo facessimo per dicembre sarebbe anno +1
  console.log("numero di Giorni", ultimoGiorno);

  const numeroGiorni = ultimoGiorno.getDate(); //tiriamo fuori il numero grazie a .getDate
  console.log(numeroGiorni);
  return numeroGiorni; //ci facciamo ritornare il numeroGiorni perchè ci servirà per ripetere per il suo numero di giorni la creazione di div corrispondenti
};

giorniTotali();

//Quando carico un mese eventuali classi selected devono essere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente che avevano appuntamenti
//sleziono tutti gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll("day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  }); //rimuovo la classe selected da tutte quelle che ce l'hanno quando carico il mese successivo
};

//quando si fa click in un girono nel div id="newMeetingDay" si dovrà leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay"); //serve a far scrivere l'elemento nel modo che abbiamo scelto su css
  giorno.innerText = indiceGiorno + 1;
};

//va creata la griglia dei div contenenti i giorni del mese in corso; questa griglia userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (
  numeroGiorni //numeroGiorni corrisponderà al numero di giorni del mese corrente (è il suo parametro, valore puro)
) {
  const calendarDiv = document.getElementById("calendar");
  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement("div"); //ad ogni giorno associamo un div
    cellaGiorno.classList.add("day"); //stilizzo il div come definito in css

    cellaGiorno.addEventListener(
      "click",
      function (
        e //rendo cliccabili i div dei giorni
      ) {
        deselezionaCelle(); //richiamo deselezionaCelle per deselezionare l'eventuale altra cella selezionata
        cellaGiorno.classList.add("selected"); //aggiungo la classe per mostrare la selezione del giorno cliccato
        giornoAppuntamento(i); // scrivo il giorno cliccato nella sezione Giorno del form
        //se ci sono già eventi nella giornata deve comparire la lista
        if (appointments[i].length > 0) {
          mostraAppuntamenti(i);
        } else {
          const divAppuntamenti = document.getElementById("appointments");
          divAppuntamenti.style.display = "none";
        }
      }
    );
    //devo scrivere il numero del giorno nel div
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    //"appendo" gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    //creato il calendario inserisco nell'array appointments l'array dei giorni dele mese
    appointments.push([]);
  }
};
creaGriglia(giorniTotali()); //argomento che passiamo alla funzione (che in questo caso è un'altra funzione)

const mostraAppuntamenti = function (indiceGiorno) {
  //con questa funzione popoliamo la lista degli appuntamenti con gli appuntamenti del giorno
  //1. prendiamo gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno]; //vai a pescare nell'array gli appuntamenti di quell'indice
  //2.selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  //3. svuotare la lista
  lista.innerHTML = "";
  //4. ciclare gli appuntamenti del giorno e creare un li per  ciascuno
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  //5. la lista è piena ma è ancora nascosta e non si vede
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};

//dobbiamo creare nuovi appuntamenti
const submitForm = function (e) {
  e.preventDefault(); //previene comportamenti di default del button per non far cercare la action del form al bottone
  //1.giorno dell'appuntamento
  const selectedDay = document.getElementById("newMeetingDay").innerText;
  //2.ora dell'appuntamento
  const meetingTime = document.getElementById("newMeetingTime").value;
  //3.nome dell'appuntamento
  const meetingName = document.getElementById("newMeetingName").innerText;
  //4.creo la stringa dell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
  //5.scrivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDay) - 1; //i giorni partono da uno ma gli indici da 0, parseInt è nel dubbio che arrivi una stringa
  console.log("Array prima del salvataggio", appointments);
  appointments[indiceArray].push(stringaAppuntamento);
  console.log("Array dopo il salvataggio", appointments);
};

const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", submitForm);
