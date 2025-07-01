import { createContext, useContext, useEffect, useState } from "react";

const SocketContext = createContext (null)
const useSocket =() => useContext(SocketContext)

const SocketProvider = ({children}) =>{

  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Socket conectado:', newSocket.id);
    });

    return () => {
      newSocket.disconnect();
      setSocket(null);
    };
  }, [])
  return(
     <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
export default SocketProvider