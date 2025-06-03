import {useState, useEffect} from 'react';
import {deleteItem,getItems} from '../services/api';

const Delete = () => {
  const [id,setID] = useState('')
  const [people, setPeople] = useState([])

  const queryData = () => {
    getItems().then(data => setPeople(data));
  };

  useEffect(() => {
    queryData();
  }, []);

  const handleRemove = async () => {
    await deleteItem(id);
    setID('');
    queryData();
  };
  return (
    <div>
      <h2>Eliminar persona</h2>
      <input 
        type="text"
        placeholder="Guest id"
        value={id}
        onChange={(e)=> setID(e.target.value)}
      />
      <button onClick={handleRemove}>Delete</button>
      <div>
        {people.map((p)=> (<p key={p.id}>{p.name} - {p.id} </p>))}
      </div>
    </div>
  );
};

export default Delete;