const API_PELICULAS='http://localhost:3000/api/peliculas'
function altaPelicula(){
  // recuperar las cajas de avisos y errores
  const avisoOK = document.querySelector('.alert-success')
  const avisoNOK = document.querySelector('.alert-danger')
  
  //ocultar las cajas de avisos y errores
  avisoOk.classList.add('avisos')
  avisoNOK.classList.add('avisos')
  

  //const API_Alta= 'https://movies.alcyon-it.com/api/peliculas/'

  //recuperar los datos del formulario
  let titulo = document.querySelector('#titulo').value.trim()
  let categoria = document.querySelector('#idcategoria').value.trim()
  let direccion= document.querySelector('#direccion').value.trim()
  let anio = document.querySelector('#anio').value
  let sinopsis = document.querySelector('#sinopsis').value.trim()
  let imagen = document.querySelector('#portada').files[0]
  // validar datos

  //confeccionar el objeto formData
  /*const formdata= new FormData()
  formdata.append('titulo', titulo)
  formdata.append('direccion', direccion)
  formdata.append('anio', anio)
  formdata.append('idcategoria', categoria)
  formdata.append('sinopsis', sinopsis)
  if(imagen)formdata.append('img', imagen)
  
    const parametro ={
      'method':'POST',
      'body': formdata,
    }*/

    // confeccionar un objeto con los datos a enviar 
    let datos ={
      'titulo': titulo,
      'direccion': direccion,
      'anio':anio,
      'sipnosis': sinopsis,
      'idcategoria':categoria,
      'img':imagen?imagen.name: 'sinportada.jpg',
    }
    
    const parametro ={
      'method':'POST',
      'body': JSON.stringify(datos),
      'headers':{
        'Content Type':'application/json'
      }
    } // los datos lo convierte en un json al servidor. aqui hay que enviar una cabeceras adicionales

    
    fetch(API_PELICULAS, parametro)
    .then(respuesta => {
      if(respuesta.ok){
        return respuesta.json()
      }else{
        console.log(respuesta)
        //throw(respuesta.json()) // es para FormData
        throw('Algo ha ido mal')
      }
    })
    .then(mensaje => {console.log(mensaje)
      avisoOK.classList.remove('avisos')}
  )
  .catch(error => error )
    /*.catch(error => error.then(er => {
    console.log(er)
    let errores = ''
    er.forEach(e => {
      errores += `<div>${e}</div>`
    })
    avisoNOK.innerHTML = errores // mostrar los errores en la caja
    avisoOK.classList.remove('avisos') //visualizar la caja
  })) */
    
    previsualizarImagen()

}

function modificarPelicula() {
    //recuperar las cajas de avisos y errores
    const avisosOK = document.querySelector('.alert-success')
    const avisosNOK = document.querySelector('.alert-danger')

    //ocultar las cajas de avisos y errores
    avisosOK.classList.add('avisos')
    avisosNOK.classList.add('avisos')

    //recuperar datos del formulario 
    let imagen = document.querySelector('#portada').files[0]
    let titulo = document.querySelector('#titulo').value.trim()
    let direccion = document.querySelector('#direccion').value.trim()
    let anio = document.querySelector('#anio').value
    let idcategoria = document.querySelector('#idcategoria').value
    let sinopsis = document.querySelector('#sinopsis').value.trim()
    let id = document.querySelector('#idpelicula').value

    //validar datos 

    //confeccionar el objeto formData
    const formdata = new FormData() 
    formdata.append ('titulo', titulo)
    formdata.append ('direccion', direccion)
    formdata.append ('anio', anio)
    formdata.append ('sinopsis', sinopsis)
    formdata.append ('idcategoria', idcategoria)
    formdata.append ('_method', 'PUT')
    if (imagen) formdata.append ('img', imagen); //no podemos enviar a la api un atributo img sin informar (o lo enviamos informado con una imagen o NO lo enviamos)

    //crear el objeto con los parámetros de la petición
    const parametros = {
        'method': 'POST', //alta de recurso (pelicula)
        'body': formdata //datos a enviar al servidor
    }

    let api = `${API_PELICULAS}/${id}`

    //realizar la petición con la API Fetch
    fetch(api, parametros)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            //lanzamos una excepcion con la respuesta en formato json porque la API, en caso de error, nos va a enviar un json con el array de errores
            throw (respuesta.json())
        }
    })
    .then(mensaje => {console.log(mensaje)
        //si la respuesta es correcta mostrar un mensaje de modificación efectuada
        avisosOK.classList.remove('avisos')
    })
    
    .catch(error => error.then(er => {
        //si la respuesta no es correcta mostrar los errores que vendrán en formato array
        console.log(er)
        let errores = ''

        //recorrer el array de errores para confeccionar una caja para cada uno de ellos
        er.forEach(e => {
            errores += `<div>${e}</div>`
        })

        avisosNOK.innerHTML = errores //mostrar errores en la caja
        avisosNOK.classList.remove('avisos') //visualizar la caja
    }))
    
}


