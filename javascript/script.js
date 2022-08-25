let carrito = []
let lista = document.getElementById("milista")

renderizarProductos()

localStorage.getItem("carrito")!=null ?(JSON.parse(localStorage.getItem("carrito")).forEach((producto)=>{agregarAlCarrito(producto)})):""
    
function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML += `<li class="col-md-4 list-group-item">
            <h5>${producto.nombre}</h5>
            <img src=${producto.foto} width="300" height="250">
            <h5>$ ${producto.precio}</h5>
            <button class='btn btn-info' id='btn${producto.id}'>Agregar al Carrito</button>
        </li>`
    }

    productos.forEach((producto) => {
        //evento para cada boton         
        let btnAgregarAlCarrito = document.getElementById(`btn${producto.id}`)
        btnAgregarAlCarrito.addEventListener("click", function () {
            agregarAlCarrito(producto)
            swal({
                title: "Agregaste un producto al carrito!",
                text: `${producto.nombre}`,
                icon: "success",
        
                buttons: ["cerrar", "Ir al carrito"],
            }).then((irACarrito) => {
        
                if (irACarrito) {
                    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
                    const modalToggle = document.getElementById('toggleMyModal')
                    myModal.show(modalToggle)
        
                }
            })
        })
    })

}

function calculcarPrecioFinalCarrito() {
    let totalCarritoCompra = 0
    carrito.forEach((producto) => {
        totalCarritoCompra += producto.precioFinal
    })
    return totalCarritoCompra
}

function dibujarPrecioFinal() {
    document.getElementById("tablafoot").innerHTML = `
        <tfoot>
            <tr>
                <td> 
                    Precio Final:
                </td>
    
                <td>
                    ${calculcarPrecioFinalCarrito()}
                </td>
    
            </tr>
        </tfoot>
        
        `
        if(carrito.length == 0){
            document.getElementById("tablafoot").innerHTML = `Comienza a comprar`
            document.querySelector("#modal-foot").innerHTML = `Carrito Vacio`
            document.getElementById("tablaPrincipal").innerHTML=""
        
        }
        else if(carrito!=0){
            document.querySelector("#modal-foot").innerHTML = `
            <div>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Finalizar compra</button>
    
            </div>
            `
        document.getElementById("tablaPrincipal").innerHTML=`  
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total</th>
            </tr>     
        `     
        }    
}

    if(carrito.length == 0){
    
        document.querySelector("#modal-foot").innerHTML = `Comience a comprar`

    }

function agregarAlCarrito(producto) {

    carrito.forEach((el) => {
        if (el.id == producto.id) {
            swal({
                title: "Ya agregaste este producto al carrito!",
                text: `${producto.nombre}`,
                icon: "warning",
                buttons: ["cerrar", "Ir al carrito"],
            }).then((irACarrito) => {

                if (irACarrito) {
                    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
                    const modalToggle = document.getElementById('toggleMyModal')
                    myModal.show(modalToggle)

                }
            })
            reset
        }
    })
    
    carrito.push(producto)

    producto.cantidad = 1

    document.getElementById("tablabody").innerHTML += `
        <tr id="fila${producto.id}">
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td><input type="number" id="cantidad-producto-${producto.id}" value = "${producto.cantidad}"min="1" max="1000" style="width: 50px"></input></td>
            <td id="valorActual${producto.id}">${producto.precio}</td>
            <td><button id="eliminar-producto-${producto.id}" type="button" class="btn btn-outline-danger">Eliminar</button></td>             
        </tr>
    `

    producto.precioFinal = producto.precio * producto.cantidad
    
    dibujarPrecioFinal()

    carrito.forEach((producto) => {
        let valorInput = document.getElementById(`cantidad-producto-${producto.id}`)
        valorInput.addEventListener("change", () => {
            producto.cantidad = valorInput.value
            let nuevoPrecio = producto.precio * valorInput.value
            producto.precioFinal = nuevoPrecio
            document.getElementById(`valorActual${producto.id}`).innerHTML = `
        <td id="cantidad-producto-${producto.id}">${nuevoPrecio}</td>
    `
            dibujarPrecioFinal()

        })
    })

    carrito.forEach((producto) => {
        let btnEliminarProducto = document.getElementById(`eliminar-producto-${producto.id}`)
        btnEliminarProducto.addEventListener("click", () => {
            eliminarProducto(producto)
            dibujarPrecioFinal()

        })
    })

    localStorage.setItem("carrito", JSON.stringify(carrito))

}

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})

function eliminarProducto(producto) {
    let productoAconservar = carrito.filter((productoActual) => productoActual.id != producto.id)
    carrito.length = 0
    document.getElementById(`fila${producto.id}`).innerHTML = ""
    productoAconservar.forEach((productoAgregar) => carrito.push(productoAgregar))
    carrito.length == 0 ? (document.getElementById("tablabody").innerHTML = ``):''
    localStorage.setItem("carrito", JSON.stringify(carrito))
}