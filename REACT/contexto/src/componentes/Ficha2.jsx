import React from 'react';
import imagen from '../assets/img/oric_atmos.png';
import {useContext} from 'react';
import {Contexto} from '../contexto/Contexto';

function Ficha2() {
  const color = useContext(Contexto)
  return (
    <>
      <div className='fichas' style={{backgroundColor:color}} >
        <h2>Ficha2</h2>
      <img src={imagen} alt="oric_atmos" />
      <h3>Commodore Amiga</h3>
      </div>
    </>
  );
}

export default Ficha2;
