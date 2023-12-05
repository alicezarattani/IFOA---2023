const form = document.querySelector("form");
const taskContainer = document.querySelector("#task"); //la useremo alla fine per visualizzare la lista dei pet
const petList = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

//aggiungiamo un eventListener al form che si attiva quando viene inviato con submit
form.addEventListener("submit", (e) => {
  //il metodo e.preventDefault() previene il comportamento predefinito del form (come il ricaricamento della pagina).
  e.preventDefault();
  //recuperiamo i valori dei campi del form
  const petName = document.querySelector("input[name=petName]").value;
  const ownerName = document.querySelector("input[name=ownerName]").value;
  const species = document.querySelector("input[name=species]").value;
  const breed = document.querySelector("input[name=breed]").value;

  //creiamo una nuova istanza della classe Pet (un nuovo oggetto) con i valori di Pet (il nostro stampino)
  const newPet = new Pet(petName, ownerName, species, breed);

  //pushiamo i valori della nuova istanza della classe Pet nella petList
  petList.push(newPet);

  //chiamiamo la funzione che stampa la lista dei pet
  displayPetList();
});

function displayPetList() {
  taskContainer.innerHTML = ""; //rimuoviamo gli eventuali elementi preesistenti all'interno dell'elemento con id "task" (a cui fa riferimento taskContainer)

  //iteriamo l'array petList con un forEach per ogni istanza di Pet
  petList.forEach((pet) => {
    //per ogni pet viene creato un nuovo elemento div in cui vengono stampati i dettagli del pet
    const petItem = document.createElement("div");
    petItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;

    //l'elemento div viene aggiunto come elemento figlio all'elemento taskContainer -> gli elementi della petList verranno visualizzati nella taskContainer (i petItem)
    taskContainer.appendChild(petItem);
  });
}
