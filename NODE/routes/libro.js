// routes/libro.js
import express from 'express';
const router = express.Router();

// Ruta: /libro/alta
router.get('/alta', (req, res) => {
  console.log("Formulario alta");     
  res.send('Formulario alta');        
});

export default router;
