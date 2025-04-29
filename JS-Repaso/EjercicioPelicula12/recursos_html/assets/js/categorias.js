const APICategorias=' https://movies.alcyon-it.com/api/categorias'

function consultaCategorias(){
  fetch(APICategorias)
    .then(respuesta =>{
        if(respuesta.ok){
            return respuesta.json()
        }else{
            throw(`La petición no ha ido bien ${respuesta.status}`)
        }
    })
    .then(categorias =>{
      //console.log("Categorías recibidas:", categorias);

      //confeccionar las etiquetas
      const selectCategoria= document.querySelector('#idcategoria')                                                               //OPCIÓN 2: insertAdjacentHTML('beforeend',options)
      selectCategoria.innerHTML='<option value="0">Todas las categorías</option>'

      categorias.map(categoria => {
        const option = document.createElement('option')
        option.value =categoria.id;
        option.textContent=categoria.nombre; 
        selectCategoria.appendChild(option);
      });
      
    })
    .catch(error => {
        alert(error)
    })
}
  