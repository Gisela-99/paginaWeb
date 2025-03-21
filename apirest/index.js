const express = require('express')
const app = express()
const port = 5000

const nombres =[
  {id:1, nombre:'joe Banana', direccion:'c/aragon 123', postal:12254, telefono:6352178},
  {id:2, nombre:'Marta Banana', direccion:'c/aragon 123',postal:12254, telefono:6352178},
  {id:3, nombre:'José Banana',direccion:'c/aragon 123',postal:12254, telefono:6352178},
]
//cargamos el soporte de Json de express
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nombre', (req, res) => {
  // res.send('Hello Gisela!')
  let nombres=["Ana", "Juan", "Pedro"];
  let nombresenMayuscula=nombres.map((nombre)=> nombre.toUpperCase());

  console.log(nombresenMayuscula);
  res.json(nombresenMayuscula)
  //res.json(nombres)
})

app.post('/datos',(req,res)=>{
  const datos=req.body
  nombres.push(datos)
  console.log(datos)
  res.json({mensaje:'datos recibidos', datos})
})

app.delete('/borrar',(req,res)=>{
  nombres.pop()
  res.json(nombres)
})


//slugs

app.delete('/datos/:id', (req,res)=>{
  const id=parseInt(req.params.id)
  datos=nombres.filter(item=>item.id !== id);
  res.json({mensaje:'Datos Recibidos', datos})
})

app.delete('/borrarNombres', (req,res)=>{
  nombres.forEach(obj=> delete obj.nombre);
  res.json(nombres)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})