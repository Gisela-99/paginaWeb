import { useParams } from 'react-router-dom';
import { deleteItem, updateItem, getItems } from '../services/api';
import { useEffect, useState } from 'react';

const Pacientes = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [fecha, setFecha] = useState('');

  const queryData = async () => {
    const data = await getItems();
    const paciente = data.find(p => String(p.id) === String(id));
    if (paciente) {
      setName(paciente.name);
      setSurName(paciente.surName);
      setFecha(paciente.fecha);
    }
  };

  useEffect(() => {
    queryData();
  }, [id]);

  const deletePaciente = async () => {
    await deleteItem(id);
    // Aquí puedes redirigir o mostrar mensaje
  };

  const updatePaciente = async () => {
    await updateItem(id, { name, surName, fecha });
    // Aquí puedes mostrar mensaje de éxito o recargar datos
  };

  return (
    <div>
      <h1>Paciente #{id}</h1>
      
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
      </div>
      
      <div>
        <input
          type="text"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
          placeholder="Apellido"
        />
      </div>
      
      <div>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <button onClick={deletePaciente}>Eliminar</button>
      <button onClick={updatePaciente}>Actualizar</button>
    </div>
  );
};

export default Pacientes;
