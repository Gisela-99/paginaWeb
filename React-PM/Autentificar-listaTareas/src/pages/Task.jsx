import { useState, useEffect } from 'react'
import { collection, getDocs } from '../services/config'
import { db } from '../services/config'
import { createComentario, deleteItem, updateItem } from '../services/api'
import { useUserContext } from '../providers/UserProvider'

function Task() {
  const { user } = useUserContext()
  const [comentario, setComentario] = useState('')
  const [comentarios, setComentarios] = useState([])
  const [editandoId, setEditandoId] = useState(null)

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
    console.log('ID a eliminar:', id)
    console.log('User ID:', user.uid)
    const rutaCompleta = `${user.uid}/comments/${id}`
    console.log('Ruta completa:', rutaCompleta)
    
    await deleteItem(rutaCompleta)
    obtenerComentarios()
  }

  // Activar modo edición
  const activarEdicion = (id) => {
    setEditandoId(id)
  }

  // Guardar cambios
  const guardarComentario = async (id) => {
    const comentarioActualizado = comentarios.find(c => c.id === id)
    await updateItem(`${user.uid}/comments/${id}`, { texto: comentarioActualizado.texto })
    setEditandoId(null)
    obtenerComentarios()
  }

  // Cancelar edición
  const cancelarEdicion = () => {
    setEditandoId(null)
    obtenerComentarios() // Restaurar valores originales
  }

  // Actualizar texto mientras se edita
  const actualizarTextoLocal = (id, nuevoTexto) => {
    const nuevosComentarios = comentarios.map((comentario) =>
      comentario.id === id ? { ...comentario, texto: nuevoTexto } : comentario
    )
    setComentarios(nuevosComentarios)
  }

  return (
    <div>
      <h1>Comentarios</h1>
      {comentarios.map(c => (
        <div key={c.id}>
          {editandoId === c.id ? (
            // Modo edición
            <>
              <input
                type="text"
                value={c.texto}
                onChange={(e) => actualizarTextoLocal(c.id, e.target.value)}
              />
              <button onClick={() => guardarComentario(c.id)}>Guardar</button>
              <button onClick={cancelarEdicion}>Cancelar</button>
            </>
          ) : (
            // Modo visualización
            <>
              <p>{c.texto}</p>
              <button onClick={() => eliminarComentario(c.id)}>Borrar</button>
              <button onClick={() => activarEdicion(c.id)}>Actualizar</button>
            </>
          )}
        </div>
      ))}
      <textarea 
        value={comentario}
        onChange={e => setComentario(e.target.value)}
      />
      <button onClick={agregarComentario}>Añadir Comentario</button>
    </div>
  )
}

export default Task
