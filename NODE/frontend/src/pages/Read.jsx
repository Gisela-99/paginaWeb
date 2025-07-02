import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [people, setPeople] = useState([]);

  const queryData = async () => {
    try {
      const res = await fetch('http://localhost:3000/pacientes');
      if (!res.ok) throw new Error('Error al obtener pacientes');
      const data = await res.json();
      setPeople(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    queryData();
  }, []);

  return (
    <div>
      <h1>Leer lista de pacientes</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.id}>
              <td>
                <Link to={`/pacientes/${p.id}`}>{p.id}</Link>
              </td>
              <td>{p.name}</td>
              <td>{p.surName}</td>
              <td>{p.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
