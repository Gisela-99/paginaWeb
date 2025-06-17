import React from 'react'
//import {useRoomContext} from '../providers/RoomProvider';
import { useNavigate } from 'react-router-dom';

function UnirSala() {
   //const { roomData } = useRoomContext()
   const navigate = useNavigate()
  return (
    <div>
      {/* <h1>Código de la sala:{roomData?.roomId??"Generando sala"}</h1> */}
      <hr />
      <input type="text" placeholder='Código de la sala' />
      <button onClick={()=> navigate('/crear')}>Acceder</button>
    </div>
  )
}

export default UnirSala