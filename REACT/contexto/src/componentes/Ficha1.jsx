import React, { useContext } from 'react';
import imagen from '../assets/img/commodore_amiga.png';
import { Contexto } from '../contexto/Contexto';

function Ficha1() {
  const color = useContext(Contexto)
  return (
    <>
      <div className='fichas' style={{backgroundColor:color}}>
        <h2>Ficha1</h2>
      <img src={imagen} alt="Commodore Amiga" />
      <h3>Commodore Amiga</h3>
      </div>
    </>
  );
}

export default Ficha1;
