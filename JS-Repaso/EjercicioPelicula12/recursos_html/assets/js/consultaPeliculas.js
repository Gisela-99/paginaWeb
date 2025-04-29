//utilizar la Api Fecth para consultar todas las películas 
const API_Peliculas='https://movies.alcyon-it.com/api/peliculas'

function consultaPeliculas(){
  
  //recuperar los valores que puedan tener los filtros de búsqueda (titulo + categoria)
  let filtro = document.querySelector('#filtro').value.trim()
 
  let categoria = document.querySelector('#idcategoria').value
  
  let api = API_Peliculas

  if(filtro || categoria > 0){
    api +=`?categoria=${categoria}&filtro=${filtro}`
  }  

  fetch(api)
  .then(respuesta =>{
    if(respuesta.ok){
      return respuesta.json()
    }else{
      throw(`La petición no ha ido  bien ${respuesta.ok}`)
    }
  })
  .then(peliculas=>{
    // const contenedorPeliculas= document.querySelector('.peliculas')
    // contenedorPeliculas.innerHTML =''
    
    let fichas ='';
    peliculas.map(pelicula=>{
      fichas +=`   
      <div class="card m-2 mb-5">
        <img class="card-img-top pelimg" src="${pelicula.img}" alt="${pelicula.titulo}" >
        <div class="card-body">
            <h4 class="card-title">${pelicula.titulo}</h4>
            <!--<p class="card-text">${pelicula.sinopsis}</p>-->
            <p class="card-text"></p>
            <p class="card-text">${pelicula.direccion}</p>
            <p class="card-text">
            <small class="text-muted">${pelicula.anio}</small>
            </p>
            <span onclick="cargarSeccion('detalle', ${pelicula.id})" class="btn btn-outline-primary btn-block">Ver más...</span>&nbsp;
            <span onclick="cargarSeccion('mantenimiento', ${pelicula.id})" class="btn btn-outline-primary btn-block">Mantenimiento</span>
        </div>
      </div>
  `
     
    })

     //desactivar la altera en caso de que esta este visible
      
      document.querySelector('.peliculas').innerHTML = fichas

      if(!fichas){
        document.querySelector('.alert').classList.remove('avisos')
      }else{
        document.querySelector('.alert').classList.add('avisos')
      }

  })
  .catch(error=>{
    alert('error: ', error)
  })
  
}
