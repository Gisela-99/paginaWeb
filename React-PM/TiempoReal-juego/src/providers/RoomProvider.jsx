import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoom, } from "../services/room.js";

const RoomContext = createContext();

export const useRoomContext = () => useContext(RoomContext);

const RoomProvider = ({ children }) => {
  const [roomId, setRoomId] = useState('');
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
   const roomId = Math.floor(Math.random()*1000);
    createRoom(roomId).then(() => {
      console.log("Room created", roomId);
            setRoomData({roomId});

    });
  }, []);

  // useEffect(() => {
  //   if (!roomId) return;
  //   const unsubscribe = onRoomUpdated(roomId, (data) => {
  //     setRoomData(data);
  //   });
  //   return () => unsubscribe && unsubscribe();
  // }, [roomId]);

  return (
    <RoomContext.Provider value={{ roomId, setRoomId, roomData, setRoomData }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
