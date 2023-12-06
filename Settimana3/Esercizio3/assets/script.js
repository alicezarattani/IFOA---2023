const newTaskButton = document.querySelector("#newTaskBtn"); //assegnamento del risultato dell'espressione alla variabile newTaskButton
const newTaskInput = document.querySelector("#new-task"); //recuperare il riferimento all'input salvandolo all'interno di una variabile

newTaskButton.addEventListener("click", onButtonClick);

function onButtonClick() {
  const newTaskText = newTaskInput.value; //qui andremo a prendere il valore dentro all'input
  aggiungiTask(newTaskText);
}

function aggiungiTask(stringa1) {
  const todoDiv = document.querySelector("#toDo");

  const par = document.createElement("p");
  par.innerHTML = stringa1;

  todoDiv.appendChild(par);
}

//prova a creare un array in cui salvare i vari task della lista
//ogni volta che clicchi sul bottone viene aggiunto un altro task all'array e viene riscritta la lista
