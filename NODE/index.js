// console.log("hola Mundo")
import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Inicio");
});

app.get('/libro', (req, res)=>{
  console.log("Llegamos a libro");
  res.send("Llegamos a libro");
})

app.get('/book/:id', (req, res) => {
    const bookId = req.params.id; // Captura la id del libro
    res.send(`Id del libro ${bookId}`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  console.log(`hudfiwerñfhrewiu`)
});