
import { useRoomContext } from "../providers/RoomProvider";

function CrearSala() {
  const { roomData } = useRoomContext();

  return (
    <div>
      <h1>Código de la sala:{roomData?.roomId??"Generando sala"}</h1>

    </div>
  );
}

export default CrearSala;
