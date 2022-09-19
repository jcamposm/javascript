/*Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@jcamposm 
digiacomomariano
/
coderJavaScript
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
coderJavaScript/ProyectoFinal/PreEntrega2/entrega.js /
@digiacomomariano
digiacomomariano Agregado de mas productos
Latest commit aed118f 12 hours ago
 History
 1 contributor
153 lines (133 sloc)  4.74 KB*/

// Declaracion de variables :
let carrito = [];
const seccionProductos = document.querySelector("#seccionProductos");
const seccionCarrito = document.querySelector("#seccionCarrito");
// Templates
const templateProductos = document.querySelector("#templateProductos");
const templateCarritos = document.querySelector("#templateCarritos");
const fragment = document.createDocumentFragment();

/* Creamos el constructor de productos y cargamos el array de productos */
class Producto {
  // se construye plantilla de productos
  constructor(id, codigo, descripcion, categoria, precio, cantidad) {
    this.id = id;
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const productos = [
  // se cargas prodcutos manualmente al array
  new Producto(1, 125, "R6-R12 TRASERO ORIGINAL", "RENAULT", 13.38),
  new Producto(2, 126, "R12 DELANTERO", "RENAULT", 21.96),
  new Producto(3, 127, "R21 DELANTERO", "RENAULT", 21.96),
  new Producto(4, 203, "TIRA 3 AGUJEROS D1500", "VW", 24.82),
  new Producto(5, 204, "D1500 REFORMA", "VW", 20.35),
  new Producto(6, 205, "GACEL", "VW", 7.81),
  new Producto(7, 356, "FALCON CORTO", "FORD", 20.68),
  new Producto(8, 357, "FALCON LARGO", "FORD", 20.68),
  new Producto(9, 358, "SIERRA", "FORD", 17.12),
  new Producto(10, 430, "COLUMNA 404 7mm", "PEUGEOT", 44.79),
  new Producto(11, 438, "COLUMNA 504 8mm", "PEUGEOT", 44.79),
  new Producto(12, 429, "504 ARO", "PEUGEOT", 19.26),
  new Producto(13, 525, "125-1500 GANCHO CORTO", "FIAT", 15.52),
  new Producto(14, 576, "128 GANCHO LARGO", "FIAT", 16.51),
  new Producto(15, 517, "125-1500 TRASERO CORTO", "FIAT", 12.38),
];

/* Finaliza Constructor y Array de Productos */

/* Creamos la interaccion de los click con los botones */

document.addEventListener("click", (evento) => {
  // console.log(evento.target.matches(".card button"));

  // Capturamos ID del producto el cual desean agregar al carro
if (evento.target.matches(".card button")) {
    insertarCarrito(evento);
}

  // Capturamos ID del Producto que desean restar Cantidad o eliminar

if (evento.target.matches(".list-group-item .btn-danger")) {
    botonRestar(evento);
}

  // Capturamos el ID del Producto que desean sumarle cantidad

if (evento.target.matches(".list-group-item .btn-success")) {
    botonSumar(evento);
}
});

// Dibujamos la lista de productos

productos.forEach((item) => {
  const clone = templateProductos.content.cloneNode(true);
  clone.querySelector(".card-header").textContent = item.descripcion;
  clone.querySelector("#cod").textContent = item.codigo;
  clone.querySelector("#cat").textContent = item.categoria;
  clone.querySelector("#precio").textContent = item.precio;
  clone.querySelector("button").dataset.id = item.id;

  fragment.appendChild(clone);
});
seccionProductos.appendChild(fragment);

// PINTAMOS EL TEMPLATE DEL CARRITO
const verCarrito = () => {
  seccionCarrito.textContent = "";

  carrito.forEach((item) => {
    const clone = templateCarritos.content.cloneNode(true);
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector(".text-white .lead").textContent = item.descripcion;
    clone.querySelector("div .lead span").textContent =
      item.cantidad * item.precio;
    clone.querySelector(".btn-success").dataset.id = item.id;
    clone.querySelector(".btn-danger").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  seccionCarrito.appendChild(fragment);
};

// FUNCION AGREGAR CARRITO
const insertarCarrito = (evento) => {
  //console.log(evento.target.dataset);
  const eventoId = Number(evento.target.dataset.id);
  // console.log("esto devuelve", eventoId);
  const prod = productos.find((item) => item.id === eventoId);
  const buscarCoincidencia = carrito.findIndex((item) => item.id === eventoId);
  //console.log(buscarCoincidencia);
  if (buscarCoincidencia === -1) {
    // prod.cantidad = 1;
    carrito.push(
      new Producto(
        prod.id,
        prod.codigo,
        prod.descripcion,
        prod.categoria,
        prod.precio,
        (prod.cantidad = 1)
      )
    );
  } else {
    carrito[buscarCoincidencia].cantidad++;
  }
  console.log(carrito);
  verCarrito();
};

// BOTON SUMAR

const botonSumar = (evento) => {
  const eventoId = Number(evento.target.dataset.id);
  carrito = carrito.map((item) => {
    if (item.id === eventoId) {
      item.cantidad++;
    }
    return item;
  });
  verCarrito();
};

const botonRestar = (evento) => {
  const eventoId = Number(evento.target.dataset.id);
  carrito = carrito.filter((item) => {
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
  verCarrito();
};
/*Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have no unread notifications*/