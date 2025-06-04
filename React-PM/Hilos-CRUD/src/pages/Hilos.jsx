import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../services/config';

function Hilos() {
  const { hiloId } = useParams();
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    if (!hiloId) return;

    collection(db, 'hilos', hiloId, 'comentarios'); // referencia a colección

    const cargarComentarios = async () => {
      const comentariosCol = collection(db, 'hilos', hiloId, 'comentarios');
      const snapshot = await getDocs(comentariosCol);
      const listaComentarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComentarios(listaComentarios);
    };

    cargarComentarios();
  }, [hiloId]);

  const guardarComentario = async () => {
    if (!comentario.trim()) return;

    const comentariosCol = collection(db, 'hilos', hiloId, 'comentarios');
    await addDoc(comentariosCol, { texto: comentario });

    // Actualiza localmente sin recargar datos
    setComentarios([...comentarios, { id: Date.now().toString(), texto: comentario }]);
    setComentario('');
  };

  return (
    <div>
      {comentarios.map(c => (
        <p key={c.id}>{c.texto}</p>
      ))}
      <div className='input'>
        <textarea
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        placeholder="Escribe un comentario"
      />
      </div>
      
      <button onClick={guardarComentario}>Guardar comentario</button>
    </div>
  );
}

export default Hilos;
