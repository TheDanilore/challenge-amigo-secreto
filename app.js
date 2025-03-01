

function asignarTextoElemento(elemento, texto) {
    const lista = document.getElementById(elemento);
    //Se crea un nuevo elemento li
    const nuevoAmigo = document.createElement('li');
    //Se le da el valor o nombre que tendra el li
    nuevoAmigo.textContent = texto;

    //Se agrega el nuevo amigo a la lista (li con el valor)
    lista.appendChild(nuevoAmigo);
    return;
}


function agregarAmigo(){
    //Se obtiene el nombre que se escribio en el input
    const input = document.getElementById('amigo');
    //Se le asigna el nombre en string a la variable nombreAmigo
    const nombreAmigo = input.value.trim();

    asignarTextoElemento('listaAmigos', `${nombreAmigo}`);
    //Se limpia el input
    input.value = '';
}