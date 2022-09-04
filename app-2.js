
/*if (condicion){
    //bloque verdadero
} else {
//bloque falso
}

*/

/*OPERADORES LÓGICOS

let nombre = "coder"
== Es igual a ... (no evalua el tipo de dato, si es string o numero etc)
=== es estrictamente igual a...
>Mayor a...
>= Mayor o igual a....
<Menor a...
<= Menor o igual a...
||OR --> una u otra condición
&& and --> una y otra condición
!== distinto


const puntaje = "2000";

if (puntaje === 2000){
console.log ("es igual")
} else {
    console.log("No es igual")
}


const dinero = 600;
const totalAPagar = 500;

if (dinero > totalAPagar){
    console.log ("Podemos Pagar")
} else { 
    console.log("Fondos insuficientes")
}

//ELSE IF= SON 3 VARIABLES

const dinero = 300
const totalAPagar = 800
const tarjeta = true

if (dinero > totalAPagar) {
    console.log ("Podemos Pagar")
} else if(tarjeta){ 
    console.log("puedo abonar porque tengo tarjeta")
} else {
    console.log ("fondos insuficientes")
}

const efectivo = 300
const credito = 400
const disponible = efectivo + credito
const totalAPagar = 600

if (efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log ("podemos comprar")
} else {
    console.log ("fondos insuficientes")10
}
let precio = prompt("Ingrese el precio del producto: ")

if (precio >= 100) {
    alert("El producto es muy costoso")
} else if(precio >= 50){60
    alert("el producto es caro")
} 
else {
    alert("El precio del producto es accesible")
}
let nombreAlumno = prompt("ingrese el nombre del alumno: ")
let apellidoAlumno = prompt("ingrese el apellido del alumno: ")

if (nombreAlumno !== " " && apellidoAlumno !== " ") {
    alert("Nombre del alumno: " + nombreAlumno + " apellido: " + apellidoAlumno)
    
} else {
    alert("no ingreso datos")
}
*/
/*

tabla de verdad operador &&
X | Y | X&&Y
t | t | t
t | f | f
f | t | f
f | f | f

tabla de verdad del operador ||or

X | Y | X||Y
t | t | t
t | f | t
f | t | t
f | f | f
*/

//1 TIBURON = 10 TORTUGAS = 20 CANGREJOS

let cangrejos = prompt("ingrese numero de cangrejos: ")
let tiburones = prompt("ingrese numero de tiburones: ")
let tortugas = prompt("ingrese numero de tortugas: ")

if ((cangrejos > tiburones && cangrejos == tiburones * 0,05) || (cangrejos > tortugas && cangrejos == tortugas * 2)) {
alert("cangrejos ganan")

} else if((tortugas > tiburones && tortugas == tiburones * 0,1 ) || (tortugas > cangrejos && tortugas == cangrejos * 0,5)) {
alert("tortugas ganan")

} else { 
    alert ("tiburones ganan") 
}