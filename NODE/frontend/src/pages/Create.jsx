import { useState } from 'react';

const Create = () => {
  const [nombre, setNombre] = useState('');

  const handleCreate = async () => {
    if (!nombre.trim()) return alert('El nombre es obligatorio');

    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre }),
      });

      if (response.ok) {
        alert('Registro insertado correctamente');
        setNombre('');
      } else {
        alert('Error al insertar registro');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión');
    }
  };

  return (
    <div>
      <h1>Crear Registro</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleCreate}>Crear</button>
    </div>
  );
};

export default Create;
