import { useState, useEffect } from 'react'
import falaciasData from './Componentes/Api/datos.js'
import './App.css'

function App() {
  const bloques = 3

  const [seleccionadas, setSeleccionadas] = useState([])
  const [pistasVisibles, setPistasVisibles] = useState([])
  const [correctaIndex, setCorrectaIndex] = useState(0)
  const [fraseSample, setFraseSample] = useState('')

  useEffect(() => {
    const inicial = []
    const pistasInicial = []

    for (let i = 0; i < bloques; i++) {
      const randomIndex = Math.floor(Math.random() * falaciasData.length)
      inicial.push(falaciasData[randomIndex])
      pistasInicial.push(false)
    }

    setSeleccionadas(inicial)
    setPistasVisibles(pistasInicial)

    const indexCorrecta = Math.floor(Math.random() * bloques)
    setCorrectaIndex(indexCorrecta)

    // Obtener un sample de la falacia correcta
    const falaciaCorrecta = inicial[indexCorrecta]
    const sampleCorrecto =
      falaciaCorrecta.samples[Math.floor(Math.random() * falaciaCorrecta.samples.length)]
    setFraseSample(sampleCorrecto)
  }, [])

  const cambiarFalacia = (pos) => {
    const nuevaFalacia = falaciasData[Math.floor(Math.random() * falaciasData.length)]

    setSeleccionadas((prev) => {
      const nuevo = [...prev]
      nuevo[pos] = nuevaFalacia
      return nuevo
    })

    setPistasVisibles((prev) => {
      const nuevo = [...prev]
      nuevo[pos] = false
      return nuevo
    })

    // Si cambias la correcta, se escoge nuevo sample
    if (pos === correctaIndex) {
      setCorrectaIndex(Math.floor(Math.random() * bloques))
      const nuevoSample =
        nuevaFalacia.samples[Math.floor(Math.random() * nuevaFalacia.samples.length)]
      setFraseSample(nuevoSample)
    }
  }

  const togglePista = (pos) => {
    setPistasVisibles((prev) => {
      const nuevo = [...prev]
      nuevo[pos] = !nuevo[pos]
      return nuevo
    })
  }

  return (
    <>
      <h1>Falacias</h1>

      {/* Frase principal arriba */}
      {fraseSample && (
        <div
          style={{
            backgroundColor: '#f3f3f3',
            padding: '20px',
            margin: '20px auto',
            borderRadius: '10px',
            maxWidth: '600px',
            fontStyle: 'italic',
            fontSize: '1.2rem',
          }}
        >
          {fraseSample}
        </div>
      )}

      {/* Opciones de falacia */}
      <div>
        {seleccionadas.map((falacia, idx) => {
          if (!falacia) return <div key={idx}>Cargando...</div>

          const esCorrecta = idx === correctaIndex

          return (
            <div
              key={idx}
              style={{
                marginBottom: '20px',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: esCorrecta ? '#edd4d4' : 'transparent',
                border: esCorrecta ? '2px solid #ec4a18' : '1px solid #ccc',
              }}
            >
              <button onClick={() => cambiarFalacia(idx)}>x</button>{' '}
              <strong style={{ color: esCorrecta ? '#571515' : 'inherit' }}>
                {falacia.type}
              </strong>{' '}
              <button onClick={() => togglePista(idx)}>
                {pistasVisibles[idx] ? 'Ocultar pista' : 'Mostrar pista'}
              </button>

              {pistasVisibles[idx] && (
                <p
                  style={{
                    marginTop: '8px',
                    padding: '10px',
                    backgroundColor: '#eee',
                    borderRadius: '6px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {falacia.samples[0]}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
