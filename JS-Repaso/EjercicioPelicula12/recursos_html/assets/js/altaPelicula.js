
function alta(){
  consultaCategorias()

  document.querySelector("#formalta").onsubmit= function(ev){
    ev.preventDefault()
    altaPelicula()
  }
    
  document.querySelector('#portada').oninput = previsualizarImagen // cuando cambia el valor de ese campo
}
// function altaPelicula(){
//   // recuperar las cajas de avisos y errores
//   const avisoOK = document.querySelector('.alert-success')
//   const avisoNOK = document.querySelector('.alert-danger')
  
//   //ocultar las cajas de avisos y errores
//   avisoOk.classList.add('avisos')
//   avisoNOK.classList.add('avisos')
  

//   //const API_Alta= 'https://movies.alcyon-it.com/api/peliculas/'

//   //recuperar los datos del formulario
//   let titulo = document.querySelector('#titulo').value.trim()
//   let categoria = document.querySelector('#idcategoria').value.trim()
//   let direccion= document.querySelector('#direccion').value.trim()
//   let anio = document.querySelector('#anio').value
//   let sinopsis = document.querySelector('#sinopsis').value.trim()
//   let imagen = document.querySelector('#portada').files[0]
//   // validar datos

//   //confeccionar el objeto formData
//   const formdata= new FormData()
//   formdata.append('titulo', titulo)
//   formdata.append('direccion', direccion)
//   formdata.append('anio', anio)
//   formdata.append('idcategoria', categoria)
//   formdata.append('sinopsis', sinopsis)
//   if(imagen)formdata.append('img', imagen)
  
//     const parametro ={
//       'method':'POST',
//       'body': formdata,
//     }

//     fetch(API_Alta, parametro)
//     .then(respuesta => {
//       if(respuesta.ok){
//         return respuesta.json()
//       }else{
//         throw(respuesta.json())
//       }
//     })
//     .then(mensaje => {console.log(mensaje)
//       avisoOK.classList.remove('avisos')}
//   )
//     .catch(error => error.then(er => {
//     console.log(er)
//     let errores = ''
//     er.forEach(e => {
//       errores += `<div>${e}</div>`
//     })
//     avisoNOK.innerHTML = errores // mostrar los errores en la caja
//     avisoOK.classList.remove('avisos') //visualizar la caja
//   })) 
    
//     previsualizarImagen()

// }

// function previsualizarImagen(){
  
//   let imagen = document.querySelector('#portada').files[0]
//   let urlImagen = URL.createObjectURL(imagen)
//   document.querySelector('img').setAttribute('src', urlImagen)

  
// }
