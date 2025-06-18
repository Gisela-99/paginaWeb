

// export default UnirseASala;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoomById, guestEnterInRoom } from '../services/api';

function UnirseASala() {
  const [codigoSala, setCodigoSala] = useState('');
  const [nombreInvitado, setNombreInvitado] = useState('');
  const [error, setError] = useState('');
  const navegar = useNavigate();

  const manejarUnion = async () => {
    if (!nombreInvitado.trim()) {
      setError("Por favor, introduce tu nombre.");
      return;
    }
    const sala = await getRoomById(codigoSala);
    if (sala) {
      try {
        await guestEnterInRoom(codigoSala, nombreInvitado.trim());
        navegar(`/sala/${codigoSala}`);
      } catch (e) {
        setError("Error al unirse a la sala.");
        console.error(e);
      }
    } else {
      setError("La sala no existe.");
    }
  };

  return (
    <div>
      <label htmlFor="entradaCodigo">Introduce el código de la sala:</label>
      <input
        id="entradaCodigo"
        type="text"
        placeholder="Código de la sala"
        value={codigoSala}
        onChange={(e) => setCodigoSala(e.target.value)}
      />

      <label htmlFor="nombreInvitado">Introduce tu nombre:</label>
      <input
        id="nombreInvitado"
        type="text"
        placeholder="Tu nombre"
        value={nombreInvitado}
        onChange={(e) => setNombreInvitado(e.target.value)}
      />

      <button onClick={manejarUnion}>Acceder</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UnirseASala;

