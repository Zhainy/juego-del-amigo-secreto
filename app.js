// Array para almacenar los nombres de los amigos
let listaDeAmigos = [] ;

//función para asignar texto a un elemento HTML
function asignarTextoAUnElemento(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

//función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = document.querySelector("#amigo").value;
    if (nombre.trim().length === 0) {
        alert("Por favor ingresa un nombre");
    } else if (listaDeAmigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Ese nombre ya está en la lista.");
    }
    else {
        listaDeAmigos.push(nombre);
        let contenedorLista = document.querySelector("#listaAmigos");    
        contenedorLista.innerHTML = listaDeAmigos
        .map(amigo => `<li>${amigo}</li>`)
        .join('')
        limpiarInput();
    }
}

//funcion para limpiar el input
function limpiarInput() {
    document.querySelector("#amigo").value = "";
    return;
}

//función para validar si hay amigos en la lista
function validarSiHayAmigos() {
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista");
        return false;
    } else {
        return true;
    }
}

//función para sortear un amigo secreto
function sortearAmigo() {
    if (validarSiHayAmigos() === true) {
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    asignarTextoAUnElemento("h2", `Tu amigo secreto es <span style="color: #ff6730ff;"> ${amigoSorteado}</span>`);}
    colorFondoTransicion();
    document.querySelector('.button-draw').setAttribute('disabled', 'true');
    document.querySelector('.button-draw').setAttribute('style', 'background-color: #adadadff; color: gray; cursor: not-allowed;');
}

//función para cambiar el color de fondo con transición al sortear el amigo secreto
function colorFondoTransicion() {
    document.body.style.transition = "background-color 0.8s ease";
    document.body.style.backgroundColor = "#ff6730ff";
}