import { useEffect, useState } from 'react';
import  './Create.css'
import { getItems,createPerson } from '../services/api';

const Create = () => {
  const[name, setName]= useState('')
  const[surName, setSurName]=useState('')
  const [fecha, setFecha] = useState('');
  const[people, setPeople]=useState([])

  const queryData = async () =>{
    const data = await getItems()
    setPeople(data)
  }

  useEffect(()=>{
    queryData()
  }, [])

  const handleCreate = async () => {
    if(!name.trim() || !surName.trim() || !fecha) return
    await createPerson ({name, surName, fecha})
    setName('')
    setSurName('')
    setFecha('')
    queryData()
  }
  return (
    <div>
     <h1>Crear Hospitalizados</h1>
     <div>
      <input 
        type="text" 
        placeholder="Pacient Name"
        value={name}
        onChange={(e)=> setName (e.target.value)}
      />
     </div>
     <div>
      <input 
        type="text"
        placeholder="Pacient SurName"
        value={surName}
        onChange={(e)=>setSurName(e.target.value)}
      />
     </div>
     <div>
      <input 
        type="date" 
        name="fecha" 
        id="fecha" 
        value={fecha}
        onChange={(e)=>setFecha(e.target.value)}
      />
     </div>
     <button onClick={handleCreate}>Crear</button>

     <div>
      {people.map(p=> (
        <p key={p.id}>{p.name}-{p.surName}-{p.fecha}</p>
      ))}
     </div>
    </div>
  );
};

export default Create;
