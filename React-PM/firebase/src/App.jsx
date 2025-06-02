import { useState } from "react"
import {createPerson} from './services/api';

function App() {
  const [name,setName]=useState();

  const handleCreate =()=>{
  createPerson({name})
  }
  
  return (
    <>
    <input type="text"  onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleCreate}>Create</button>
    </>
  )
}

export default App
