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
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
