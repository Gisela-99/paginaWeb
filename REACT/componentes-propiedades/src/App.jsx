import './App.css';
import Micros from './componentes/Micros.jsx'
import Micros2 from './componentes/Micros2.jsx';
import datos from './datos/micros.js'
import FichasMicros from './componentes/FichasMicros.jsx';
import { useState } from 'react';


function App() {
  console.log(datos)
  const [total, setTotal] = useState(0)
  return (
    <div className="App">

      <h1>Carga de componentes</h1>
      <Micros nombre="ZX Spectrum" memoria ="48"/>
      <Micros nombre="Oric Atmos" memoria ="64"/> 
            {/* nombres, y memoria son atributos creados, que son propiedades */}
      <Micros2 micro={{nombres:"Commodores 64", memoria:"64"}}></Micros2> 
      {/* con las llaves lo primero indicamos que se trata de un array o un objetos, el segundo es para un objeto == DESESTRUCTURACIÓN*/}
      <hr />
      <h2>Actividad 4</h2>
      <div className='app'>
        <h3>Micros Vintage</h3>
        <h2>Total:{total} €</h2>
        <div className='fichas'>
          {
          datos.map((micro,index) => {
            return <FichasMicros key={index} datos={micro} total1={setTotal}/>; //set Total es la función que se encargará
          })
                      
          }
          
          
        </div>
      </div>
      
    </div>
  );
}

export default App;
