import React from 'react';
import imagen from '../assets/img/oric_atmos.png';

function Ficha2() {
  return (
    <>
      <div className='fichas'>
        <h2>Ficha2</h2>
      <img src={imagen} alt="oric_atmos" />
      <h3>Commodore Amiga</h3>
      </div>
    </>
  );
}

export default Ficha2;
