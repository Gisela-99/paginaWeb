import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoom, onRoomUpdated } from "../services/room";

const RoomContext = createContext();

export const useRoomContext = () => useContext(RoomContext);

const RoomProvider = ({ children }) => {
  const [roomId, setRoomId] = useState('');
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    if (!roomId) return;
    createRoom(roomId).then(() => {
      console.log("Room created", roomId);
    });
  }, [roomId]);

  useEffect(() => {
    if (!roomId) return;
    const unsubscribe = onRoomUpdated(roomId, (data) => {
      setRoomData(data);
    });
    return () => unsubscribe && unsubscribe();
  }, [roomId]);

  return (
    <RoomContext.Provider value={{ roomId, setRoomId, roomData, setRoomData }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
