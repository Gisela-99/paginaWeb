import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Pacientes = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [fecha, setFecha] = useState('');

  const fetchPaciente = async () => {
    const res = await fetch(`http://localhost:3001/paciente/${id}`);
    if (res.ok) {
      const paciente = await res.json();
      setName(paciente.name);
      setSurName(paciente.surName);
      setFecha(paciente.fecha);
    } else {
      alert('Paciente no encontrado');
    }
  };

  useEffect(() => {
    fetchPaciente();
  }, [id]);

  const deletePaciente = async () => {
    const res = await fetch(`http://localhost:3001/paciente/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      alert('Paciente eliminado');
    
    } else {
      alert('Error al eliminar');
    }
  };

  const updatePaciente = async () => {
    const res = await fetch(`http://localhost:3001/paciente/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, surName, fecha }),
    });
    if (res.ok) {
      alert('Paciente actualizado');
      fetchPaciente(); 
    } else {
      alert('Error al actualizar');
    }
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
