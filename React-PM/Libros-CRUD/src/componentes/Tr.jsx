import { useState, useEffect} from "react";

const Tr = ({ book, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(book.title);
  const [price, setPrice] = useState(book.price);

   // Sincronizar local state si cambia el book desde afuera
  useEffect(() => {
    setTitle(book.title);
    setPrice(book.price);
  }, [book]);

  return (
    <tr>
      <td>{book.id}</td>
      <td>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </td>
      <td>
        <button onClick={() => onDelete(book.id)}>Eliminar</button>
        <button onClick={() => onUpdate(book.id, title, price)}>Actualizar</button>
      </td>
    </tr>
  );
};

export default Tr;
