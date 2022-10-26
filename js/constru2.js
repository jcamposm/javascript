//Recargar:
document.addEventListener("DOMContentLoaded", () => {
    verHamburguesa();
    verExtras();
    recargaLocalStorage();
    seccionTotal.innerHTML = `<h2>$${calcularTotal(carrito) + calcularTotal2(pedido2)}</h2>`
    });
    
// Declaracion de variables :
let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];
let pedido2 = JSON.parse(localStorage.getItem("Extras")) || [];

const seccionIngredientes = document.querySelector("#seccionIngredientes");
const seccionHamburguesa = document.querySelector("#seccionHamburguesa");
const seccionExtras = document.querySelector("#seccionExtras");
const seccionMuestraextras = document.querySelector("#seccionMuestraextras");
const seccionTotal = document.querySelector("#total")

// Templates
const templateIngredientes = document.querySelector("#Ingredientes");
const templateHamburguesas = document.querySelector("#Hamburguesa");
const templateExtras = document.querySelector("#Extras");
const templateMuestraextras = document.querySelector("#Muestraextras");
const fragment = document.createDocumentFragment();


/* Constructor de Ingredientes y cargamos el array de Ingredientes */
class Ingrediente {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const Ingredientes = []

fetch("js/ingredientes.json")
.then ((respuesta) => respuesta.json())
.then ((data) => {
    data.forEach((ingrediente) =>{ 
        Ingredientes.push(ingrediente)
    })
    
})
console.log(Ingredientes)

/*const Ingredientes = [
    new Ingrediente(1, "Hamburguesa", 1000, "imagenes/construburger_carne.png"),
    new Ingrediente(2, "Hamburguesa de Soya", 1200, "imagenes/construburger_soya.png"),
    new Ingrediente(3, "Lechuga", 700, "imagenes/construburger_lechuga.png"),
    new Ingrediente(4, "Tomate", 900, "imagenes/construburger_tomate.png"),
    new Ingrediente(5, "Cebolla", 500, "imagenes/construburger_cebolla.png"),
    new Ingrediente(6, "Pepinillo", 800, "imagenes/construburger_pepinillos.png"),
    new Ingrediente(7, "Queso", 700, "imagenes/construburger_queso.png"),
    new Ingrediente(8, "Tocino", 1200, "imagenes/construburger_tocino.png"),
    new Ingrediente(9, "Champiñones", 1200, "imagenes/construburger_champinones.png"),
]*/


/* Constructor de Extras */
class Extra{
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}

/*const Extras = [
    new Extra(10, "Ketchup", 100, "imagenes/construburger_ketchup.png"),
    new Extra(11, "Mayonesa", 100, "imagenes/construburger_mayo.png"),
    new Extra(12, "Mostaza", 100, "imagenes/construburger_mostaza.png"),
    new Extra(13, "Papas y Bebida", 1990, "imagenes/construburger_combo.png"),
];*/

const Extras = []

fetch("js/extras.json")
.then ((respuesta) => respuesta.json())
.then ((data) => {
    data.forEach((extra) =>{ 
        Extras.push(extra)
    })
    
})

console.log(Extras)
//const allProducts = [...Ingredientes, ... Extras]
//console.log(allProducts)

/* Creamos la interaccion de los click con los botones */

document.addEventListener("click", (evento) => {

// Capturamos ID del Ingrediente el cual desean agregar a la hamburguesa
    evento.target.matches(".my-1 button") && insertarHamburguesa(evento);
    
// Ingrediente que desean eliminar por ID
    evento.target.matches(".list-group-item .botoncito") && botoneliminar(evento);

// Extras del combo capturados por ID
    evento.target.matches(".my-2 button") && insertarExtras(evento);

// Ingrediente que desean eliminar por ID

    evento.target.matches(".list-group-item .botoncito2") && eliminarextras(evento);

});


// Lista de Ingredientes
fetch("js/ingredientes.json")
.then ((respuesta) => respuesta.json())
.then ((Ingredientes) => {
Ingredientes.forEach((comida) => {
    const clone = templateIngredientes.content.cloneNode(true);
    contenido = `${comida.nombre} $${comida.precio} `;
    clone.querySelector(".btn-primary").textContent = contenido;
    clone.querySelector("button").dataset.id = comida.id;
    fragment.appendChild(clone);
})
seccionIngredientes.appendChild(fragment);
})

// PINTAMOS el template de la Hamburguesa
const verHamburguesa = () => {
    seccionHamburguesa.textContent = "";
    carrito.forEach(({imagen, id} ) => {
    const clone = templateHamburguesas.content.cloneNode(true);
    clone.querySelector("#img-id").src = imagen;
    clone.querySelector(".botoncito").dataset.id = id;
    fragment.appendChild(clone);
    });
    seccionHamburguesa.appendChild(fragment);
};

// FUNCION AGREGAR Hamburguesa
const insertarHamburguesa = (evento) => {
const eventoId = Number(evento.target.dataset.id);
const prod = Ingredientes.find((item) => item.id === eventoId)
    carrito.push(
        new Ingrediente(
            prod.id,
            prod.nombre,
            prod.precio,
            prod.imagen,
            (prod.cantidad = 1)
            )
        );
    verHamburguesa();
    recargaLocalStorage();
    seccionTotal.innerHTML = `<h2>$${calcularTotal(carrito) + calcularTotal2(pedido2)}</h2>`
};

// Eliminar hamburguesada
const botoneliminar = (evento) => {
    const eventoId = Number(evento.target.dataset.id);
    const buscar = carrito.findIndex(ingred=>ingred.id === eventoId);
    quitar(buscar);

    console.log(carrito);
    verHamburguesa();
    recargaLocalStorage();
    seccionTotal.innerHTML = `<h2>$${calcularTotal(carrito) + calcularTotal2(pedido2)}</h2>`

};

// quitar hamburguesada

const quitar =( index )=>{
        carrito.splice(index, 1);
};

// Dibujamos la lista de Extras
fetch("js/extras.json")
.then ((respuesta) => respuesta.json())
.then ((Extras) => {
Extras.forEach(({id, nombre, precio}) => {
    const clone = templateExtras.content.cloneNode(true);
    contenido = `${nombre} $${precio} `;
    clone.querySelector(".btn-secondary").textContent = contenido;
    clone.querySelector("button").dataset.id = id;
    fragment.appendChild(clone);
});
seccionExtras.appendChild(fragment);
})
// Pintamos el template de los Extras
const verExtras = () => {
    seccionMuestraextras.textContent = "";
    pedido2.forEach(({id, nombre, imagen, cantidad} ) => {
    const clone = templateMuestraextras.content.cloneNode(true);
    clone.querySelector("#img-id").src = imagen;
    clone.querySelector(".botoncito2").dataset.id = id;
    clone.querySelector(".badge").textContent = cantidad;
    clone.querySelector(".nombre-extra").textContent = nombre;
    fragment.appendChild(clone);
    });
    seccionMuestraextras.appendChild(fragment);
};

// FUNCION agregar Extra
const insertarExtras = (evento) => {
    //console.log(evento.target.dataset);
const eventoId = Number(evento.target.dataset.id);
    // console.log("esto devuelve", eventoId);
const prod = Extras.find((item) => item.id === eventoId);
const buscarCoincidencia = pedido2.findIndex((item) => item.id === eventoId);
    //console.log(buscarCoincidencia);
buscarCoincidencia === -1 ? pedido2.push( new Extra( prod.id, prod.nombre, prod.precio, prod.imagen, (prod.cantidad = 1))) : pedido2[buscarCoincidencia].cantidad++;
verExtras();
recargaLocalStorage();
seccionTotal.innerHTML = `<h2>$${calcularTotal(carrito) + calcularTotal2(pedido2)}</h2>`

};

/// quitar Extra

const eliminarextras = (evento) => {
    const eventoId = Number(evento.target.dataset.id);
    pedido2 = pedido2.filter((item) => {
        if (item.id === eventoId) {
            if (item.cantidad > 0) {
            item.cantidad--;
            if (item.cantidad === 0) return;
            return item;
            }
        } else {
            return item;
        }
        });
    //const buscar = pedido2.findIndex(x=>x.id === eventoId);
    console.log(pedido2);
    verExtras();
    recargaLocalStorage();
    seccionTotal.innerHTML = `<h2>$${calcularTotal(carrito) + calcularTotal2(pedido2)}</h2>`
};

/// quitar extras

const quitarextras =( index )=>{
    pedido2.splice(index, 1);
};

//FUNCIÓN PARA CALCULAR TOTAL DEL PEDIDO
function calcularTotal(carrito){
    let total1 = carrito.reduce((acumulador, pedido)=> {
        return acumulador + pedido.precio
    },0)
    return total1}

    calcularTotal(carrito)
    calcularTotal2(pedido2)

    //FUNCIÓN PARA CALCULAR EXTRAS
function calcularTotal2(pedido2){
    let total2 = pedido2.reduce((acumulador, pedido)=> {
        return acumulador + pedido.precio*pedido.cantidad
    },0)

    return total2}


//Json&Local
function recargaLocalStorage(){
    localStorage.setItem("Carrito",JSON.stringify(carrito))
    localStorage.setItem("Extras",JSON.stringify(pedido2))
}


//sweet Alert
const pagando = document.querySelector("#pagar .btn-danger")
pagando.addEventListener("click", () => {
    
    swal({
    title: "¿Estas seguro que deseas pagar?",
    text: "Confirma para redirigir al botón de pago!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((irPagar) => {
    if (irPagar && carrito.length >= 1) {
      swal("¡Esperamos que  disfrutes tu pedido! ", {
        icon: "success", buttons: false, timer: 2000,});
        setTimeout(()=>{redirigir()}, 2000)
    } else {
      swal("¡Debes agregar algún ingrediente a tu pedido!");
    }
  }); 
})


function redirigir(){
    window.location.href="./pago.html"
}