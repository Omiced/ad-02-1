console.log("Hola")

const h1Element = document.getElementById("red");
const h2Element = document.getElementById("green");

h1Element.textContent = "Adios"
h2Element.style.color = "orange"

h1Element.addEventListener("click", (event) => {
    h1Element.style.color = "brown";
})