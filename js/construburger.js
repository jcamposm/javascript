//ESTRUCTURA DE PRODUCTO
class pedido
{
    constructor(id, ingrediente, precio){
        this.id = id;
        this.ingrediente = ingrediente;
        this.precio = precio
    }
}
//PRODUCTOS
const pedido1 = new pedido (1, "Hamburguesa", 1000)
const pedido2 = new pedido (2, "Hamburguesa de Soya", 1200)
const pedido3 = new pedido (3, "Lechuga", 700)
const pedido4 = new pedido (4, "Tomate", 900)
const pedido5 = new pedido (5, "Cebolla", 500)
const pedido6 = new pedido (6, "Pepinillo", 800)
const pedido7 = new pedido (7, "Queso", 700)
const pedido8 = new pedido (8, "Tocino", 1200)

//ARRAY DE CARRITO
const carrito = [];

//BIENVENIDA

if (confirm(`Bienvenido a ConstruBurger, ¿Le gustaría armar su pedido? \n`)) {
    agregar()
} else {
    alert("¡Hasta pronto!");
}

//FUNCION DE PEDIDO
function agregar(){
let productoId = Number(prompt (`¿Qué desea añadir a su Hamburguesa?:
1. Hamburguesa
2. Hamburguesa de soya
3. Lechuga
4. Tomate
5. Cebolla
6. Pepinillo
7. Queso
8. Tocino
9. TERMINAR PEDIDO`))

//BUCLE DE PEDIDO DENTRO DE FUNCIÓN
while (productoId != 9) {
//CONDICIONES PARA AGREGAR AL CARRITO
switch (productoId){
case 1:
carrito.push(pedido1)
let ingrediente = document.querySelector("#construburger")
let carne = document.createElement("div")
carne.innerHTML = "<div class='ingrediente carne animate_animated animatefadeInUp animate_delay-1s'>carne</div>"
ingrediente.appendChild(carne)
//document.body.append(carne)
break
case 2:
carrito.push(pedido2)
let ingrediente2 = document.querySelector("#construburger")
let soya = document.createElement("div")
soya.innerHTML = "<div class='ingrediente soya animate_animated animatefadeInUp animate_delay-1s'>soya</div>"
ingrediente2.appendChild(soya)
break
case 3:
carrito.push(pedido3)
let ingrediente3 = document.querySelector("#construburger")
let lechuga = document.createElement("div")
lechuga.innerHTML = "<div class='ingrediente lechuga animate_animated animatefadeInUp animate_delay-1s'>lechuga</div>"
ingrediente3.appendChild(lechuga)
break
case 4:
carrito.push(pedido4)
let ingrediente4 = document.querySelector("#construburger")
let tomate = document.createElement("div")
tomate.innerHTML = "<div class='ingrediente tomate animate_animated animatefadeInUp animate_delay-1s'>tomate</div>"
ingrediente4.appendChild(tomate)
break
case 5:
carrito.push(pedido5)
let ingrediente5 = document.querySelector("#construburger")
let cebolla = document.createElement("div")
cebolla.innerHTML = "<div class='ingrediente cebolla animate_animated animatefadeInUp animate_delay-1s'>cebolla</div>"
ingrediente5.appendChild(cebolla)
break
case 6:
carrito.push(pedido6)
let ingrediente6 = document.querySelector("#construburger")
let pepinillo = document.createElement("div")
pepinillo.innerHTML = "<div class='ingrediente pepinillo animate_animated animatefadeInUp animate_delay-1s'>pepinillo</div>"
ingrediente6.appendChild(pepinillo)
break
case 7:
carrito.push(pedido7)
let ingrediente7 = document.querySelector("#construburger")
let queso = document.createElement("div")
queso.innerHTML = "<div class='ingrediente queso animate_animated animatefadeInUp animate_delay-1s'>queso</div>"
ingrediente7.appendChild(queso)
break
case 8:
carrito.push(pedido8)
let ingrediente8 = document.querySelector("#construburger")
let tocino = document.createElement("div")
tocino.innerHTML = "<div class='ingrediente tocino animate_animated animatefadeInUp animate_delay-1s'>tocino</div>"
ingrediente8.appendChild(tocino)
break
default:
    alert("tu opcion es incorrecta")
    break
}

//PREGUNTA DE BUCLE
productoId = Number(prompt (`¿Qué otro ingrediente desea añadir?:
1. Hamburguesa
2. Hamburguesa de soya
3. Lechuga
4. Tomate
5. Cebolla
6. Pepinillo
7. Queso
8. Tocino
9. TERMINAR PEDIDO`))
}
//CONSOLE LOG PARA TENER UN CONTROL DEL CARRITO
console.log(carrito)
//IR A FUNCIÓN REVISAR PEDIDO
revisar()
}
//FUNCIÓN UPSALE PARA COMPRAR PAPAS Y BEBIDA
function upsale(){
    let agregarOtro = Number(prompt(`Finalizando pedido:
    1. Deseas agregar papas y bebida por $1990
    2. No agregar y finalizar pedido`))
if (agregarOtro == 1){
    calcularTotal(carrito)
        alert(`El total de su pedido es: $${calcularTotal(carrito)+1990}`)
        }
else if (agregarOtro == 2) {
        calcularTotal(carrito)
        alert(`El total de su pedido es: $${calcularTotal(carrito)}`)
        } else {
        alert("Valor inválido, vuelve a intentarlo")    
        upsale()
        }    
}
//FUNCIÓN PARA REVISAR PEDIDO
function revisar(){
    const ingredientes = carrito.map((pedido) => pedido.ingrediente)
    alert(`Su pedido es:
    ${ingredientes} por un total de $${calcularTotal(carrito)}`)
//FINALIZANDO PEDIDO
let eleccion = Number(prompt(`seleccione si desea: 
1. Agregar más ingredientes a su orden
2. Finalizar su orden`))

if (eleccion == 1) {
    agregar();
} else {
    upsale();
}}
//MOSTRAR PRECIO
//const aliados = document.querySelector("h1").textContent= "Su pedido de construburger es:";
//console.log(aliados);

const valorTotal = document.querySelector("#precio")
valorTotal.innerHTML = `<h3><center>Total a pagar $${calcularTotal(carrito)}</center></h3>`
valorTotal.appendChild(precio)

//FUNCIÓN PARA CALCULAR TOTAL DEL PEDIDO
function calcularTotal(carrito){
    let total = carrito.reduce((acumulador, pedido)=> {
        return acumulador + pedido.precio
    },0)
    return total
}