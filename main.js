// ===================================
// Productos del supermercado
// ===================================

const productos = [
    { id: 1, nombre: "Manzanas", precio: 2.50, categoria: "Frutas" },
    { id: 2, nombre: "Leche", precio: 3.20, categoria: "Lácteos" },
    { id: 3, nombre: "Pan", precio: 1.80, categoria: "Panadería" },
    { id: 4, nombre: "Queso", precio: 5.00, categoria: "Lácteos" },
    { id: 5, nombre: "Tomates", precio: 2.00, categoria: "Verduras" },
    { id: 6, nombre: "Huevos", precio: 4.50, categoria: "Lácteos" },
    { id: 7, nombre: "Arroz", precio: 3.00, categoria: "Granos" },
    { id: 8, nombre: "Aceite", precio: 6.00, categoria: "Aceites" }
];

// Arreglo carrito
let carrito = [];

// Referencias HTML
const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito-items");
const totalElement = document.getElementById("total");

// ===================================
// Mostrar productos
// ===================================

function mostrarProductos() {

    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {

        // Crear elemento HTML
        const tarjeta = document.createElement("div");

        // Agregar clase CSS
        tarjeta.classList.add("producto-card");

        // Agregar contenido HTML
        tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>

        <p>${producto.categoria}</p>

        <div class="producto-precio">
        $${producto.precio.toFixed(2)}
        </div>

        <button onclick="agregarAlCarrito(${producto.id})">
        Agregar al carrito
        </button>
        `;

        // Insertar en la página
        contenedorProductos.appendChild(tarjeta);
    });
}

// ===================================
// Agregar producto
// ===================================

function agregarAlCarrito(id) {

    const producto = productos.find(
        producto => producto.id === id
    );

    carrito.push(producto);

    actualizarCarrito();
}

// ===================================
// Eliminar producto
// ===================================

function eliminarDelCarrito(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();
}

// ===================================
// Actualizar carrito
// ===================================

function actualizarCarrito() {

    if (carrito.length === 0) {

        contenedorCarrito.innerHTML =
        "<p>El carrito está vacío.</p>";

        totalElement.textContent = "0.00";

        return;
    }

    contenedorCarrito.innerHTML = "";

    carrito.forEach((producto, indice) => {

        const item = document.createElement("div");

        item.classList.add("carrito-item");

        item.innerHTML = `
        <div class="carrito-item-info">
        <strong>${producto.nombre}</strong><br>
        ${producto.categoria}
        </div>

        <div>
        $${producto.precio.toFixed(2)}

        <button
        class="btn-eliminar"
        onclick="eliminarDelCarrito(${indice})">
        X
        </button>
        </div>
        `;

        contenedorCarrito.appendChild(item);
    });

    calcularTotal();
}

// ===================================
// Calcular total
// ===================================

function calcularTotal() {

    const total = carrito.reduce(
        (acumulador, producto) =>
        acumulador + producto.precio,
        0
    );

    totalElement.textContent = total.toFixed(2);
}

// ===================================
// Inicializar sistema
// ===================================

mostrarProductos();

function filtrarCategoria(categoria) {

    const productosFiltrados = productos.filter(
        producto => producto.categoria === categoria
    );

    mostrarProductosFiltrados(productosFiltrados);
}

function mostrarProductosFiltrados(lista) {

    contenedorProductos.innerHTML = "";

    lista.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("producto-card");

        tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.categoria}</p>
        <div class="producto-precio">
        $${producto.precio.toFixed(2)}
        </div>

        <button onclick="agregarAlCarrito(${producto.id})">
        Agregar al carrito
        </button>
        `;

        contenedorProductos.appendChild(tarjeta);
    });
}