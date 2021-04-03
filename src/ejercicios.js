// @TODO Completar...

const contenedor = document.getElementById("contenedor");

const lista = document.createDocumentFragment();

const ul = document.createElement("ul");
lista.appendChild(ul);

const template = document.getElementById("temp").content;

contenedor.appendChild(lista);
