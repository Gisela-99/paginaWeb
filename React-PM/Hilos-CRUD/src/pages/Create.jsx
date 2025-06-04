import { useState } from 'react'
import { createHilo } from '../services/api'
import './index.css'


function Create() {
  const [name, setName] = useState('')
  const handleCreate = async () =>{
    await createHilo ({name})
    setName
  }

  return (
    <div>
      <div className='input'>
        <input 
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
      </div>
      <button onClick={handleCreate}>Crear Hilo</button>

    </div>
  )
}

export default Create