import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc, getDocs, serverTimestamp, db} from '../services/config';
import { uploadImageToCloudinary } from '../services/api';

function Hilos() {
  const { hiloId } = useParams();
  const [comentario, setComentario] = useState('');
  const [nombre, setNombre] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [imagen, setImagen]= useState('')

  useEffect(() => {
    if (!hiloId) return;

    const cargarComentarios = async () => {
      const comentariosCol = collection(db, 'hilos', hiloId, 'comentarios');
      const snapshot = await getDocs(comentariosCol);
      const listaComentarios = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComentarios(listaComentarios);
    };

    cargarComentarios();
  }, [hiloId]);

  const guardarComentario = async () => {
    if (!comentario.trim() || !nombre.trim()) return;

    const comentariosCol = collection(db, 'hilos', hiloId, 'comentarios');

     let urlImagen = '';

  if (imagen) {
    try {
      urlImagen = await uploadImageToCloudinary(imagen);
    } catch (error) {
      console.error('Error al subir la imagen a Cloudinary:', error);
    }
  }
    const nuevoComentario = {
      texto: comentario,
      nombre: nombre,
      fecha: serverTimestamp(),
       imagen: urlImagen,
    
    };

    await addDoc(comentariosCol, nuevoComentario);

    setComentarios([
      ...comentarios,
      {
        ...nuevoComentario,
        id: Date.now().toString(),
        fecha: new Date() // fecha provisional para mostrar inmediatamente
      }
    ]);
    setComentario('');
    setNombre('');
    setImagen(null);
  };

  return (
    <div>
      {comentarios.map(c => (
      <div key={c.id} className="comentario">
        <p className="nombre">{c.nombre || 'Anónimo'}</p>
        <p>{c.texto}</p>
        {c.imagen && (
          <img 
            src={c.imagen} 
            alt="Imagen subida" 
            style={{ maxWidth: '200px', maxHeight: '200px', display: 'block', margin: '10px 0' }} 
          />
        )}
        {c.fecha && (
          <span>{new Date(c.fecha.seconds ? c.fecha.seconds * 1000 : c.fecha).toLocaleString()}</span>
        )}
      </div>
    ))}


      <div className="input">
        <input
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre"
        />
      </div>

      <div className="input">
        <textarea
          value={comentario}
          onChange={e => setComentario(e.target.value)}
          placeholder="Escribe un comentario"
        />
      </div>
      <div className="input">
        <input type="file" onChange={e => setImagen(e.target.files[0])} />
      </div>

      <button onClick={guardarComentario}>Guardar comentario</button>
    </div>
  );
}

export default Hilos;
