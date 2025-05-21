/**** Ejercicio 1: Bucles *****/
//asignar evento
document.querySelector('#multiplicar').onclick= function (){
  crearTablaMutiplicacion()
}
function crearTablaMutiplicacion() {
  // Recuperar datos
  let numeroInput = document.querySelector('#denominador');
  let numero = numeroInput.value.trim();
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = "";

  let errores = "";

  // Validación
  if (numero === "") {
    errores = "Debe ingresar un número.";
  } else if (isNaN(numero)) {
    errores = "Tiene que ingresar un valor numérico.";
  } else if (Number(numero) < 0) {
    errores = "No puede ser un número negativo.";
  }

  // Mostrar error si hay alguno
  if (errores !== "") {
    resultado.textContent = errores;
    return; 
  }

  // Convertir a número para operaciones matemáticas
  numero = Number(numero);

  // Crear la tabla
  let tabla = document.createElement('table');
  for (let i = 1; i <= 10; i++) {
    let fila = document.createElement('tr');
    let celda = document.createElement('td');
    celda.textContent = `${numero} x ${i} = ${numero * i}`;
    fila.appendChild(celda);
    tabla.appendChild(fila);
  }

  resultado.appendChild(tabla);
}


/**** Ejercicio 2 : Estilos dinámicos *****/

// Asignar el evento al botón, no al input de color
document.querySelector('#cambiocolor').onclick = cambiarColor;

function cambiarColor() {
  // Recuperar el color seleccionado
  let color = document.querySelector('#color').value;
  console.log(color)
  // Cambiar el color del fondo del div
  document.querySelector('#js2').style.backgroundColor = color;
}

/**** Ejercicio 3 : eventos dinámicos *****/

  let animaciones= document.querySelectorAll('img')
  console.log(animaciones)

  animaciones.forEach(animacion=> animacion.onclick = hacerAnimacion )

  function hacerAnimacion(ev){
  ev.target.classList.add('girar');

  }

/**** Ejercicio 4 : formulario *****/
  let validar = document.querySelector('#validar').onclick = function () {
    validarFormulario();
  };

  function validarFormulario(event) {
    // limpiar mensaje anterior 
    document.querySelector('#datos').value = '';
    //alert('hola')

    //recuperar los datos de los inputs y valores
    let textoInput = document.querySelector('#texto')
    let numeroInput=document.querySelector('#numero')

    let texto= textoInput.value.trim().replace(/\s+/g, ' ')
    let numero = Number(numeroInput.value)

    // Recuperar el valor seleccionado de los radios
    let checks = '';
    let radioSeleccionado = document.querySelector('input[name="radio"]:checked');
    if (radioSeleccionado) {
      checks = radioSeleccionado.value;
    }

    // limpiar estilos anteriores
    textoInput.style.backgroundColor = 'white';
    numeroInput.style.backgroundColor = 'white';
      try{
        let errores=''
        if(!texto){
          errores +='El texto es obligatorio\n'
          textoInput.style.backgroundColor = 'yellow';
        }
        if(!numero){
        errores +='El número es obligatorio\n'
        numeroInput.style.backgroundColor = 'yellow';
        }
        if (!checks) {
          errores += 'Debes seleccionar una opción de radio\n';
        }
        if (errores) {
          throw (errores)
        }
      } catch(errores){
        alert(errores)
        return;
      }
    //confeccionar el mensaje 
    let frase=`${texto} / ${numero}/ ${checks}`
    // enviar el mensaje al formulario
    document.querySelector('#datos').value = frase;
    let mensaje = document.querySelector('#datos');
    mensaje.value = frase;
    mensaje.style.color = 'blue';

  }

/**** Ejercicio 5 : Condicionales *****/
  document.querySelector('#evaluar').onclick =evaluarAlumno
  function evaluarAlumno(){
    //alert('hola')
    let notaInput=document.querySelector('#nota')
    let nota=Number(notaInput.value)
    let resultadoInput = document.querySelector('#result'); 

    try{
      let mensaje = ''

      if(isNaN(nota) || nota === ''){
        mensaje ='nota no númerica'
      }

      if(nota<0|| nota>10){
        mensaje='nota fuera de rango'
      } else if(nota<5){
        mensaje = 'suspendido'
      }else if(nota>=5 && nota<7){
        mensaje = 'aprobado'
      }else if(nota>=7 && nota<9){
        mensaje = 'notable'
      }else if(nota === 9){
        mensaje = 'excelente'
      }else if(nota===10){
        mensaje='matricula'
      }  

      resultadoInput.value = mensaje

    }catch(error){
      alert(error)
    }

  }

  


  

