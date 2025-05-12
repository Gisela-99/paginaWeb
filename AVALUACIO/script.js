

let boton=document.querySelector('#boton').onclick = function(){
  validarFormulario()
}

function validarFormulario(event){
  
  // limpiar mensaje anterior 
  document.querySelector('#mensaje').value = '';
  //recuperar datos
  let texto=document.querySelector('#texto').value.trim().replace(/\s+/g, ' ')
  let numero= Number(document.querySelector('#number').value)
  let checks= document.querySelector('[name=checks]:checked')?.value

  if(event){
    event.preventDefault()
  }
  try{
    let errores=''
      if(!texto){
        errores +='El texto es obligatorio\n'
      }
      if(!numero){
        errores +='El número es obligatorio\n'
      }

      if (errores) {
        throw (errores)
      }
  } catch(errores){
    alert(errores)
  }
 
  //confeccionar el mensaje 
  let frase=`${texto} / ${numero}/  ${checks}`
  // enviar el mensaje al formulario
  document.querySelector('#mensaje').value = frase;

}

function inputColores (ev){
  ev.target
  let inputs = document.querySelectorAll('input').value
  
    if(!inputs){
      inputs.map(input=>{
         inputs.style.backgroundColor="yellow"
      })
     
    }else{
      inputs.style.backgroundColor="white"
    }

  let frase=`${texto} / ${numero} / ${checks}`

}

document.querySelector('#color').oninput = cambiarColor
function cambiarColor(){
  //recuperar el color seleccionado
  let color= document.querySelector('#color').value
  //cambiar el color body 
  document.querySelector('#fondo').style.backgroundColor = color
  document.querySelector('#fondo').style.border= color
}

