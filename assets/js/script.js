// ejercicio 2
function pintar(color) {
  ele.style.backgroundColor = color;
}

let ele = document.querySelector("#ele1");
ele.style.backgroundColor = "green";
ele.addEventListener("click", () => pintar("yellow"));

// ejercicio 3
let azul = document.querySelector("#azul");
let rojo = document.querySelector("#rojo");
let verde = document.querySelector("#verde");
let amarillo = document.querySelector("#amarillo");
let key = document.querySelector("#key");

const cambiarColor = (e) => {
  const elemento = e.target;

  const colorActual = elemento.style.backgroundColor;

  if (colorActual === "black") {
    elemento.style.backgroundColor = "";
  } else {
    elemento.style.backgroundColor = "black";
  }
};

azul.addEventListener("click", cambiarColor);
rojo.addEventListener("click", cambiarColor);
verde.addEventListener("click", cambiarColor);
amarillo.addEventListener("click", cambiarColor);

// ejercicio 3.1

function crearNuevoDiv(color) {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.margin = "15px";
  nuevoDiv.style.display = "flex";
  nuevoDiv.style.justifyContent = "center";
  nuevoDiv.style.alignItems = "center";

  let contenidoNuevo = document.createElement("div");
  nuevoDiv.appendChild(contenidoNuevo);
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (e.key === "s") {
    key.style.backgroundColor = "orangered";
  } else if (e.key === "d") {
    key.style.backgroundColor = "lightblue";
  } else if (e.key === "q") {
    crearNuevoDiv("purple");
  } else if (e.key === "w") {
    crearNuevoDiv("grey");
  } else if (e.key === "e") {
    crearNuevoDiv("brown");
  }
});
