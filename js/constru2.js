// Declaracion de variables :
let carrito = [];
let pedido2 = [];
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
    constructor(id, nombre, precio, imagen, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }
}

const Ingredientes = [
    new Ingrediente(1, "Hamburguesa", 1000, "imagenes/construburger_carne.png"),
    new Ingrediente(2, "Hamburguesa de Soya", 1200, "imagenes/construburger_soya.png"),
    new Ingrediente(3, "Lechuga", 700, "imagenes/construburger_lechuga.png"),
    new Ingrediente(4, "Tomate", 900, "imagenes/construburger_tomate.png"),
    new Ingrediente(5, "Cebolla", 500, "imagenes/construburger_cebolla.png"),
    new Ingrediente(6, "Pepinillo", 800, "imagenes/construburger_pepinillos.png"),
    new Ingrediente(7, "Queso", 700, "imagenes/construburger_queso.png"),
    new Ingrediente(8, "Tocino", 1200, "imagenes/construburger_tocino.png"),
    new Ingrediente(9, "Champiñones", 1200, "imagenes/construburger_champinones.png"),
];

/* Constructor de Extras */
class Extra{
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const Extras = [
    new Extra(10, "Ketchup", 100, "imagenes/construburger_ketchup.png"),
    new Extra(11, "Mayoneza", 100, "imagenes/construburger_mayo.png"),
    new Extra(12, "Mostaza", 100, "imagenes/construburger_mostaza.png"),
    new Extra(13, "Papas y Bebida", 1990, "imagenes/construburger_combo.png"),
];


/* Creamos la interaccion de los click con los botones */

document.addEventListener("click", (evento) => {
// console.log(evento.target.matches(".card button"));
// Capturamos ID del Ingrediente el cual desean agregar a la hamburguesa
    if (evento.target.matches(".my-1 button")) {
    insertarHamburguesa(evento);
    seccionTotal.innerHTML = `<h3>Total a pagar $${calcularTotal(carrito) + calcularTotal2(pedido2)}</h3>`
    }

// Ingrediente que desean eliminar por ID

    if (evento.target.matches(".list-group-item .botoncito")) {
        botoneliminar(evento);
        seccionTotal.innerHTML = `<h3>Total a pagar $${calcularTotal(carrito) + calcularTotal2(pedido2)}</h3>`
    }

// Ingrediente que desean sumarle cantidad capturado por ID

    if (evento.target.matches(".list-group-item .btn-success")) {
        botonSumar(evento);
        seccionTotal.innerHTML = `<h3>Total a pagar $${calcularTotal(carrito) + calcularTotal2(pedido2)}</h3>`
    }

// Extras del combo capturados por ID
    if (evento.target.matches(".my-2 button")) {
        insertarExtras(evento);
        seccionTotal.innerHTML = `<h3>Total a pagar $${calcularTotal(carrito) + calcularTotal2(pedido2)}</h3>`
    }

// Ingrediente que desean eliminar por ID

    if (evento.target.matches(".list-group-item .botoncito2")) {
        eliminarextras(evento);
        seccionTotal.innerHTML = `<h3>Total a pagar $${calcularTotal(carrito) + calcularTotal2(pedido2)}</h3>`
    }

});

// Lista de Ingredientes

Ingredientes.forEach((item) => {
    const clone = templateIngredientes.content.cloneNode(true);
    clone.querySelector(".card-header").textContent = item.nombre;
    clone.querySelector("#precio").textContent = item.precio;
    clone.querySelector("button").dataset.id = item.id;
    fragment.appendChild(clone);
});
seccionIngredientes.appendChild(fragment);

// PINTAMOS el template de la Hamburguesa
const verHamburguesa = () => {
    seccionHamburguesa.textContent = "";
    carrito.forEach((item) => {
    const clone = templateHamburguesas.content.cloneNode(true);
    clone.querySelector("#img-id").src = item.imagen;
    clone.querySelector(".botoncito").dataset.id = item.id;
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
};

// Eliminar hamburguesada
const botoneliminar = (evento) => {
    const eventoId = Number(evento.target.dataset.id);
    const buscar = carrito.findIndex(ingred=>ingred.id === eventoId);
    quitar(buscar);

    console.log(carrito);
    verHamburguesa();
};

// quitar hamburguesada

const quitar =( index )=>{
        carrito.splice(index, 1);
};

// Dibujamos la lista de Extras

Extras.forEach((item) => {
    const clone = templateExtras.content.cloneNode(true);
    clone.querySelector(".extra-header").textContent = item.nombre;
    clone.querySelector("#precioextra").textContent = item.precio;
    clone.querySelector("button").dataset.id = item.id;
    fragment.appendChild(clone);
});
seccionExtras.appendChild(fragment);

// PINTAMOS el template de los Extras
const verExtras = () => {
    seccionMuestraextras.textContent = "";
    pedido2.forEach((item) => {
    const clone = templateMuestraextras.content.cloneNode(true);
    clone.querySelector("#img-id").src = item.imagen;
    clone.querySelector(".botoncito2").dataset.id = item.id;

    fragment.appendChild(clone);
    });
    seccionMuestraextras.appendChild(fragment);
};

// FUNCION agregar Extra
const insertarExtras = (evento) => {
    //console.log(evento.target.dataset);
const eventoId = Number(evento.target.dataset.id);
    // console.log("esto devuelve", eventoId);
const prod = Extras.find((item) => item.id === eventoId)
    pedido2.push(
        new Extra(
            prod.id,
            prod.nombre,
            prod.precio,
            prod.imagen,
            (prod.cantidad = 1)
            )
        );
    verExtras();
};

/// quitar Extra

const eliminarextras = (evento) => {
    const eventoId = Number(evento.target.dataset.id);
    const buscar = pedido2.findIndex(x=>x.id === eventoId);
    quitarextras (buscar);
    console.log(pedido2);
    verExtras();
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
        return acumulador + pedido.precio
    },0)
    return total2}
