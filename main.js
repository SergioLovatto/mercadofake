const url1 = 'https://fakestoreapi.com/products/1'

const listday = document.getElementById('listform')


            
    


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
   

   
    
     




})

