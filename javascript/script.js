let carrito=[]

let lista=document.getElementById("milista")
    
renderizarProductos()

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-md-4 list-group-item">
            <h5>${producto.nombre}</h5>
            <img src=${producto.foto} width="250" height="250">
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-info' id='btn${producto.id}'>Comprar</button>
        </li>`
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
            agregarAlCarrito(producto)
        })
    })
}

function agregarAlCarrito(producto){
    carrito.push(producto)
    
    let cantidad = 1
    
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td><input type="number" id="cantidad-producto-${producto.id}" value = "${cantidad}"min="1" max="1000" style="width: 50px;"></input></td>
            <td id="idPrueba">${producto.precio}</td>
        </tr>
    `
    swal({
        title: "Agregaste un producto al carrito!",
        text: `${producto.nombre}`,
        icon: "success",
        button: "Cerrar",
    })
}
