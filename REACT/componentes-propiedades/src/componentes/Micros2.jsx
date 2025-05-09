import React from 'react'

function Micros2({micro}) {
  console.log(micro)
  return (
    <div>
      <p>El micrordenador {micro.nombre}tiene {micro.memoria} Kb de Ram</p>
    </div>
  )
}

export default Micros2;