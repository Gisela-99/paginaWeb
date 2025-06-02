import { useState,useEffect } from "react"
import {createPerson,getItems} from './services/api';

function App() {
  const [name,setName]=useState();
  const [items, setItems] = useState([]); 

  const handleCreate =()=>{
  createPerson({name})
  }
  
   useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data); // Guardamos los ítems en el estado
      } catch (error) {
        console.error("Error al obtener los ítems:", error);
      }
    };

    fetchItems();
  }, []);
  return (
    <>
    <input type="text"  onChange={(e) => setName(e.target.value)}/>
    <button onClick={handleCreate}>Create</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
