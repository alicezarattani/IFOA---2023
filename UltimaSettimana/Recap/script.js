// UNA CLASSE PRENDA COME PARAMETRO OPZIONALE UN ARRAY DI NUMERI
// DEVO CONTROLLARE CHE MI ARRIVI UN ARRAY O MENO
// SE MI ARRIVA VOGLIO CHE SUCCEDA QUESTO:
// SE UN NUMERO E DIVISIBILE PER 3 STAMPO PIPPO
// SE UN NUMERO E DIVISIBILE PER 5 STAMPO PLUTO
// SE UN NUMERO E DIVISIBILE SIA PER 3 CHE PER 5 STAMPO PAPERINO
// SE UN NUMERO NON E DIVISIBILE PER NESSUNO DEI DUE STAMPO IL NUMERO IN FORMATO STRINGA

class PippoPlutoPaperino {
  constructor(
    arr = null
  ) /*Puoi ricevere un array ma anche no -> se stai ricevendo qualcosa fai quello che ti sto dicendo*/ {
    if (arr !== null) {
      this.numbers = arr;
    }
  }
  check() {
    this.numbers.forEach((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        console.log("Paperino");
      } else if (number % 3 === 0) {
        console.log("Pippo");
      } else if (number % 5 === 0) {
        console.log("Pluto");
      } else {
        console.log(number.toString());
      }
    });
  }
}

const test = new PippoPlutoPaperino([1, 2, 3, 7, 10, 25, 32, 67, 42, 100]);

setTimeout(() => {
  if (PippoPlutoPaperino.hasOwnProperty("numbers")) {
    test.check();
  } else {
    console.log("Non ho i numeri deficiente");
  }
}, 1000);

/*scrivi una funzione che triggeri la propagation*/
const padre = document.getElementById("padre");
const pippo = document.getElementsByClassName("figlio1")[0];
const paperino = document.getElementsByClassName("figlio2")[0];
const pluto = document.getElementsByClassName("figlio3")[0];

function changeColor(e) {
  // e.stopPropagation(); /*così la fermiamo*/
  this.style.backgroundColor = "blue";
}

padre.addEventListener("click", changeColor);

pippo.addEventListener("click", changeColor);
paperino.addEventListener("click", changeColor);
pluto.addEventListener("click", changeColor);

/*con funzione freccia ed esempio in cui la fermo solo su una*/

// padre.addEventListener("click", (e) => {
//   padre.style.backgroundColor = "blue";
// });

// pippo.addEventListener("click", (e) => {
//   pippo.style.backgroundColor = "blue";
// });

// paperino.addEventListener("click", (e) => {
//   e.stopPropagation();
//   paperino.style.backgroundColor = "blue";
// });

// pluto.addEventListener("click", (e) => {
//   pluto.style.backgroundColor = "blue";
// });
