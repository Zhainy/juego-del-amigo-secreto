// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [] ;

function asignarTextoAUnElemento(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    if (nombre.trim().length === 0) {
        alert("Por favor ingresa un nombre");
    } else {
        listaDeAmigos.push(nombre);
        console.log(listaDeAmigos);
        let contenedorLista = document.querySelector("#listaAmigos");    
        contenedorLista.innerHTML = listaDeAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join('')
        condicionesIniciales();
    }
}



function condicionesIniciales() {
    document.querySelector("#amigo").value = "";
    return;
}