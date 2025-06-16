import React, { useEffect, useState } from "react";
import { useRoomContext } from "../providers/RoomProvider"; // Ajusta la ruta

function CrearSala() {
  const { setRoomId,roomId  } = useRoomContext();
  //const [codigo, setCodigo] = useState("");

  // useEffect(() => {
  //   const generateId = Math.random().toString(36).substr(2, 6);
  //   setCodigo(generateId);
  // }, []);


  const handleAcceder = () => {
    // if (!codigo.trim()) {
    //   alert("Introduce un código válido");
    //   return;
    // }
    // setRoomId(codigo.trim());
  };

  return (
    <div>
      <h1>Código de la sala:{roomId}</h1>
      <input
        type="text"
        placeholder="Código de la sala"
      />
      <button onClick={handleAcceder}>Acceder</button>
    </div>
  );
}

export default CrearSala;
