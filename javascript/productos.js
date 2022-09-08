class Producto{
    constructor(id, foto, nombre, precio, precioFinal, precioFinalCOP, cantidad){
        this.id = id
        this.foto = foto
        this.nombre = nombre
        this.precio = precio
        this.precioFinal = precioFinal
        this.precioFinalCOP = precioFinalCOP
        this.cantidad = cantidad
    }
}

const productos =[]

function cargarProductos(){
    productos.push(new Producto(1, 'assets/Teclados/Dragonborn_K630.jpg', "REDRAGON DRAGONBORN K630 ", 100))
    productos.push(new Producto(2, 'assets/Teclados/Kumara_K552.jpg', "REDRAGON KUMARA K552", 120))
    productos.push(new Producto(3, 'assets/Teclados/Kumara_K552_blanco.jpg', "REDRAGON KUMARA K552", 120))
    productos.push(new Producto(5, 'assets/Audifonos/Kotion_Each_G9000.jpg', "KOTION EACH 69000", 90))
    productos.push(new Producto(6, 'assets/Audifonos/Logitech_Series_G733.jpg' , "LOGITECH SERIES 6733", 150))
    productos.push(new Producto(7, 'assets/Audifonos/Redragon_Ares.jpg', "REDRAGON ARES", 50))
}
cargarProductos()
