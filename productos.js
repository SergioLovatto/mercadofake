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
    items.classList = datos[x].category
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
 const display = document.querySelector('#productos')
 const boton = document.getElementsByClassName('category_item')  
 const keypad = Array.from(boton)
 keypad.forEach((button) => {
  button.addEventListener('click',()=> {
  seleccion (button,display);
})
})
});

 
function seleccion (button, display) {
  switch (button.innerHTML) {
  case 'all':
    borrar(display)
    mostrartodo(display)
       
       break;
       case "men's clothing":
        borrar(display)
       hombre(display)
       break;
    case "women's clothing":
      borrar(display)
      mujer(display)
       
          break;
      case "jewelery":
        borrar(display)
        joya(display)
        break;
      case "electronics":
        borrar(display)
        electronica(display)
        break;
   }
}

 function borrar (display, button){
  const listas = document.getElementById('productos')
  while(listas.firstChild) {
  listas.removeChild(listas.firstChild)
}

 }

 function mostrartodo (display,button){
  console.log(datos)
  let x = 0
  const contenedor =  document.getElementById('productos')
  for(i=0; i< datos.length; i++){
  const items = document.createElement('li')
  const imagen = document.createElement('img')
  const title = document.createElement('h3')
  const price = document.createElement('span')
  const comprar = document.createElement('button')
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
 }
function hombre (display,button) {
  let x = 0
  let men = datos.filter(datos => datos.category === "men's clothing")
  const contenedor =  document.getElementById('productos')
  console.log(men)
  for (i = 0; i < men.length; i++) {
    const items = document.createElement('li')
    const imagen = document.createElement('img')
    const title = document.createElement('h3')
    const price = document.createElement('span')
    const comprar = document.createElement('button')
    imagen.src = men[x].image 
    title.textContent = men[x].name
   price.textContent = men[x].price
   comprar.textContent = "Comprar"
    items.appendChild(imagen)
    items.appendChild(title)
    items.appendChild(price)
    items.appendChild(comprar)
    contenedor.appendChild(items)
    x= x+1
  }
}

function mujer (display,button) {
  let x = 0
  let women = datos.filter(datos => datos.category === "women's clothing")
  const contenedor =  document.getElementById('productos')
  console.log(women)
  for (i = 0; i < women.length; i++) {
    const items = document.createElement('li')
    const imagen = document.createElement('img')
    const title = document.createElement('h3')
    const price = document.createElement('span')
    const comprar = document.createElement('button')
    imagen.src = women[x].image 
    title.textContent = women[x].name
   price.textContent = women[x].price
   comprar.textContent = "Comprar"
    items.appendChild(imagen)
    items.appendChild(title)
    items.appendChild(price)
    items.appendChild(comprar)
    contenedor.appendChild(items)
    x= x+1
  }
}

function joya (display,button) {
  let x = 0
  let joyas = datos.filter(datos => datos.category === "jewelery")
  const contenedor =  document.getElementById('productos')
  console.log(joyas)
  for (i = 0; i < joyas.length; i++) {
    const items = document.createElement('li')
    const imagen = document.createElement('img')
    const title = document.createElement('h3')
    const price = document.createElement('span')
    const comprar = document.createElement('button')
    imagen.src = joyas[x].image 
    title.textContent = joyas[x].name
   price.textContent = joyas[x].price
   comprar.textContent = "Comprar"
    items.appendChild(imagen)
    items.appendChild(title)
    items.appendChild(price)
    items.appendChild(comprar)
    contenedor.appendChild(items)
    x= x+1
  }
}

function electronica (display,button) {
  let x = 0
  let electr = datos.filter(datos => datos.category === "electronics")
  const contenedor =  document.getElementById('productos')
  console.log(electr)
  for (i = 0; i < electr.length; i++) {
    const items = document.createElement('li')
    const imagen = document.createElement('img')
    const title = document.createElement('h3')
    const price = document.createElement('span')
    const comprar = document.createElement('button')
    imagen.src = electr[x].image 
    title.textContent = electr[x].name
   price.textContent = electr[x].price
   comprar.textContent = "Comprar"
    items.appendChild(imagen)
    items.appendChild(title)
    items.appendChild(price)
    items.appendChild(comprar)
    contenedor.appendChild(items)
    x= x+1
  }
}
