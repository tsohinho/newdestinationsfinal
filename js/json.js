"use strict";
let berlinPreview;
fetch("./assets/main.json")
  .then((response) => response.json())
  .then((data) => {
    for (const city of data.cities) {
        document.getElementById("berlintext").innerText = city.berlin.text;
    }
    for (const city of data.cities) {
      document.getElementById("paristext").innerText = city.paris.text;
    }
    for (const city of data.cities) {
    document.getElementById("londontext").innerText = city.london.text;
    }
    for (const city of data.cities) {
  document.getElementById("rometext").innerText = city.rome.text;
    }
    for (const city of data.cities) {
  document.getElementById("warsawtext").innerText = city.warsaw.text;
    }
    for (const city of data.cities) {
  document.getElementById("amsterdamtext").innerText = city.amsterdam.text;
    }
  });