function bajaPelicula() {
    //recuperar las cajas de avisos y errores
    const avisosOK = document.querySelector('.alert-success')
    const avisosNOK = document.querySelector('.alert-danger')

    //ocultar las cajas de avisos y errores
    avisosOK.classList.add('avisos')
    avisosNOK.classList.add('avisos')

    //recuperar datos del formulario 
    let id = document.querySelector('#idpelicula').value

    //crear el objeto con los parámetros de la petición
    const parametros = {
        'method': 'DELETE' //borrar un recurso (pelicula)
    }

    let api = `${API_PELICULAS}/${id}`

    //realizar la petición con la API Fetch
    fetch(api, parametros)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            //lanzamos una excepcion con la respuesta en formato json porque la API, en caso de error, nos va a enviar un json con el array de errores
            throw (respuesta.json())
        }
    })
    .then(mensaje => {console.log(mensaje)
        //si la respuesta es correcta redirigir a consulta de peliculas
        cargarSeccion('consulta')
    })
    .catch(error => error.then(er => {
        //si la respuesta no es correcta mostrar los errores que vendrán en formato array
        console.log(er)
        let errores = ''

        //recorrer el array de errores para confeccionar una caja para cada uno de ellos
        er.forEach(e => {
            errores += `<div>${e}</div>`
        })

        avisosNOK.innerHTML = errores //mostrar errores en la caja
        avisosNOK.classList.remove('avisos') //visualizar la caja
    }))
    
}

function consultaDetalle(id) {
    let api = `${API_PELICULAS}/${id}`

    fetch(api)
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.json()
        } else {
            throw(`Petición incorrecta con status: ${respuesta.status}`)
        }
    })
    .then(pelicula => {
        console.log(pelicula)
        //infomrar el error si la pelicula no existe
        if (pelicula.length == 0) {
            document.querySelector('.alert-warning').classList.remove('avisos')

            return
        }

        //informar los datos de la pelicula en el formulario
        
        document.querySelector('#titulo').innerText = pelicula[0].titulo
        document.querySelector('#categoria').innerText = pelicula[0].categoria.nombre
        document.querySelector('#anio').innerText = pelicula[0].anio
        document.querySelector('#direccion').innerText = pelicula[0].direccion
        document.querySelector('#sinopsis').innerText = pelicula[0].sinopsis
        //document.querySelector('#previsualizar').setAttribute('src', pelicula[0].img)
        document.querySelector('#previsualizar').src = pelicula[0].img
    })
    .catch(error => window.alert(error))
}
function previsualizarImagen(){
  
  let imagen = document.querySelector('#portada').files[0]
  let urlImagen = URL.createObjectURL(imagen)
  document.querySelector('img').setAttribute('src', urlImagen)

  
}
