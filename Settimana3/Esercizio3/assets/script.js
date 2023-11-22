const newTaskButton = document.querySelector("#newTaskBtn"); //assegnamento del risultato dell'espressione alla variabile newTaskButton
const newTaskInput = document.querySelector("#new-task"); //recuperare l'input salvandolo all'interno di una variabile

newTaskButton.addEventListener("click", stamp);

function stamp() {
  const newTaskText = newTaskInput.value;
  console.log(newTaskText);
}

function aggiungiTask(stringa) {
  //funzione che stamperà nel div toDo il valore del parametro stringa
}

aggiungiTask("pluto");
aggiungiTask("pippo");
