const url1 = 'https://fakestoreapi.com/products/1'
console.log(url1)
const listday = document.getElementById('listform')

window.addEventListener('load', async (event) => {
    event.preventDefault ()
    const ul = document.getElementById('list-day')
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
    // span.appendChild(document.createTextNode(finaldata.definition))
    // li.appendChild(span)
    //   ul.appendChild(li)
    //   listday.appendChild(ul)
    
  
   


})