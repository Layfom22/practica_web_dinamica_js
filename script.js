// IMportar los objetos de ciudades
import { barcelona, roma, paris, londres } from "./ciudades.js";

//traer los seleccionadores, declaramos las variables
const enlaces = document.querySelectorAll("a");
const titulo = document.getElementById("titulo");
const subTitulo = document.getElementById("subtitulo");
const parrafo = document.getElementById("parrafo");
const precio = document.getElementById("precio");

// Mapeo de ciudades a sus objetos
const ciudades = { barcelona, roma, paris, londres };

//for each para el evento clic
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //REMOVEMOS ACTIVO, es cuando se pone verde donde se hizo clic
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //Agrega el activo donde se hizo el clic
    this.classList.add("active");

    //trae la informacion del objeto correspondiente a la eleccion
    //let contenido = obtenerContenido(this.textContent);
    const ciudad = enlace.getAttribute("data-ciudad");
    const contenido = ciudades[ciudad];

    //Muestra contenido en el DOM
    titulo.innerHTML = contenido.titulo;
    subTitulo.innerHTML = contenido.subTitulo;
    parrafo.innerHTML = contenido.parrafo;
    precio.innerHTML = contenido.precio;
  });
});

/*
//funcion para traer la informacion correcta de ciudades.js
function obtenerContenido(enlaces){
    let contenido = {
        //INDEX: CIUDADES.JS
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlaces]
}
*/
