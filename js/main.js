class Producto{
    constructor(nombre, precio, isbn, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
        this.stock = stock;
    }
}

const productos = []

productos.push(new Producto("TECLADO ANILAM MECANICO", 60, "98741236", 100))
productos.push(new Producto("TECLADO MINTAKA MECANICO", 50, "23698514", 150))
productos.push(new Producto("TECLADO PULSAR TKL", 100, "87562545", 90))
productos.push(new Producto("TECLADO QUASAR RGB TKL", 90, "65328974", 170))
productos.push(new Producto("AUDIFONOS ARKAN USB", 70, "56328745", 140))
productos.push(new Producto("AUDIFONOS GEMINI TRRS 3.5MM", 40, "56328745", 80))
productos.push(new Producto("AUDIFONOS GRAVITY INALAMBRICO", 150, "56328745", 75))
productos.push(new Producto("AUDIFONOS SINGULARITY USB", 100, "56328745", 145))
productos.push(new Producto("MOUSE AQUILA AIR ALAMBRICO", 28, "56328745", 150))
productos.push(new Producto("MOUSE AQUILA FLY INALAMBRICO", 35, "56328745", 130))
productos.push(new Producto("MOUSE AURORA ALAMBRICO ", 20, "56328745", 114))
productos.push(new Producto("MOUSE HERO ALAMBRICO", 15, "56328745", 140))


function filtrarProductos(){

    const productosFiltrados = prompt("ingrese el producto a buscar").toUpperCase()
    const encontrarProducto = productos.filter((el)=>el.nombre.includes(productosFiltrados))
    console.table(encontrarProducto)
}
//filtrarProductos()

function ComprarYDescontarStock(){
    
    const productoSeleccionado = prompt("Ingresa el producto que desea comprar").toUpperCase()
    const productoSeleccionadoCant = parseInt(prompt("Ingresa la cantidad de elementos que quieres comprar"))
    
    function comprarProducto (){
        let iva = 1.19
        const filtrarProducto = productos.filter((el)=>el.nombre == productoSeleccionado)
        console.log(filtrarProducto)
        let {precio} = filtrarProducto[0];
        const precioFinal = precio * productoSeleccionadoCant * iva
        console.log("El precio final de la compra es "+precioFinal)
    }
    comprarProducto ()

    function descontarStock(){
        const confirmarCompra = confirm("Deseas confirmar la compra?")
        
        for(let i = 0; i < productos.length; i++){
            if(productoSeleccionado == productos[i].nombre){
                if(confirmarCompra == true){
                    let {stock} = productos[i];
                    let nuevoStock = stock - productoSeleccionadoCant
                    console.log("El stock disponible para este producto ahora es de "+nuevoStock+" unidades")
    
                }
            }
        }  
    }
    descontarStock()
}
ComprarYDescontarStock()