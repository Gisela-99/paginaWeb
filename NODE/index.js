// console.log("hola Mundo")
import { Sequelize } from 'sequelize';
import express from "express";
import cors from "cors";
import libroRouter from './routes/libro.js'

const port = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use(cors());
app.use ('/libro', libroRouter)

const database = 'test';
const user = 'root';
const password = '';
const host = 'localhost';

const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: 'mysql',
    logging: console.log,
});

app.get("/", async (req, res) => {
  sequelize.query('INSERT INTO tabla (nombre) VALUES (:param1)',{
    replacements:{param1: 3}, 
    type:sequelize.QueryTypes.INSERT
  })
    res.send('Registro insertado')
   //res.json("Inicio");
 });


// app.get('/book', (req, res)=>{
//   console.log("Llegamos a libro");
//   res.send("Llegamos a libro");
// })

// app.get('/book/:id', (req, res) => {
//     const bookId = req.params.id; // Captura la id del libro
//     res.send(`Id del libro ${bookId}`);
// });

// app.get('/user-init/:usuario', (req, res) => {
//   const usuario = req.params.usuario; // Captura el valor dinámico
//   console.log(`hola, como estás ${usuario} ?`);     // Muestra la traza en la terminal
//   res.send(`hola ${usuario}`);        // Muestra la respuesta en el navegador
// });


 app.listen(port, () => {   console.log(`listening on port ${port}`);
   console.log(`hudfiwerñfhrewiu`)
 });