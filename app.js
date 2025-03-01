
//Funcion para asignar un li con valor a una lista
function asignarTextoLista(elemento, texto) {
    const lista = document.getElementById(elemento);
    //Se crea un nuevo elemento li
    const nuevoAmigo = document.createElement('li');
    //Se le da el valor o nombre que tendra el li
    nuevoAmigo.textContent = texto;

    //Se agrega el nuevo amigo a la lista (li con el valor)
    lista.appendChild(nuevoAmigo);
    return;
}

//Funcion para agregar un nombre de un amigo a la lista
function agregarAmigo(){
    //Se obtiene el nombre que se escribio en el input
    const input = document.getElementById('amigo');

    //Se le asigna el nombre en string a la variable nombreAmigo
    const nombreAmigo = input.value.trim();

    if(nombreAmigo === ''){
        return alert("Debes ingresar un nombre")
    }
    
    asignarTextoLista('listaAmigos', `${nombreAmigo}`);
    //Se limpia el input
    input.value = '';
}

//Funcion para sortear amigos
function sortearAmigo(){
    alert('Sorteando amigos...')
}