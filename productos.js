const url2 = 'https://fakestoreapi.com/products'
const datos = JSON.parse(localStorage.getItem('datos'))
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
window.addEventListener('load', async (event) => {
    event.preventDefault ()
const getdata = () => {
        
    return fetch(url2)
    .then (Response => Response.json())
    .then(datos => localStorage.setItem('datos', JSON.stringify(datos.flatMap(item => ({id: item.id,name: item.title, price: item.price, image: item.image, category: item.category})))))
 
}

getdata()

 const contenedor =  document.getElementById('productos')
 let x = 0
 
 function crearproducto(producto) {
 
   
    const items = document.createElement('li')
    const imagen = document.createElement('img')
    const title = document.createElement('h3')
    const price = document.createElement('span')
    const comprar = document.createElement('button')
    items.classList = "product-item"
    items.id = datos[x].id
    imagen.src = datos[x].image 
   title.textContent = datos[x].name
   price.textContent = datos[x].price
   comprar.textContent = "Comprar"
    items.appendChild(imagen)
    items.appendChild(title)
    items.appendChild(price)
    items.appendChild(comprar)
    contenedor.appendChild(items)
   x=x+1

 }
 datos.forEach(crearproducto)
 console.log(datos)


})

