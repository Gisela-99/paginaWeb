
//EJERCICIO 2.1: CREACIÓN DE LA FOTOTECA PARA LA SELECCIÓN DE FOTOS
//Crearemos un array al inicio del código javascript con el nombre de todas las fotos que tenemos en la carpeta img (este array de aquí en adelante le llamaremos array fototeca
let arrayFototeca = [
        { src: "casa1.jpg", titulo: "Foto 1", descripcion: "Casa 1" },
        { src: "casa2.jpg", titulo: "Foto 2", descripcion: "Casa 2" },
        { src: "casa3.jpg", titulo: "Foto 3", descripcion: "Casa 3" },
        { src: "casa4.jpg", titulo: "Foto 4", descripcion: "Casa 4" },
        { src: "casa5.jpg", titulo: "Foto 5", descripcion: "Casa 5" },
        { src: "casa6.jpg", titulo: "Foto 6", descripcion: "Casa 6" },
        { src: "casa7.jpg", titulo: "Foto 7", descripcion: "Casa 7" },
        { src: "casa8.jpg", titulo: "Foto 8", descripcion: "Casa 8" }
      ]

//console.log(arrayFototeca)

let FOTOTECA = document.querySelector('#fotos')
let GALERIA = document.querySelector('#galeria')
let arrayGaleria=[] 

arrayFototeca.map(imagen => selecionarCasa(imagen))

function selecionarCasa(imagen){
  //CONFECCIONAR LOS NODOS CON CREATE ELEMENT
  let objetoImagen = document.createElement('img')
  objetoImagen.setAttribute('src', `img/${imagen.src}`)  //Añadir el atributo src 

  objetoImagen.ondblclick = agregarGaleria

  FOTOTECA.append(objetoImagen)

}
//EJERCICIO 2.2: ACTIVACIÓN DE LOS LISTENERS SOBRE LA FOTOTECA
function agregarGaleria(ev){
  
  //Crear array vacio Fotos seleccionadas
 
  let rutaFoto= ev.target.getAttribute('src')
  let slash = rutaFoto.lastIndexOf('/')
  let nombreFoto = rutaFoto.substring(slash+1)
  console.log(nombreFoto)

  if (!arrayGaleria.includes(nombreFoto)) {
    arrayGaleria.push(nombreFoto)

    // También puedes clonar y añadir la imagen a la galería visual
    /* let imagenCopia = ev.target.cloneNode(true)
    GALERIA.appendChild(imagenCopia)*/

    let div= document.createElement('div')
    div.classList.add('imagenesGaleria')

    let imagen=document.createElement('img')
    imagen.setAttribute('src', rutaFoto)
    imagen.classList.add('imagenGaleria')
    imagen.onclick = agrandarFoto;

    let imgBorrar= document.createElement('img')
    imgBorrar.classList.add('borrar')
    imgBorrar.setAttribute('src','img/borrar.png')
    imgBorrar.setAttribute('data-img',nombreFoto) //crear un atributo

    imgBorrar.onclick = borrarFotoGaleria
  
    div.appendChild(imagen)
    div.appendChild(imgBorrar)
    
    GALERIA.appendChild(div)
  }

  console.log("Fotos en galería:", arrayGaleria)
}
//EJERCICIO 4.1 :BORRAR FOTOS DE LA GALERIA

function borrarFotoGaleria(ev){
  //console.log('hola')
  //recuperar el nombre de la foto
  let nombreFoto= ev.target.getAttribute('data-img')
  console.log(nombreFoto)
  //buscar el nombre del array para conocer el índice
  let indiceFoto= arrayGaleria.indexOf(nombreFoto)
  console.log(indiceFoto)
  //borrar el elemento del array
  arrayGaleria.splice(indiceFoto,1)
  //borrar el nodo de la caja galeria
  document.querySelectorAll('.imagenesGaleria')[indiceFoto].remove()
  
}

function agrandarFoto(ev){
  //recuperar el nombre de la foto
  let nombreFoto= ev.target.getAttribute('data-img')
  console.log("Agrandando foto:",nombreFoto)
  //buscar el nombre del array para conocer el índice
  let rutaFoto = `img/${nombreFoto}`;

  let lightbox=document.querySelector('#lightbox')
  lightbox.style.display='block'

  let lightboxImage = lightbox.querySelector('img');
  lightboxImage.setAttribute('src', `src${rutaFoto}`);
}


