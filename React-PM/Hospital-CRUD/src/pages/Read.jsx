import {useState, useEffect} from 'react';
import {getItems} from '../services/api';
import{Link} from 'react-router-dom'

const Read = () => {
  const[people, setPeople]=useState([])
  const queryData = async () =>{
    const data = await getItems()
    setPeople(data)
  }

  useEffect(()=>{
    queryData()
  }, [])
 

  return (
    <div>
      <h1>Leer lista de invitados</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date</th>
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
