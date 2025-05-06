  const amount= document.querySelector('#amount')
  const bet= document.querySelector('#bet')
  const win = document.querySelector('#win').value
  
const premios= {
  0:1,
  1:2,
  2:3,
  3:5,
  4:10,
  5:20,
  6:100,
  7:300,
  8:500,
  9:1000
}
//Activar eventos
const spin=document.querySelector('#spin')
spin.onclick = nuevaJugada 

function nuevaJugada(){
  //recuperar los datos
  let amountInput= parseFloat(document.querySelector('#amount').value)
  let betInput = Number(document.querySelector('#bet').value)
  const reelImg =[
    document.querySelector('#reel1'),
    document.querySelector('#reel2'),
    document.querySelector('#reel3')
  ]
  //validar datos
  let mensaje
  if(amountInput<betInput || isNaN(amountInput)){
    mensaje='La apuesta tiene que ser mayor o igual a la apuesta seleccionada'
    return
  }
  //activar eventos y vaciar
  const respuesta=[
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ]
  //Bucle para recorrer las imágenes del array
  for (let i=0; reelImg<3; i++){
    reelImg.src=`img/${respuesta}`
  }


  

  
}