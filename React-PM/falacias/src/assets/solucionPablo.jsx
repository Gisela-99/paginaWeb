import React, { useEffect, useState } from 'react'
import dataApi from '../Componentes/Api/datos'

function solucionPablo() {
  const [falacia, setFalacia] = useState()
  const [options, setOptions] = useState()

  // Función para obtener un elemento aleatorio de un array
  const getRandomElementFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  useEffect(() => {
    // Falacia correcta
    const f = getRandomElementFromArray(dataApi)
    // Filtrar para obtener las demás opciones diferentes de la correcta
    const dataAux = dataApi.filter(d => d.type !== f.type)
    
    const f2 = getRandomElementFromArray(dataAux)
    const dataAux2 = dataAux.filter(d =>  d.type !== f.type && d.type !== f2.type)

    const f3 = getRandomElementFromArray(dataAux2)

    // Array de opciones con las tres falacias (correcta + dos incorrectas)
    const optionArray = [f.type, f2.type, f3.type]

    setFalacia(f)
    setOptions(optionArray)
  }, [])

  return (
    <div>
      {
        falacia && (
          <>
            <p>{getRandomElementFromArray(falacia.samples)}</p>
            {
              options?.map((option, idx) => <p key={idx}>{option}</p>)
            }
          </>
        )
      }
    </div>
  )
}

export default solucionPablo
