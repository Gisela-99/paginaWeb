import React, { useContext } from 'react';
import imagen from '../../public/img/commodore_amiga.png';
import { Contexto } from '../contexto/Contexto';

function Ficha1() {
  const color = useContext(Contexto)
  const imagen='commodore_amiga.png'
  return (
    <>
      <div className='fichas' style={{backgroundColor:color}}>
        <h2>Ficha1</h2>
      <img src={`img/${imagen}`} alt="Commodore Amiga" />
      <h3>Commodore Amiga</h3>
      </div>
    </>
  );
}

export default Ficha1;
