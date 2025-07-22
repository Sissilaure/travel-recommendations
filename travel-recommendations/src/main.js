function showBeach() {
  const beachDiv = document.getElementById("beach");
  beachDiv.innerHTML = `
    <img src="../images/beach1.jpg" alt="Beach 1" width="200">
    <img src="../images/beach2.jpg" alt="Beach 2" width="200">
  `;
}

function showTemples() {
  const templeDiv = document.getElementById("temple");
  templeDiv.innerHTML = `
    <img src="../images/temple1.jpg" alt="Temple 1" width="200">
    <img src="../images/temple2.jpg" alt="Temple 2" width="200">
  `;
}

function showCountry(value) {
  const countryDiv = document.getElementById("country");
  if (value === "japan") {
    countryDiv.innerHTML = `
      <img src="../images/country1.jpg" alt="Japan" width="200">
      <img src="../images/country2.jpg" alt="Japan" width="200">
    `;
  } else if (value === "greece") {
    countryDiv.innerHTML = `
      <img src="../images/grece1.jpg" alt="Greece" width="200">
      <img src="../images/grece2.jpg" alt="Greece" width="200">
    `;
  } else {
    countryDiv.innerHTML = "";
  }
}
