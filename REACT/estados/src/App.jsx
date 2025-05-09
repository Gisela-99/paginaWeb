import { useState } from 'react';
import './App.css';


function App() {
  //let nombre = "Gisela"
  let[nombre, setNombre] = useState('Mia Wallance')

  let [contador, setContador] = useState(0)
  //Actividad 2
  let [numero1,setNumero1]=useState(0)
  let [numero2,setNumero2]=useState(0)
  let [resultado,setResultado]=useState(0)
  //Actividad 3
  const peliculas = [
    {
    titulo: 'Apocalypto',
    direccion: 'Mel Gibson'
    },
    {
    titulo: 'La Milla Verde',
    direccion: 'Frank Darabont'
    },
    {
    titulo: 'El resplandor',
    direccion: 'Stanley Kubrick'
    }
  ]

    const [titulo, setTitulo]=useState('...')
    const [direccion, setDireccion]=useState('...')
    const [contadorPelis, setContadorPelis] =useState(0)
    const [mensaje, setMensaje]=useState()
    //let contadorPeliculas = 0
    function imformacionPelicula2(){
      setTitulo(peliculas[contadorPelis].titulo)
      setDireccion(peliculas[contadorPelis].direccion)
      
      //controlar el final de la array
      if(contadorPelis < peliculas.length -1){
          setContadorPelis(contadorPelis + 1)
      }else{
        setContadorPelis(0)
      }
      
      //++contadorPeliculas
    }

     function imformacionPelicula1(){
      let texto = <h3>la direccion de la pelicula <span className='titulo'>{peliculas[contadorPelis].titulo}</span> correponde a <span className='direccion'>{peliculas[contadorPelis].direccion}</span></h3>

      setMensaje(texto)
       if(contadorPelis < peliculas.length -1){
          setContadorPelis(contadorPelis + 1)
      }else{
        setContadorPelis(0)
      }
    }

    function sumar(){
      setResultado(numero1 + numero2)
    }
    function cambiarNombre(){
    setNombre('Vicent Vega')//es una función
    
      //nombre = "Vicent Vega"
      console.log(nombre)
    }
  console.log(nombre)
  return (
    <div className='App'>

      <h1>Me llamo {nombre}</h1>
        {/*<button onClick={cambiarNombre}>Cambiar</button>*/}
      <button onClick={()=>{setNombre('Vicent Vega')}}>Cambiar</button>
      <hr />
      <h2>{contador}</h2>
      <button onClick={()=>{setContador(++contador)}}>Aumentar</button>
      <button onClick={()=>{setContador(contador-1)}}>Decrementar</button>
      <button onClick={()=>{setContador(0)}}>Restablecer</button>

      <hr />
      <h2>Actividad 2</h2>
      <div className='caja'>
        <input type='number' value={numero1} onChange={(e)=>{setNumero1(Number(e.target.value))}}/>+
        <input type='number' value={numero2} onChange={(e)=>{setNumero2(Number(e.target.value))}}/>=
        <input type='number' value={resultado} disabled/>
        <button onClick={sumar}>Sumar</button>
      </div>

      <hr />
      <h2>Actividad 3</h2>
      <div className='caja2'>
        <button onClick={imformacionPelicula1}>Ver siguiente</button>
        <div>{mensaje}</div>
      </div>
      
      <div className='caja2'>
        <button onClick={imformacionPelicula2}>Ver siguiente</button>
        <h3>la direccion de la pelicula <span className='titulo'>{titulo}</span> correponde a <span className='direccion'>{direccion}</span></h3>
      </div>

    </div>
  );
}

export default App;

//rafce -rfce
/**
  Los estados
  como se llama y la función/el método que cambiaremos

  LOS PROBLEMAS UNARIOS = ++ -- asignar el valor que ya tiene , tiene que estar en la parte izquierda y no en la derecha ya que no se asigna en la primera pero si en la segunda

 */
