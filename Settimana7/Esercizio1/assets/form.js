const form = document.querySelector("form");
const taskContainer = document.querySelector("#task");
const petList = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

//raccogli i dati dal form e crea diverse istanze della classe Pet mostrandone i dati in una lista

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const petName = document.querySelector("input[name=petName]").value;
  const ownerName = document.querySelector("input[name=ownerName]").value;
  const species = document.querySelector("input[name=species]").value;
  const breed = document.querySelector("input[name=breed]").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  petList.push(newPet);
  console.log();
  displayPetList();
});

function displayPetList() {
  taskContainer.innerHTML = "";

  petList.forEach((pet) => {
    const petItem = document.createElement("div");
    petItem.textContent = `Pet: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    taskContainer.appendChild(petItem);
  });
}
