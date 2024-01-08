const Url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2I5ZmMwNTgzNTAwMTg1MjMwYWEiLCJpYXQiOjE3MDIzOTI0OTUsImV4cCI6MTcwMzYwMjA5NX0.0haZ_wOq1--dU8ebR_Ffh_jT7K7s4aZEZakWNfEOkfg";

const Headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-type": "application/json",
};

let products = [];

fetch(Url, {
  method: "GET",
  headers: Headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createCards(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function postProduct(newProduct) {
  fetch(Url, {
    method: "POST",
    headers: Headers,
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Nuovo prodotto: ", data);
      createCards(data);
    })
    .catch((error) => alert(error));
}

//quando utente clicca su Save salva la carta
document
  .getElementById("saveButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const productDescription =
      document.getElementById("productDescription").value;
    const productImageUrl = document.getElementById("productImageUrl").value;
    const productPrice = document.getElementById("productPrice").value;

    const newProduct = {
      imageUrl: productImageUrl,
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    console.log(newProduct);
    postProduct(newProduct); // Chiamata a postProduct con i dati del nuovo prodotto
  });

function createCards(products) {
  console.log(products);
  let card = document.getElementById("cards");
  card.innerHTML = "";

  products.forEach((product) => {
    let newCard = `<div class="col-sm-4">
              <div class="card">
                  <img class="card-img-top w-25" src="${product.imageUrl}" alt="Cellulare">
                  <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.description}</p>
                      <p class="card-text">$${product.price}</p>
                  </div>
                  <div class="card-footer d-flex justify-content-between">
                      
                      <a class="btn btn-primary" href="./details.html?id=${product._id}" >Dettagli</a>
                      <a href="#" class="btn btn-danger">Modifica</a>
                  </div>
              </div>
          </div>`;
    card.innerHTML += newCard;
  });
}
