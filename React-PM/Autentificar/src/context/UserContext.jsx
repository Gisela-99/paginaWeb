// src/context/UserContext.jsx
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useUserContext = () => useContext(AppContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // <- mejor empezar en null
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserProvider;
