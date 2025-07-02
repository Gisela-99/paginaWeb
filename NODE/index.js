import express from "express";
import cors from "cors";
//import { db } from './db.js';


const port = process.env.PORT || 3000;
const app = express();

// Configurar Express
app.use(express.json());
app.use(cors());


//PARA CONSULTAR LOS DATOS
app.get("/", (req, res) => {
  // Esto es para insertar en la base de datos de XAMPP- recordar en que tienes que crear la base de datos con sus respectivas ¿casillas?
  //  db.query('INSERT INTO invitado(nombre) VALUES(:param1)', {
  //   replacements: { param1: 'Juan' },
  //   type: db.QueryTypes.INSERT
  // })

  //const{name,age}=req.query
  const name = req.query.name || 'Gisela';
  const age= req.query.age || '26';

  res.send("Registro insertado " + name + ' - '+age)
});
// http://localhost:3000/?name=Josefina&age=39  --> esto es lo que tenemos que poner en el postman del GET

//OTRA FORMA DE ENVIAR PARAMETROS

app.get("/url12/:id", (req, res) => {
  const {id}= req.params;
  res.send("Registro insertado " + id)
});

// http://localhost:3000/url12/:id 

app.get("/create", (req, res)=> {
   const {nombre} = req.query;
   if (!nombre) {
     return res.status(400).send("❌ Falta el parámetro 'nombre'");
   }

   res.send('Paciente ' + nombre)
})


app.post("/misinvitados", (req, res) => {
  const {nombre}= req.body
  res.send("Invitadoooos " + nombre)
});

 app.listen(port, () => {   
    console.log(`listening on http://localhost:${port}`);
    console.log(`hudfiwerñfhrewiu`)
 });

