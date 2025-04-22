
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

    let imagen=document.createElement('img')
    imagen.setAttribute('src', rutaFoto)
    imagen.classList.add('imagenGaleria')
    
    GALERIA.append(imagen)
  }

  console.log("Fotos en galería:", arrayGaleria)
  
  eliminarCasa()


}
//EJERCICIO 4.1 :BORRAR FOTOS DE LA GALERIA

function eliminarCasa(ev){
  let div= document.createElement('div')
  div.classList.add('imagenesGaleria')

  let img= document.createElement('img')
  img.classList.add('borrar')
  img.setAttribute('src','img/borrar.png')
  
  div.appendChild(img)
  GALERIA.appendChild(div)
  console.log('Flecha agregada');
}



