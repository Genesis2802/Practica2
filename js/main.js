//Escuchar el click del boton
const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre)

//Guardar referencia
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

//Preguntar y guardar el nombre del usuario
function preguntarNombre(){
    const nombre = prompt("Introduce tu nombre")
    mostrarNombre(nombre)
}

//Insertar el nombre donde estan los ,,,
function mostrarNombre(nombre){
    h1.textContent = nombre
    h2.textContent = "Hola"
}