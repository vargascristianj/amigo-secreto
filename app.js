//El objetivo del juego es permitir el ingreso de nombres de amigos y luego seleccionar de forma aleatoria a uno, que corresponde a su amigo secreto.

let amigos = []; //array que contendrá los nombres ingresados
let posicionRandom = 0;

//Función para almacenar cada nombre de amigo ingresado
function agregarAmigo() {
    let nombreingresado = document.getElementById('amigo').value;
    if(nombreingresado.trim().length != 0){ //No se permite el ingreso de nombres vacíos o espacios solamente
        amigos.push(nombreingresado);
    }else{
        alert('Por favor, ingrese un nombre');
    }
    if(amigos.length >= 2){ // Valido que ingrese al menos 2 nombres para habilitar el botón sortear.
       document.getElementById('button-sortear').removeAttribute('disabled');
       document.getElementById('texto-info').style.display = 'none';
       asignarTextoElemento('texto-info',''); //Quito el texto informativo
    }
    limpiarCaja	();
    listarAmigos(amigos);
    document.getElementById('amigo').focus(); //vuelvo el cursor al cuadro de texto
}

//Función para limpiar la caja del nombre
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

//Función para listar los amigos en el HTML
function listarAmigos(arreglo) {
   asignarTextoElemento('listaAmigos',"");
   let listaNombres = "";
   for (let i = 0; i < arreglo.length; i++){
    listaNombres += `<li>${arreglo[i]}</li>`;
    asignarTextoElemento('listaAmigos', listaNombres);
   }
   return;
}

//Función para selección aleatoria de amigo
function sortearAmigo() {
    let cantidad = amigos.length;
    if(cantidad != 0){
    posicionRandom = Math.floor(Math.random()*cantidad);
    asignarTextoElemento('listaAmigos',"");
    asignarTextoElemento('resultado',`Tu amigo secreto es ${amigos[posicionRandom]}`) 
    document.getElementById('button-sortear').style.visibility = 'hidden';
    document.getElementById('button-add').setAttribute('disabled', 'true');
    document.getElementById('button-reiniciar').style.visibility = 'visible';
    } else {
        alert("Aún no se han ingresado amigos");
    }
    return;
}

//Función para modificar el texto en el HTML
function asignarTextoElemento(elementoId, texto) {
    let elementoHTML = document.getElementById(elementoId);
    elementoHTML.innerHTML = texto;    
}

//Función para establecer las variables iniciales
function setearCondicionesIniciales() {
    amigos = [];
    posicionRandom = 0;
    document.getElementById('button-add').removeAttribute('disabled');
    document.getElementById('button-sortear').style.visibility = 'visible';
    document.getElementById('button-sortear').setAttribute('disabled', 'true');
    document.getElementById('button-reiniciar').style.visibility = 'hidden';
    asignarTextoElemento('listaAmigos',"");
    asignarTextoElemento('resultado',"");
    document.getElementById('texto-info').style.display = 'block';
    asignarTextoElemento('texto-info','Info: Ingrese al menos dos amigos');
}

setearCondicionesIniciales();

/* PENDIENTES: 
2. Hacer responsivo el HTML.
*/