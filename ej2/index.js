const express = require("express");
const app = express()
const puerto = 8080   
app.use(express.json())


app.listen(puerto, () => {

console.log(`Servidor levantado en el puerto ${puerto}`);

});

app.get('/',(req,res)=>{
    res.send('Hola Sofia')    
    })

app.get('/productos',(req,res)=>{

res.send('listado de productos')
        
        })

app.post("/productos", (req, res) => {

            res.send("crear producto");
            
            });        
    
app.put("/productos", (req, res) => {

res.send("actualizar producto");
                
});   

app.delete("/productos", (req, res) => {

res.send("eliminar producto");
                
});           

app.get("/productos", (req, res) => {

    res.send("actualizar producto");
                    
    }); 

app.post("/productos", (req, res) => {

res.send("crear un usuario");
                        
   }); 

app.put("/productos", (req, res) => {

res.send("actualizar usuario");
                            
 });    
    
 app.delete("/productos", (req, res) => {

    res.send("borrar un usuario");
                                
     });    