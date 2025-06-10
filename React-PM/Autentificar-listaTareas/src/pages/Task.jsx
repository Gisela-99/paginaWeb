import { useState, useEffect } from 'react'
import { collection, getDocs } from '../services/config'
import { db } from '../services/config'
import { createComentario, deleteItem, updateItem } from '../services/api'
import { useUserContext } from '../providers/UserProvider'
import './style.css'

function Task() {
  const { user } = useUserContext()
  const [comentario, setComentario] = useState('')
  const [comentarios, setComentarios] = useState([])
  const [mostrarModal, setMostrarModal] = useState(false)
  const [comentarioEditando, setComentarioEditando] = useState(null)
  const [textoTemporal, setTextoTemporal] = useState('')

  const obtenerComentarios = async () => {
    if (!user?.uid) return
    const colRef = collection(db, 'users', user.uid, 'comments')
    const snapshot = await getDocs(colRef)
    const listado = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setComentarios(listado)
  }

  useEffect(() => {
    obtenerComentarios()
  }, [user?.uid])

  const agregarComentario = async () => {
    if (!user?.uid || comentario.trim() === '') return
    await createComentario(user.uid, { texto: comentario })
    setComentario('')
    obtenerComentarios()
  }

  const eliminarComentario = async (id) => {
    const rutaCompleta = `${user.uid}/comments/${id}`
    await deleteItem(rutaCompleta)
    obtenerComentarios()
  }

  // Abrir modal de edición
  const abrirModalEdicion = (comentario) => {
    setComentarioEditando(comentario)
    setTextoTemporal(comentario.texto)
    setMostrarModal(true)
  }

  // Cerrar modal
  const cerrarModal = () => {
    setMostrarModal(false)
    setComentarioEditando(null)
    setTextoTemporal('')
  }

  // Guardar cambios
  const guardarCambios = async () => {
    if (textoTemporal.trim() === '') return
    
    await updateItem(`${user.uid}/comments/${comentarioEditando.id}`, { texto: textoTemporal })
    cerrarModal()
    obtenerComentarios()
  }

  return (
    <div>
      <h1>Comentarios</h1>
      {comentarios.map(c => (
        <div key={c.id}>
          <span>{c.texto}</span>
          <button onClick={() => eliminarComentario(c.id)}>Borrar</button>
          <button onClick={() => abrirModalEdicion(c)}>Editar</button>
        </div>
      ))}
            
      <div className='input'>
        <textarea
          value={comentario}
          onChange={e => setComentario(e.target.value)}
        />
      </div>
      <button onClick={agregarComentario}>Añadir Comentario</button>

      {/* Modal de edición */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Editar Comentario</h3>
            <textarea
              value={textoTemporal}
              onChange={(e) => setTextoTemporal(e.target.value)}
              rows="4"
              cols="50"
            />
            <div className="modal-buttons">
              <button onClick={guardarCambios}>OK</button>
              <button onClick={cerrarModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Task
