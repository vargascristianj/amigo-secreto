//El objetivo del juego es permitir el ingreso de nombres de amigos y luego seleccionar de forma aleatoria a uno, que corresponde a su amigo secreto.

let amigos = []; //array que contendrá los nombres ingresados
let posicionRandom = 0;

//Función para almacenar cada nombre de amigo ingresado
function agregarAmigo() {
    let nombreingresado = document.getElementById('amigo').value;
    if(nombreingresado.trim().length != 0){ //No se permite el ingreso de nombres vacíos o espacios solamente
        console.log('Nombre ingresado: ' +nombreingresado);
        amigos.push(nombreingresado);
        console.log('Arreglo: ' +amigos);
    }else{
        alert('Por favor, ingrese un nombre');
        console.log('Ingreso vacío');        
    }
    limpiarCaja	();
    listarAmigos(amigos);
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
    console.log(`Nombre #${i}: ${arreglo[i]}`);
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
    console.log("Amigo secreto: "+amigos[posicionRandom]);
    asignarTextoElemento('listaAmigos',"");
    asignarTextoElemento('resultado',`Tu amigo secreto es ${amigos[posicionRandom]}`) 
    document.getElementById('button-sortear').setAttribute('disabled', 'true');
    } else {
        alert("Aún no se han ingresado amigos");
    }
    return;
}

function asignarTextoElemento(elementoId, texto) {
    let elementoHTML = document.getElementById(elementoId);
    elementoHTML.innerHTML = texto;    
}

/* PENDIENTES: 
1. Posicionar el cursor en el cuadro de texto luego de ingresar un nombre. Ver si es posible con "Enter".
2. Hacer responsivo el HTML.
3. Cambiar el color al deshabilitar el botón.
4. Poner botón reiniciar. Se muestra o habilita luego del ingreso de un nombre o de un sorteo.
5. Validar una cantidad mínima de 2 nombres para permitir el sorteo.
6. Quitar console logs.
*/