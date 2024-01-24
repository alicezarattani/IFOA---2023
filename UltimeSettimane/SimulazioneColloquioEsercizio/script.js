const obj = [
  { id: 34578, name: "Marco", surname: "Furi", city: "Milano" },

  { id: 34588, name: "Michele", surname: "Sifole", city: "Cesena" },

  { id: 34599, name: "Mario", surname: "Rossi", city: "Milano" },

  { id: 34567, name: "Marco", surname: "Furi", city: "Milano" },

  { id: 34458, name: "Stefania", surname: "Galazzo", city: "Milano" },

  { id: 34460, name: "Stefania", surname: "Galazzo", city: "Milano" },

  { id: 34461, name: "Stefania", surname: "Galazzo", city: "Milano" },

  { id: 34456, name: "Stefania", surname: "Galazzo", city: "Milano" },

  { id: 34456, name: "Stefania", surname: "Galazzo", city: "Milano" },
];

function populate(array) {
  let tableRowContainer = document.getElementById("tableRowContainer");
  tableRowContainer.innerHTML = "";
  array.forEach((element) => {
    let newRow = `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.surname}</td>
        <td>${element.city}</td>
        <td>${element.name}</td>
        </tr>`;

    tableRowContainer.innerHTML += newRow;
  });
}

populate(obj);

function deleteRow(id) {
  let foundYou = 0;

  obj.find((element, index) => {
    let value = Object.value(element)[0];
    console.log(value);

    if (value === id) {
      console.log(value);
      foundYou = index;
    }
  });
  obj.splice(index, 1);
  populate(obj);
}
