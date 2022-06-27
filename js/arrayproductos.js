function listarProductos() {
    console.table(productos)
} 

function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
}


function listarProductos() {
    
    productos.forEach( (producto)=> { 
        console.log(producto.nombre)
    });
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
        
        let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado) 
        }
}
      
function filtrarProductos() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado)
        }
}

function existeProducto() {
    let aBuscar = prompt("Ingrese el código del producto a buscar:")
    let resultado = productos.some((producto)=> producto.id === parseInt(aBuscar))
        if (resultado) {
            console.log("El producto existe.")
        } else {
            console.error("No se encontró el producto.")
        }
}

function proyectarIncremento(porc) {
    
    let proyeccion = productos.map((producto)=> {
            return {
                id: producto.id,
                nombre: producto.nombre,
                importe: producto.importe,
                proyeccion: (producto.importe * porc).toFixed(2)
            }
    })
    console.table(proyeccion)
}

function calcularCarrito() {
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

















