const express = require("express");
const app = express()
const puerto = 8020 
app.use(express.json())

const products = [{
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }]
  
  app.get("/", (req, res) => {
    res.send({msg:"Aqui tienes los productos",results:products});
  });

  app.post("/",(req,res)=>{
    const newProduct ={
        id: products.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,        
    }
    if(!req.body.nombre || !req.body.precio){
        res.status(400).send({msg:"Please fill all inputs"})
    }else{
        products.push(newProduct)
        res.status(201).send({products})
    }
})
  
app.put("/id/:id",(req,res)=>{
    const found = products.some(product => product.id == req.params.id)//para saber si existe lo que busco
    if(found){
        products.forEach(product=>{
            if(product.id == req.params.id){
                product.nombre = req.body.nombre ? req.body.nombre : product.nombre,
                product.precio = req.body.precio ? req.body.precio : product.precio
                res.send(product)
            }
        })
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`Member with id ${req.params.id} not found`})
    }
})





app.delete("/id/:id",(req,res)=>{
    const found = products.some(product => product.id == req.params.id)
    if(found){     
     res.send(products.filter(product => product.id != req.params.id))
    }else{
        //si el miembro que buscamos no existe devovlemos un notfound
        res.status(404).send({msg:`Product with id ${req.params.id} not found`})
    }
})
let filteredProducts = []
const filterProducts = products.precio.filter(product => product > 50 && product < 250);
filteredProducts.push(product);




app.listen(puerto, () => {

    console.log(`Servidor levantado en el puerto ${puerto}`);
    
    });
    