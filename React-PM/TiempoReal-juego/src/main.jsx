
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './providers/UserProviders.jsx'
import RoomProvider from './providers/RoomProvider.jsx'

createRoot(document.getElementById('root')).render(
    <UserProvider>
        <RoomProvider>
            <App />
        </RoomProvider>
    </UserProvider>
  
)
