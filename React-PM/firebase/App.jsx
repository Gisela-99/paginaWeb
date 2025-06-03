import { useState, useEffect } from 'react';
import { savePersonName, getPersons, deletePerson, updatePerson, batchOperation } from './app/api';

function App() {

    const [personName, setPersonName] = useState(null);
    const [personId, setPersonId] = useState(null);
    const [persons, setPersons] = useState(null);

    const savePerson = async () => {
        await savePersonName({ personName });
        getPersonsData()
    }

    const removePerson = async () => {
        await deletePerson(personId);
        getPersonsData();
    }
    useEffect(() => {
        getPersonsData();
    }, [])

    const getPersonsData = async () => {
        const p = await getPersons();
        setPersons(p);
    }

    const updatePersonData = async () => {
        await updatePerson(personId, personName);
        getPersonsData();
    }

    const batchUpdate = async () => {
        batchOperation(personId);
        getPersonsData();
    }


    console.log(persons)
    return (
        <div className="App" style={{ textAlign: 'left' }}>
            <input type="text" onChange={e => setPersonId(e.target.value)} placeholder="personId" />
            <input type="text" onChange={e => setPersonName(e.target.value)} placeholder="personName" />


            <button onClick={savePerson}>Salvar</button>
            <button onClick={removePerson}>Borrar</button>
            <button onClick={updatePersonData}>Update</button>

            <button onClick={batchUpdate}>Batch Update</button>

            {
                persons && persons.map(p => <p key={p.id}>{p.id} - {p.name}</p>)
            }

        </div>
    );
}

export default App;
