const endpoint = "https://restcountries.com/v3.1/all";
const filaPaises = document.getElementById("fila-paises");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      const pais = data[i];
      const nombrePais = pais.name.common;
      const banderaPais = pais.flags.png;
      const monedaPais = Object.values(pais.currencies)[0].name;
      const divPais = document.createElement("div");
      divPais.classList.add("pais");
      divPais.innerHTML = `
        <img src="${banderaPais}" alt="Bandera de ${nombrePais}">
        <h2>${nombrePais}</h2>
        <p class="moneda">Moneda: ${monedaPais}</p>
        <button onclick="mostrarPais('${nombrePais}')">Mostrar país</button>
      `;
      filaPaises.appendChild(divPais);
    }
  })
  .catch((error) => console.log(error));

function mostrarPais(nombrePais) {
  alert(nombrePais);
}