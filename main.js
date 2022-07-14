const url1 = 'https://fakestoreapi.com/products/1'
console.log(url1)
const listday = document.getElementById('listform')

window.addEventListener('load', async (event) => {
    event.preventDefault ()
    
    let data = []
    let finaldata = []
    let respuesta = await fetch(url1)
    let names = await respuesta.json()
    data = await names
    finaldata = {name : data.title, imagen : data.image, price: data.price}
   
    const img = document.getElementById('image')
    const span1 = document.getElementById('span1')
    const span2 = document.getElementById('span2')   
    img.src= finaldata.imagen
    span1.appendChild(document.createTextNode(finaldata.name))
    span2.appendChild(document.createTextNode(finaldata.price +"$"))
   

    const url2 = 'https://fakestoreapi.com/products'
            
    
    const datos = JSON.parse(localStorage.getItem('datos'))
    
     const getdata = () => {
        
                 return fetch(url2)
                 .then (Response => Response.json())
                 .then(datos => localStorage.setItem('datos', JSON.stringify(datos.flatMap(item => ({name: item.title, price: item.price, image: item.image})))))
              
             }
             console.log(datos)
         getdata()
   
              const contenedor =  document.getElementById('productos')
              let x = 0
              function crearproducto(producto) {
              
                
                 const items = document.createElement('li')
                 const imagen = document.createElement('img')
                 const title = document.createElement('h3')
                 const price = document.createElement('span')
                 imagen.src = datos[x].image 
                title.textContent = datos[x].name
                price.textContent = datos[x].price
                 items.appendChild(imagen)
                 items.appendChild(title)
                 items.appendChild(price)
                 contenedor.appendChild(items)
                x=x+1
            
              }
              datos.forEach(crearproducto)

      


})