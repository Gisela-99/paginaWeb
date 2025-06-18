
// import { useRoomContext } from "../providers/RoomProvider";
// import {useEffect} from 'react';
// import {createRoom} from '../services/api';

// function CrearSala() {
//   const { roomData,setRoomData } = useRoomContext();
//   useEffect(() => {
//     console.log(11111111)
//     const roomId = Math.floor(Math.random() * 1000);
//     const creatorName = "usuarioDefault"; // Pon el nombre real del creador aquí
//     createRoom(roomId, creatorName).then(() => {
//       console.log("Room created", roomId);
//       //setRoomId(roomId);  
//       setRoomData({ roomId });
//     });
//   }, [setRoomData]);
//   return (
//     <div>
//       <h1>Código de la sala:{roomData?.roomId??"Generando sala"}</h1>

//     </div>
//   );
// }

// export default CrearSala;
import { useRoomContext } from "../providers/RoomProvider";
import { useEffect } from "react";
import { createRoom } from "../services/api";
import { useUserContext } from "../providers/UserProviders";

function CrearSala() {
  const { roomData, setRoomData } = useRoomContext();
  const { user } = useUserContext();

  useEffect(() => {
    console.log(11111111);
    const roomId = Math.floor(Math.random() * 1000);
    const creatorName = user?.displayName || user?.name || "usuarioDefault"; // nombre real o fallback
    createRoom(roomId, creatorName).then(() => {
      console.log("Room created", roomId);
      setRoomData({ roomId });
    });
  }, [setRoomData, user]);

  return (
    <div>
      <h1>Código de la sala: {roomData?.roomId ?? "Generando sala"}</h1>
    </div>
  );
}

export default CrearSala;

