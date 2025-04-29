
//cargar componente de inicio
cargarSeccion('inicio')

//activar enlaces estáticos (barra de navegación)
let enlaces = document.querySelectorAll('nav span')

enlaces.forEach(enlace => enlace.onclick = function(ev) {
    let seccion = ev.target.getAttribute('data-seccion')
    
    //la función cargarSección es asíncrona de forma que la función que inicia el componente debe esperar obligatoriamente a que finalice la ejecución de la primera función (porque necesita acceder a un elemento del DOM del componente a cargar -combo-)
    cargarSeccion(seccion)
    //.then(()=> iniciarComponente(sección) )
})

//async
function cargarSeccion(seccion, id=null) {
    //await
    fetch(`html/${seccion}.html`)
    .then(response => response.text())
    .then(seccionhtml => {
        document.querySelector('#contenido').innerHTML = seccionhtml
        iniciarComponente(seccion)
    })

}


//si se carga antes de otro asincrono y no sale en la consola
function iniciarComponente(seccion){
    switch(seccion){
        case 'consulta':
            consulta()
            break;
        case 'alta':
            alta()
            break;
        default: 
        break;
    }
}






//API REST = Nos permite acceder para consultas. Lo que hace el back-end envia un código del token (y eso lo tenemos que guardar en el localStorage). El servidor no recuerda que nos hemos conectado y para averiguar recoger los datos de la petición y el token, sino existe te devuelve un error de 403.  Rest no guarda ningún estado, /recursos/identificadorRecursos



//SPA = todas las aplicaciones web, quiere decir Single Page Application (Aplicaciones de una sola página). Solo hay un documento de html, el contenido es de forma dinámica.Nunca se sale de la página. 

