import { useState, useEffect } from "react";
import { createPerson, getItems } from "../services/api";

const Create = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);

  const queryData = async () => {
    const data = await getItems();
    setPeople(data);
  };

  useEffect(() => {
    queryData();
  }, []);

  const handleCreate = async () => {
    if (!name.trim()) return;
    await createPerson({ name });
    setName('');
    //alert('Persona creada con éxito');
    queryData(); // actualiza la lista después de crear
  };

  return (
    <div>
      <h2>Crear persona</h2>
      <input
        type="text"
        placeholder="Nombre de la persona"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Crear</button>

      <h3>Lista de personas:</h3>
      <div>
        {people.map(p => (
          <p key={p.id}>
            {p.id} - {p.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Create;
