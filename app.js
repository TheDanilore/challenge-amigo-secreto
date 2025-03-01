//Array para almacenar los nombres de los amigos
let amigos = [];

//Funcion para asignar un li con valor a una lista
function asignarTextoLista(elemento, texto) {
    // Se obtiene el elemento de la lista por su ID
    const lista = document.getElementById(elemento);
    // Se crea un nuevo elemento li
    const nuevoAmigo = document.createElement('li');
    // Se asigna el texto al nuevo elemento li
    nuevoAmigo.textContent = texto;
    // Se agrega el nuevo elemento li a la lista
    lista.appendChild(nuevoAmigo);
    return;
}

//Funcion para agregar un nombre de un amigo a la lista
function agregarAmigo() {
    // Se obtiene el elemento input (por su id) donde se escribe el nombre del amigo
    const input = document.getElementById('amigo');
    // Se obtiene el valor del input y eliminar espacios en blanco al inicio y al final
    const nombreAmigo = input.value.trim();

    //Validaciones
    if (nombreAmigo === '') {
        // Muestra una alerta si el nombre está vacío
        return alert("Debes ingresar un nombre");
    }

    if (amigos.includes(nombreAmigo)) {
        // Muestra una alerta si el nombre ya está en la lista
        return alert("Este nombre ya está en la lista");
    }

    // Se agrega el nombre al array de amigos
    amigos.push(nombreAmigo);
    // Se llama a la funcion y se le envia los siguientes parametros
    // Esta funcion agregara el nombre a la lista en la pagina
    asignarTextoLista('listaAmigos', `${nombreAmigo}`);
    // Se limpia el input para que el usuario pueda agregar otro nombre
    input.value = '';
}

// Funcion para sortear amigos
function sortearAmigo() {
    // Validación para asegurarse de que hay al menos dos amigos en la lista
    if (amigos.length < 2) {
        return alert("Necesitas al menos dos amigos para sortear");
    }

    // Limpiar resultados anteriores
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    //Copiar el array de amigos para no modificar el original
    const amigosCopia = [...amigos];

    // Mezclar el array de amigos para que el sorteo sea aleatorio
    for (let i = amigosCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]]
    }

    // Seleccionar un amigo secreto aleatorio
    const amigoSecreto = amigosCopia[Math.floor(Math.random() * amigosCopia.length)];

    // Mostrar el resultado en la lista de resultados
    asignarTextoLista('resultado', `Tu amigo secreto es: ${amigoSecreto}`);

}