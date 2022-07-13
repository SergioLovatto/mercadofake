const url1 = 'https://fakestoreapi.com/products/1'
console.log(url1)
const listday = document.getElementById('listform')

window.addEventListener('load', async (event) => {
    event.preventDefault ()
    // const ul = document.getElementById('list-day')
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
            
    // const ul = document.createElement('ul')
     const datos = JSON.parse(localStorage.getItem('datos'))
    
     const getdata = () => {
        
                 return fetch(url2)
                 .then (Response => Response.json())
                 .then(datos => localStorage.setItem('datos', JSON.stringify(datos.flatMap(item => ({name: item.title, price: item.price, image: item.image})))))
              
             }
             console.log(datos)
         getdata()
   
    //     if (datos.length){
    //         datos.map( item => {
    //             const li = document.createElement('li')
    //             const img = document.createElement('img')
    //             const span = document.createElement('span')
    //             span1.appendChild(document.createTextNode(finaldata.name))
    //             span2.appendChild(document.createTextNode(finaldata.price +"$"))
    //             img.src= datos.imagen
    //             li.appendChild(img)
    //             li.appendChild(span)
    //             ul.appendChild(li)
    //             datos.appendChild(ul)
    //         })
    //     }

})