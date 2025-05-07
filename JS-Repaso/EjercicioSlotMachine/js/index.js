//Recuperar elementos del DOM
  const amountInput= document.querySelector('#amount')
  const betInput= document.querySelector('#bet')
  const winOutput = document.querySelector('#win')
  const spinButton=document.querySelector('#spin')
  const reels =[
    document.querySelector('#reel1'),
    document.querySelector('#reel2'),
    document.querySelector('#reel3')
  ]

  //Definir la tabla de premios
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

//Activar eventos:Asignar evento al botón de jugar
spinButton.onclick = nuevaJugada 

function nuevaJugada(){
  //recuperar los datos
  let amount= parseFloat(amountInput.value)
  let bet = Number(betInput.value)
  //validar datos
  if(isNaN(amount)|| amount<bet){
    alert('La cantidad debe ser un número mayor o igual que la apuesta')
    return
  }
  //generar los 3 números aleatorios
  const tirada=[
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ]
  //Bucle para recorrer las imágenes del array
  for (let i=0; i<3; i++){
    reels[i].src=`img/${tirada[i]}.png`
  }
  // Verificar si hay premio 
  const premio= calcularPremio(tirada)

  //actualizar ganancias si hay premio 
  if(premio>0){
    let ganancia =premio*bet

    amount+=ganancia
    winOutput.value=ganancia
  }else{
    winOutput.value=' '
  }

  //restar apuesta

  amount-=bet
  amountInput.value=Math.floor(amount)

  if(amount<bet){
    alert('saldo insuficiente')
    spinButton.disabled = true
  }

  
}

function calcularPremio(tirada){
  const sinWind = tirada.filter (n => n !==9)

  if(sinWind.length === 0){
    //triple wind
    return premios[9]
  }

  const figura = sinWind[0]
  const esPremio = tirada.every (n=> n=== figura || n===9)

  if(esPremio){
    return premios[figura]
  }
  return 0
}