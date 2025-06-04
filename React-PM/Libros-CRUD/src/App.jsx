import { useEffect, useState } from 'react';
import { createLibro, getItems, deleteItem, updateItem } from './services/api';
import Tr from './componentes/Tr'
import './index.css';

function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [libros, setLibros] = useState([]);

  // Carga inicial de libros
  const queryData = async () => {
    const data = await getItems();
    setLibros(data);
  };

  useEffect(() => {
    queryData();
  }, []);

  // Crear nuevo libro
  const agregarLibro = async () => {
    if (!title.trim() || !price) return; // Validación simple
    await createLibro({ title, price });
    setTitle('');
    setPrice('');
    queryData();
  };

  // Eliminar libro
  const eliminarLibro = async (id) => {
    await deleteItem(id);
    queryData();
  };

  // Actualizar libro
  const updateLibro = async (id, updatedTitle, updatedPrice) => {
    await updateItem(id, { title: updatedTitle, price: updatedPrice });
    queryData();
  };

  return (
    <>
      <h1>Ejercicio Libros</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(book => (
            <Tr
              key={book.id}
              book={book}
              onUpdate={updateLibro}
              onDelete={eliminarLibro}
            />
          ))}
          {/* {libros.map((l) => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>
                <input
                  type="text"
                  value={l.title}
                  onChange={(e) => {
                    const newLibros = libros.map((libro) =>
                      libro.id === l.id ? { ...libro, title: e.target.value } : libro
                    );
                    setLibros(newLibros);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={l.price}
                  onChange={(e) => {
                    const newLibros = libros.map((libro) =>
                      libro.id === l.id ? { ...libro, price: e.target.value } : libro
                    );
                    setLibros(newLibros);
                  }}
                />
              </td>
              <td>
                <button onClick={() => eliminarLibro(l.id)}>Eliminar</button>
                <button onClick={() => updateLibro(l.id, l.title, l.price)}>Actualizar</button>
              </td>
            </tr>
          ))} */}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td>
              <button onClick={agregarLibro}>Añadir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
