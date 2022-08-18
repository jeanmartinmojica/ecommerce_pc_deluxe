class Producto{
    constructor(id, foto, nombre, precio){
        this.id = id
        this.foto = foto
        this.nombre = nombre
        this.precio = precio
    }
}

const productos =[]

function cargarProductos(){
    productos.push(new Producto(1, 'assets/Teclados/Alnilam.jpg', "ANILAM MECANICO", 100))
    productos.push(new Producto(2, 'assets/Teclados/Mintaka.jpg', "MINTAKA MECANICO", 150))
    productos.push(new Producto(3, 'assets/Teclados/Pulsar.jpg', "PULSAR TKL", 90))
    productos.push(new Producto(4, 'assets/Teclados/Quasar_RGB.jpg',"QUASAR RGB TKL", 170))
    productos.push(new Producto(5, 'assets/Audifonos/Arkan.jpg', "ARKAN USB", 140))
    productos.push(new Producto(6, 'assets/Audifonos/Arkan.jpg' , "GEMINI TRRS 3.5MM", 80))
    productos.push(new Producto(7, 'assets/Audifonos/Gemini.jpg', "GEMINI TRRS 3.5MM", 75))
    productos.push(new Producto(8, 'assets/Audifonos/Singularity.jpg', "SINGULARITY USB", 145))
}
cargarProductos()
