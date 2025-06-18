import React, { createContext, useContext, useState } from "react";
//import { createRoom} from "../services/api";

const RoomContext = createContext();

export const useRoomContext = () => useContext(RoomContext);

const RoomProvider = ({ children }) => {
  //const [roomId, setRoomId] = useState('');
  const [roomData, setRoomData] = useState(null);

  // useEffect(() => {
  //  const roomId = Math.floor(Math.random()*1000);
  //   createRoom(roomId).then(() => {
  //     console.log("Room created", roomId);
  //           setRoomData({roomId});

  //   });
  // }, []);

// useEffect(() => {
//   console.log(11111111)
//   const roomId = Math.floor(Math.random() * 1000);
//   const creatorName = "usuarioDefault"; // Pon el nombre real del creador aquí
//   createRoom(roomId, creatorName).then(() => {
//     console.log("Room created", roomId);
//     //setRoomId(roomId);  
//     setRoomData({ roomId });
//   });
// }, []);

  return (
    <RoomContext.Provider value={{  roomData, setRoomData }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
