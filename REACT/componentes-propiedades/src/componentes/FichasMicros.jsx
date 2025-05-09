import React from 'react'

function FichasMicros({datos,total1}) {
  console.log(datos)
  //importar una imagen de forma dinámica
  const imagen = require(`../img/${datos.imagen}`)

  function comprar(ev){
    total1((t)=> t + datos.precio) 
    // nos trae el valor de ese momento de la variable con la función callback, y esto es sumar lo que has seleccionado

    //eliminar la ficha comprado
    //1.Buscar el nodo a ocultar
    //let nodo = ev.target.parentNode.parentNode
    let nodo = ev.target.closest('.ficha') // para que vaya donde el padre del nodo
    //2.ocultar el nodo
      //nodo.style.visibility ='hidden'
      //nodo.style.display='none'
    nodo.remove() // para eliminar el nodo
  }

  return (
      <div className='ficha'>
        <img src={imagen} alt='imagen'/>
        <div className='datos'>
        <h4>{datos.micro}</h4>
        <p >Precio: {datos.precio}€</p>
        <button onClick={comprar}>Comprar</button>
        </div>
      </div>
  )
}

export default FichasMicros