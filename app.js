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
    } else if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
    }
    else {
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

function validarSiHayAmigos() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista");
        return false;
    } else {
        return true;
    }
}
function sortearAmigo() {
    if (validarSiHayAmigos() === true) {
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    asignarTextoAUnElemento("h2", `Tu amigo secreto es <span style="color: #ff6730ff;"> ${amigoSorteado}</span>`);}
    colorFondoTransicion();
    document.querySelector('.button-draw').setAttribute('disabled', 'true');
    document.querySelector('.button-draw').setAttribute('style', 'background-color: #adadadff; color: gray; cursor: not-allowed;');
}

function colorFondoTransicion() {
    document.body.style.transition = "background-color 0.8s ease";
    document.body.style.backgroundColor = "#ff6730ff";
}