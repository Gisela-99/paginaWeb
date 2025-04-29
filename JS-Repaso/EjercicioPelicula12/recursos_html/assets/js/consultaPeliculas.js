function consultaPeliculas(){
  //utilizar la Api Fecth para consultar todas las películas 
  const API_Peliculas='https://movies.alcyon-it.com/api/peliculas'
  // para cada película confeccionar su

  fetch(API_Peliculas)
  .then(respuesta =>{
    if(respuesta.ok){
      return respuesta.json()
    }else{
      throw(`La petición no ha ido  bien ${respuesta.ok}`)
    }
  })
  .then(peliculas=>{
    const contenedorPeliculas= document.querySelector('#contenedorPeliculas')
    contenedorPeliculas.innerHTML =''
    peliculas.map(pelicula=>{
      const targetHTML=`
      <div class="col-12 col-sm-6 col-md-4">
      <div class="card m-2 mb-5">
        <img class="card-img-top pelimg" src="${pelicula.img}" alt="${pelicula.titulo}" >
        <div class="card-body">
            <h4 class="card-title">${pelicula.titulo}</h4>
            <p class="card-text">${pelicula.sinopsis}</p>
            <p class="card-text"></p>
            <p class="card-text">${pelicula.direccion}</p>
            <p class="card-text">
            <small class="text-muted">${pelicula.anio}</small>
            </p>
            <span onclick="cargarSeccion('detalle', ${pelicula.id})" class="btn btn-outline-primary btn-block">Ver más...</span>&nbsp;
            <span onclick="cargarSeccion('mantenimiento', ${pelicula.id})" class="btn btn-outline-primary btn-block">Mantenimiento</span>
        </div>
      </div>
      </div>`

      contenedorPeliculas.insertAdjacentHTML('beforeend', targetHTML)
    
    })

  })
  .catch(error=>{
    alert(error)
  })
  
}