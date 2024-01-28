
/*let titulo = document.querySelector("h1")
titulo.innerHTML = "Juego del numero secreto"

let parrafo = document.querySelector("p")
parrafo.innerHTML = "Indica un número del 1 al 10"
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (eLemento , texto){
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    //el parse int nos garantiza que lo que ingreseel usuario es un numero
    //lo que nos da lugar a poner los ===, ya que se volveria una comparación entre números
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    // lo de abajo es para mostrar en la consola el tipo de datos de numero secreto
    //console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario);
    //lo de abajo es para mostrar en la consola el tipo de datos de numero de usuario
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario==numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ("p", `Felicidades, acertaste en ${intentos} ${(intentos == 1)? "vez":"veces"}`);
        //esto es para quitar el disabled/deshabilitado del boton de nuevo juego, ello siempre 
        //que el usuario haya terminado su juego
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ("p", "El número secreto es menor.");
        } else {
            asignarTextoElemento ("p", "El número secreto es mayor.");
        }
        intentos ++;
        limpiarcaja();
    }
    return;
}
//creamos la funciona para limpiar la caja
function limpiarcaja () {
    document.querySelector("#valorUsuario").value ="";
}

//CREAMOS la funcion para los mensajes iniciales, para la funcionar de reiniciar el juego
function condicionesIniciales (){
    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);   
    numeroSecreto = generaNumeroSecreto();
    intentos = 1
}

//construimos la funciona para reinicarel juego
function reiniciaJuego () {
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de inicio de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el nro de intentos
    condicionesIniciales();
    //deshabilitar el boton de "nuevo juego", xk solo se habilita una vez se temrina el primer juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")
}

condicionesIniciales();

/* en el caso de funciones, no importa la posicion de la
 declaracion de los elemento o variables caso de elemento y texto */

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya mostramos todos los numeros, 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los numeros posibles.")
    } else {
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}




