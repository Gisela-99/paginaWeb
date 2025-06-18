import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onRoomUpdated } from '../services/api';

function VistaSala() {
  const { roomId } = useParams();
  const [datosSala, setDatosSala] = useState(null);

  useEffect(() => {
    const cancelarEscucha = onRoomUpdated(roomId, (datos) => {
      setDatosSala(datos);
    });

    return () => cancelarEscucha && cancelarEscucha();
  }, [roomId]);

  return (
    <div>
      <h1>Código de la Sala: {roomId}</h1>

      <p><strong>Creador:</strong> {datosSala?.creator || 'Desconocido'}</p>
      {/* <p><strong>Invitado:</strong> {datosSala?.invitado || 'Esperando al invitado...'}</p> */}
      <p><strong>Usuarios en la sala:</strong></p>
      <ul>
        {datosSala?.users?.length > 0 ? (
          datosSala.users.map((usuario, index) => (
            <li key={index}>{usuario}</li>
          ))
        ) : (
          <li>Esperando a los usuarios...</li>
        )}
      </ul>

      {datosSala?.guestIsReady ? (
        <p>El invitado está listo.</p>
      ) : (
        <p>Aún no está listo el invitado.</p>
      )}
    </div>
  );
}

export default VistaSala;
