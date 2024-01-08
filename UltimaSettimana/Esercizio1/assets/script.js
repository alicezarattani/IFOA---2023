let punti = 0;
let losts = 0;
const welcomeElement = document.querySelector(".welcome");
let palla = document.getElementById("palla");
let clicked = false;
let startSpeed = 18;
const posYStart = -50;
const posXstart = -130;
const maxLost = 5;
// const audio = new Audio("boom.wav");

function gestPoints() {
  /*ogni volta che la palla viene cliccata dovrà aumentare il punteggio*/
  punti++;
  document.getElementById("number").innerHTML = punti;
  palla.style = "transition-duration:600ms; transform: scale(3); opacity:0%";
  clicked = true;
  audio.play();
}

/*palla che ogni tot tempo viene presa dalla funzione e incrementa la sua posizione di uno verso il basso*/

function myMove() {
  welcomeElement.style.animation = "fade 2s forwards";
  let interval = null;
  let posX = posXstart;
  let posY = posYStart;
  actualSpeed = startSpeed;

  interval = setInterval(frame, actualSpeed);

  function frame() {
    const windowWidth = window.innerWidth - 80;
    const windowHeight = window.innerHeight - 80;
    // Controlli per mantenere la pallina all'interno della finestra
    if (posY >= windowWidth) {
      posY = windowWidth;
    } else if (posY < 0) {
      posY = 0;
    }
    if (posX >= windowHeight) {
      posX = windowHeight;
    } else if (posX < 0) {
      posX = 0;
    }

    if (posY === 100 && losts === maxLost) {
      clearInterval(interval);
      alert("GAME-OVER! Il tuo punteggio è" + punti);
    } else if (posY === 100 && clicked === true) {
      clicked = false;
      posY = posYStart;
      posX = Math.floor(Math.random() * 1000);
      palla.style = "opacity: 1";
      clearInterval(interval);
      interval = setInterval(frame, (actualSpeed -= 0.5));
    } else if (posY === 100 && clicked === false) {
      losts++;
      posY = posYStart;
      posX = Math.floor(Math.random() * 1000);
    } else {
      posX++;
      posY++;
      palla.style.top = posX + "px";
      palla.style.left = posY + "%";
    }
  }
}
