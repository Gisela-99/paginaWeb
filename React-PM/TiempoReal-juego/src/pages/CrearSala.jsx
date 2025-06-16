import React, { useEffect, useState } from "react";
import { useRoomContext } from "../providers/RoomProvider"; // Ajusta la ruta

function CrearSala() {
  const { setRoomId } = useRoomContext();
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    const generateId = Math.random().toString(36).substr(2, 6);
    setCodigo(generateId);
  }, []);

  //const handleChange = (e) => setCodigo(e.target.value);

  const handleAcceder = () => {
    if (!codigo.trim()) {
      alert("Introduce un código válido");
      return;
    }
    setRoomId(codigo.trim());
  };

  return (
    <div>
      <h1>Código de la sala: {codigo}</h1>
      <input
        type="text"
        placeholder="Código de la sala"
        //onChange={handleChange}
      />
      <button onClick={handleAcceder}>Acceder</button>
    </div>
  );
}

export default CrearSala;
