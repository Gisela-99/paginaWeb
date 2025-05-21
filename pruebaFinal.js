document.querySelector('#multiplicar').onclick= function (){
  crearTablaMutiplicacion()
}

function crearTablaMutiplicacion(){
  alert('hola')
  let numero = document.querySelector('#denominador').value
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML=""

  let errores = ""

  if(isNaN(numero)){
    errores += "Tiene que elegir un numero"
  }
  if(numero<0){
    errores += " No tiene que ser negativo"
  }


  // crear una tabla 
    let tabla = document.createElement('table')
    for(let i=1; i<=10; i++){
      let fila = document.createElement('tr')

      let celda = document.createElement('td')

      celda.textContent=`${numero} X ${i} = ${numero * i}`

      fila.appendChild(celda)
      tabla.appendChild(fila)

    }
    resultado.appendChild(tabla)
}

 /**Ejercicio 2 */

       // Asignar el evento al botón, no al input de color
    document.querySelector('#cambiocolor').onclick = cambiarColor;

    function cambiarColor() {
      
      // Recuperar el color seleccionado
      let color = document.querySelector('#color').value;
      console.log(color)
      // Cambiar el color del fondo del div
      document.querySelector('#js2').style.backgroundColor = color;
    }

/** Ejercicio 3 */

let animaciones= document.querySelectorAll('img')
console.log(animaciones)

animaciones.forEach(animacion=> animacion.onclick = hacerAnimacion )

function hacerAnimacion(ev){
ev.target.classList.add('girar');

}

/** Ejercicio 4 */
let boton = document.querySelector('button').onclick = function () {
      validarFormulario();
    };

    function validarFormulario(event) {
      // limpiar mensaje anterior
      document.querySelector('#datos').value = '';

      // recuperar los datos de los inputs y valores
      let textoInput = document.querySelector('#texto');
      let numeroInput = document.querySelector('#number');

      let texto = textoInput.value.trim().replace(/\s+/g, ' ');
      let numero = Number(numeroInput.value);

      // Recuperar el valor seleccionado de los radios
      let checks = '';
      let radioSeleccionado = document.querySelector('input[name="checks"]:checked');
      if (radioSeleccionado) {
        checks = radioSeleccionado.value;
      }

      if (event) {
        event.preventDefault();
      }

      try {
        let errores = '';
        if (!texto) {
          errores += 'El texto es obligatorio\n';
        }
        if (!numero) {
          errores += 'El número es obligatorio\n';
        }
        if (!checks) {
          errores += 'Debes seleccionar una opción de radio\n';
        }
        if (errores) {
          throw errores;
        }
      } catch (errores) {
        alert(errores);
        return;
      }

      // confeccionar el mensaje
      let frase = `${texto} / ${numero} / ${checks}`;

      // enviar el mensaje al formulario
      let datos = document.querySelector('#mensaje');
      datos.value = frase;
    }


    function evaluarAlumno(event) {
      event.preventDefault(); // Evita que se recargue la página

      let notaInput = document.querySelector('#nota');
      notaInput.value.trim()
      let nota = Number(notaInput.value.trim());
      let mensajeInput = document.querySelector('#mensaje');

      try{
        if (notaInput === '' || isNaN(nota)) {
        alert('Introduce un número válido entre 0 y 10');
        mensajeInput.value = '';
        return;
      }

      if (nota < 0 || nota > 10) {
        alert('La nota debe estar entre 0 y 10');
        mensajeInput.value = '';
        return;
      }

      let mensaje = '';
      if (nota < 5) {
        mensaje = 'No Aprobado';
      } else {
        mensaje = 'Aprobado';
      }

      mensajeInput.value = mensaje;
      }catch (error){
        alert(error)
      }
    }