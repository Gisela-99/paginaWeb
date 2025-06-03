import { useState, useEffect } from "react";
import { createPerson, getItems, updateItem, deleteItem } from './services/api';

function App() {
  const [name, setName] = useState('');
  const [manualId, setManualId] = useState(''); // nuevo estado para el input de ID
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error("Error al obtener los ítems:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async () => {
    try {
      await createPerson({ name });
      setName('');
      setManualId('');
      await fetchItems();
    } catch (error) {
      console.error("Error al crear la persona:", error);
    }
  };

  const updatePeople = async () => {
    const idToUse = manualId || selectedId;
    if (!idToUse) {
      alert("Debes ingresar un ID o seleccionar una persona.");
      return;
    }

    try {
      await updateItem(idToUse, { name });
      setName('');
      setManualId('');
      setSelectedId(null);
      await fetchItems();
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  const deletePeople = async () => {
    const idToUse = manualId || selectedId;
    if (!idToUse) {
      alert("Debes ingresar un ID o seleccionar una persona.");
      return;
    }

    if (!window.confirm("¿Estás seguro de que quieres borrar esta persona?")) return;

    try {
      await deleteItem(idToUse);
      setName('');
      setManualId('');
      setSelectedId(null);
      await fetchItems();
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={manualId}
        onChange={(e) => setManualId(e.target.value)}
        placeholder="ID"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={handleCreate}>Crear</button>
      <button onClick={updatePeople}>Modificar</button>
      <button onClick={deletePeople}>Borrar</button>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              cursor: "pointer",
              fontWeight: selectedId === item.id ? "bold" : "normal",
              color: selectedId === item.id ? "blue" : "black",
            }}
            onClick={() => {
              setSelectedId(item.id);
              setManualId(item.id);
              setName(item.name);
            }}
          >
            Id:{item.id} - {item.name}  
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
/*** REACT ROUTER
  import { useState, useEffect } from "react";
import { createPerson, getItems, deleteItem, updateItem } from './services/api';

function App() {
  const [name, setName] = useState('');
  const [id, setID] = useState('');
  const [people, setPeople] = useState([]);

  // Leer los datos desde Firestore
  const queryData = () => {
    getItems().then(data => setPeople(data));
  };

  useEffect(() => {
    queryData();
  }, []);

  const handleCreate = async () => {
    await createPerson({ name });
    setName('');
    queryData();
  };

  const handleRemove = async () => {
    await deleteItem(id);
    setID('');
    queryData();
  };

  const handleUpdate = async () => {
    await updateItem(id, { name });
    setName('');
    setID('');
    queryData();
  };

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => setID(e.target.value)}
        placeholder="ID"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={handleCreate}>Crear</button>
      <button onClick={handleUpdate}>Modificar</button>
      <button onClick={handleRemove}>Borrar</button>

      <div>
        <p><strong>ID - Nombre</strong></p>
        {people.map((p) => (
          <p key={p.id}>{p.id} - {p.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;

*/









/*import { useState, useEffect } from "react";
import { createPerson, getItems, updateItem, deleteItem } from './services/api';

function App() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error("Error al obtener los ítems:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async () => {
    try {
      await createPerson({ name });
      setName('');
      await fetchItems();
    } catch (error) {
      console.error("Error al crear la persona:", error);
    }
  };

  const updatePeople = async () => {
    if (!selectedId) {
      alert("Selecciona una persona para modificar.");
      return;
    }
    try {
      await updateItem(selectedId, { name });
      setName('');
      setSelectedId(null);
      await fetchItems();
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  const deletePeople = async () => {
    if (!selectedId) {
      alert("Selecciona una persona para borrar.");
      return;
    }
    try {
      await deleteItem(selectedId);
      setName('');
      setSelectedId(null);
      await fetchItems();
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <button onClick={handleCreate}>Crear</button>
      <button onClick={updatePeople}>Modificar</button>
      <button onClick={deletePeople}>Borrar</button>

      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              cursor: "pointer",
              fontWeight: selectedId === item.id ? "bold" : "normal",
              color: selectedId === item.id ? "blue" : "black",
            }}
            onClick={() => {
              setSelectedId(item.id);
              setName(item.name); // precargar nombre al seleccionar
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;*/
