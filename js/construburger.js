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
break
case 2:
carrito.push(pedido2)
break
case 3:
carrito.push(pedido3)
break
case 4:
carrito.push(pedido4)
break
case 5:
carrito.push(pedido5)
break
case 6:
carrito.push(pedido6)
break
case 7:
carrito.push(pedido7)
break
case 8:
carrito.push(pedido8)
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

//FUNCIÓN PARA CALCULAR TOTAL DEL PEDIDO
function calcularTotal(carrito){
    let total = carrito.reduce((acumulador, pedido)=> {
        return acumulador + pedido.precio
    },0)
    return total
}