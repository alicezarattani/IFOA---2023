// Funzione che gestisce il collegamento tra checkbox e pulsante
function checkCheckbox() {
  let checkbox = document.getElementById("checkbox");
  let button = document.getElementById("button");

  /* Abilita o disabilita il pulsante in base allo stato della checkbox*/
  if (checkbox.checked) {
    button.disabled = false;
    button.classList.add("enabled");
  } else {
    button.disabled = true;
    button.classList.remove("enabled");
  }
}

document.getElementById("button").addEventListener("click", function () {
  let checkbox = document.getElementById("checkbox");

  if (checkbox.checked) {
    window.location.href = "pagina_successiva.html";
  }
});
