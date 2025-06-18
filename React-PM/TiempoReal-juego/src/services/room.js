import {db, doc, setDoc} from './config'
 export async function createRoom(roomId) {
   // Aquí pones la lógica para crear una sala,   // por ejemplo crear un documento en Firebase o llamar a una API
   console.log("Crear sala con ID:", roomId);
   const docRef = doc(db,'rooms', String(roomId))
   await setDoc(docRef, {
     roomId: roomId,
     users:[],   })
   // Simula una espera para que sea async
   return new Promise((resolve) => setTimeout(resolve, 500));
 }


export function onRoomUpdated(roomId, callback) {
  // Aquí pones la lógica para escuchar cambios en la sala,
  // un listener de Firebase
  console.log("Escuchando actualizaciones para sala:", roomId);

  // Simula que recibes datos después de 3 segundos
  const timeoutId = setTimeout(() => {
    callback({ guestIsReady: true });
  }, 3000);

  // Retorna una función para cancelar la escucha (cleanup)
  return () => clearTimeout(timeoutId);
}
