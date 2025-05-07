//inicializar variables globales
  let impuesto = 0
  let apuesta = 0
  let ganancias = 0

//variables con los elementos del DOM que necesitaremos modificar
  const amountInput= document.querySelector('#amount')
  const betInput= document.querySelector('#bet')
  const winOutput = document.querySelector('#win')
  const spinButton=document.querySelector('#spin')
  
  //array para guardar los premios y las figuras en casa tirada
  //              0 1 2 3 4   5   6  7   8    9
  const premios= [1,2,3,5,10,20,100,300,500,1000]
  //1-1-1
  let figuras 

  //activar el botón para girar los rodillos
  spinButton.onclick = jugada 

  function jugada(){
    //alert('ok')
    //recuperar el importe 
    importe = parseInt(amountInput.value)
    apuesta = Number(betInput.value)

    //comprobar que el importe puede cubrir la apuesta
    if(isNaN(importe)||importe<apuesta){
      alert('Importe insuficiente')
      return
    }

    //generar 3 números aleatorios y mostrar las figuras que corresponda a cada uno de ellos
    figuras =[0,0,0,0,0,0,0,0,0,0]

    for(let i=1; i<=3; i++){
      numero = Math.floor(Math.random()*10)
      document.querySelector(`#reel${i}`).setAttribute('src', `img/${numero}.png`)
      //sumar 1 al contador de figura
      figuras[numero]++
    }
    //comprobar si las figuras están en la tabla de premios (teniendo en cuenta el comodín)
    ganancias = 0
    for(let p=0; p < figuras.length; p++){
      //tres figuras iguales O dos figuras iguales + comodín O una figura y dos comodines 
      if(figuras[p]==3 ||(figuras[p]==2 && figuras[9]==1) ||(figuras[p]==1 && figuras[9]==2) ){
        ganancias = premios[p] * apuesta
          break 
        }
      /* OPCIÓN 2
      // si hay tres figuras iguales 
        if(figuras[p]==3 ){
          ganancias = premios[p]
          break //interrumpe el bucle for
        }else if(figuras[p]==2 && figuras[9]==1){ 
          // dos figuras iguales + comodín
          ganancias = premios[p]
          break 
        } else if(figuras[p]==1 && figuras[9]==2){
          // una figura y dos comodines 
          ganancias=premios[p]
          break
        }*/
      
    }
    //si hay premio sumar el importe del premio a la cantidad pendiente
    importe += ganancias
    //Siempre hay que restar el importe de la apuesta de la cantidad pendiente
    importe -= apuesta
    //trasladar los nuevos datos al documento 
    amountInput.value =importe
    winOutput.value=ganancias
  }