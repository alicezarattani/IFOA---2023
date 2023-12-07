const library = "https://striveschool-api.herokuapp.com/books";

fetch(library)
  .then((response) => response.json())
  .then((data) => {
    // Itera attraverso ogni libro ottenuto dalla risposta
    data.forEach((book) => {
      // Crea una card per ogni libro e aggiungila alla pagina
      const rowLibrary = document.getElementById("rowLibrary");

      const card = document.createElement("div");
      card.classList.add("card", "col-md-4", "mb-3", "d-inline-block", "w-25");

      card.innerHTML = `
              <img src="${book.img}" class="card-img-top" alt="${book.title}">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.category}</p>
                <p class="card-text">${book.asin}</p>
                <p class="card-text">${book.price} €</p>
                <p class="card-link"> <a href="#" class="btn btn-primary btn-discard">Scarta</a></p>
              </div>
           
          `;

      const discardButton = card.querySelector(".btn-discard");
      discardButton.addEventListener("click", () => {
        card.remove(); // Rimuove la carta quando si fa clic sul pulsante "Scarta"
      });

      rowLibrary.appendChild(card);
    });
  })
  .catch((error) => console.error("Si è verificato un errore:", error));

//------------------------------------------------------------------------------------------------------------------------------
/*fetch(library).then((response) =>
  response.json().then((data) => populate(data))
);

function populate(data) {
  data.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("d-inline-block");
    card.classList.add("w-25");
    card.classList.add("mb-3");

    let img = document.createElement("img");
    img.src = book.img;
    img.classList.add("card-img-top");
    img.alt = "...";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = book.title;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = book.category;

    let cardLink = document.createElement("a");
    cardLink.classList.add("btn");
    cardLink.classList.add("btn-primary");
    cardLink.href = "#";
    cardLink.innerText = "Go somewhere";

    card.appendChild(cardTitle);
    card.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardLink);
    card.appendChild(cardBody);

    document.querySelector("#rowLibrary").appendChild(card);
  });
}*/
