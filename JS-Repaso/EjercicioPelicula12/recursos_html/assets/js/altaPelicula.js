function alta(){
  consultaCategorias()

  document.querySelector("#altapelicula").onclick = altaPelicula
  document.querySelector('#portada').oninput = previsualizarImagen // cuando cambia el valor de ese campo
}
function altaPelicula(){
  
  const API_Alta= 'https://movies.alcyon-it.com/api/peliculas/'
  
  let titulo = document.querySelector('#titulo').value.trim()
  let categoria = document.querySelector('#idcategoria').value.trim()
  let direccion= document.querySelector('#direccion').value.trim()
  let anio = document.querySelector('#anio').value
  let sipnosis = document.querySelector('#sinopsis').value.trim()
  let portada = document.querySelector('#portada').files[0]

  const formdata= new FormData()
  formdata.append('titulo', titulo)
  formdata.append('direccion', direccion)
  formdata.append('anio', anio)
  formdata.append('idcategoria', categoria)
  formdata.append('sipnosis', sipnosis)
  if(portada)formdata.append('img', portada)
  
    const parametro ={
      'method':'POST',
      'body': formdata,
    }

    fetch(API_Alta, parametro)
    .then(respuesta => {
      if(respuesta.ok){
        return respuesta.json()
      }else{
        throw(respuesta.json())
      }
    })
    .then(mensaje => console.log(mensaje))
    .catch(error => error.then(er=> console.log(er))) 
    
    previsualizar()

}

function previsualizarImagen(){
  
  let imagen = document.querySelector('#portada').files[0]
  let urlImagen = URL.createObjectURL(imagen)
  document.querySelector('img').setAttribute('src', urlImagen)

  
}
