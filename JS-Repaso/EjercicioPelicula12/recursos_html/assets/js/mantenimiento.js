//acciones necesarias cuando se cargue el componente
function mantenimiento(id) {
    //window.alert(`Se ha cargado el componente de mantenimiento con id: ${id}`)

    //1. cargar la combo de categorías (función asíncrona)
    consultaCategorias()

    //2. consultar los datos de la película cuyo id llega en el parámetro de la función (es imprescindible esperar a que se ejecute la función que se encarga de montar la combo de categorias)
    .then(() => consultaPelicula(id))
    

    //3. activar listeners (botón de modificación, baja, selección imagen)
    document.querySelector('#portada').oninput = previsualizarImagen
    document.querySelector('#modificar').onclick = modificarPelicula 
    document.querySelector('#baja').onclick = bajaPelicula
}