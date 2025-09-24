// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let listAmigos = []

// Selectores del DOM fuera de las funciones para mejor rendimiento
const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function validarNombre(nombre) {
    if (!nombre || nombre.trim() === "" || nombre.includes(" ") || /[0-9]/.test(nombre)) {
        return false;
    } else {
        return true;
    }
}

function mostrarLista() {
    lista.innerHTML = "";

    for (let i = 0; i < listAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listAmigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let nombre = input.value.trim();

    if (validarNombre(nombre)) {
        listAmigos.push(nombre);
        mostrarLista();
        input.value = "";
    } else {
        alert("¡Error: ingrese un nombre válido (sin espacios ni números)!");
        return;
    }
}

function sortearAmigo() {
    if (listAmigos.length === 0) {
        alert("¡Primero agrega algunos amigos a la lista!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listAmigos.length);
    const amigoSorteado = listAmigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}