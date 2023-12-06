//SALVA DATI: localStorage.setItem(key, value -> esempio:"usesrname", "John")
//RECUPERA DATI: const username = localStorage.getItem(key -> esempio: "username")
//MODIFICA DATI: localStorage.setItem(key, value2 -> sovrascrivo la value, esempio: "username", "Jane")
//RIMUOVI DATI: localStorage.removeItem(key -> "username")
//CANCELLA TUTTI I DATI: localStorage.clear()

const form = document.getElementById("registrationForm");
const inputName = document.getElementById("name");

function localSave(event) {
  event.preventDefault();

  const valueName = inputName.value;
  localStorage.setItem("name", valueName);

  const valueSaved = localStorage.getItem("name");

  displayName(valueSaved);
}

form.addEventListener("submit", localSave);

function displayName(stringa) {
  document.getElementById("emptyDiv").innerText = stringa;
}

function deleteData(event) {
  event.preventDefault();

  localStorage.removeItem("name");
}

form.addEventListener("reset", deleteData);

//--------------------------------------------------------------------------------------------------------------------------------------------

let i = sessionStorage.getItem("count")
  ? parseInt(sessionStorage.getItem("count"))
  : 0; //condizione di controllo -> se è vera vuol dire che la session è piena ed esegue il codice, se è falsa allora inizia il timer da 0

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText =
    i + " secondi dalla apertura della sessione.";
  sessionStorage.setItem("count", i);
};

setInterval(conta, 1000);
