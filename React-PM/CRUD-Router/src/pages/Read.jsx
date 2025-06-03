import { useState, useEffect } from 'react';
import { getItems } from '../services/api'; // Asegúrate que la ruta esté bien

const Read = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setPeople(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Leer lista de invitados</h2>
      <ul>
        {people.length === 0 ? (
          <li>No hay personas registradas.</li>
        ) : (
          people.map((person) => (
            <p>
              {person.name} 
            </p>
          ))
        )}
      </ul>
    </div>
  );
};

export default Read;
