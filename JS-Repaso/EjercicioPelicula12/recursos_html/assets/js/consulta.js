//acciones a realizar cuando se cargue el componente de consulta
  
function consulta(){
    //1. confeccionar la combo de categorias 
    consultaCategorias()
    
    //2. consulta de todas las películas para confeccionar las fichas 
    
    consultaPeliculas()
    //3.activar listeners elementos estáticos  al componente (los filtros)
    document.querySelector('#filtro').oninput = consultaPeliculas
    document.querySelector('#idcategoria').onchange = consultaPeliculas
    //alert(`Se ha cargado el componente de consulta`)
  }
            