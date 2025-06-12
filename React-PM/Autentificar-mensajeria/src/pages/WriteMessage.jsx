import React, { useState, useEffect } from 'react';
import { getItems, enviarMensajeAFirebase } from '../services/api';
import { useUserContext } from '../providers/UserProviders';

function WriteMessage() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [checkedUsersIds, setCheckedUsersIds] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getItems();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  const onChange = (userId) => {
    setCheckedUsersIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const enviar = async () => {
    if (!mensaje.trim() || checkedUsersIds.length === 0 || !user) {
      alert("Debes escribir un mensaje y seleccionar al menos un usuario.");
      return;
    }
    console.log("User ID remitente:", user.id); 
  console.log("Destinatarios:", checkedUsersIds);

    try {
      console.log("Enviando mensaje a Firebase con:", {
  mensaje,
  checkedUsersIds,
  remitente: user.id,
});
      await enviarMensajeAFirebase(mensaje, checkedUsersIds, user.id);
      alert("Mensaje enviado");
      setMensaje('');
      setCheckedUsersIds([]);
    } catch (error) {
      console.error("Error al enviar mensaje", error);
    }
  };

  return (
    <div>
      <h1>Escribir mensaje</h1>
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <button onClick={enviar}>Enviar</button>

      <h2>Selecciona destinatarios:</h2>
      {usuarios.map((u) => (
        u.id !== user?.id && (
          <label key={u.id}>
            <input
              type="checkbox"
              checked={checkedUsersIds.includes(u.id)}
              onChange={() => onChange(u.id)}
            />
            {u.name}
          </label>
        )
      ))}
    </div>
  );
}

export default WriteMessage;
