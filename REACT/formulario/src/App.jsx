import { useForm } from 'react-hook-form'
import './App.css'
import { useState } from 'react'

function App() {

  const { register, handleSubmit, formState:{errors}, watch, reset,setFocus} = useForm()
   const [persona,setPersona]=useState({
      nombre:'Vernita Green',
      edad:39,
      email:'vernita@mail.com',
      telefono: 999666999,
   })
  function recogerDatos(datos) {
    //recoger datos formulario
    console.table(datos)
    //enviar los datos a un servidor 
    reset()
    setFocus('nombre')
  }

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit(recogerDatos)}>
          <div className='pregunta'>
            <label htmlFor='nombre'>Nombre: </label>
            <input id='nombre' placeholder='Escribe tu nombre' autoFocus {...register('nombre', {required:true,minLength:2,maxLength:30})} defaultValue ={persona.nombre} />
          </div>
          {
            errors.nombre?.type === 'required' &&
            <div className='errores'>
              El nombre es obligatorio
            </div>
          }
          {
            errors.nombre?.type ==='minLength'&&
            <div className='errores'>
            Nombre no puede tener menos de 2 caracteres
          </div>
          }
          
          {
            errors.nombre?.type ==='maxLength'&&
            <div className='errores'>
            Nombre no puede tener más de 30 caracteres
          </div>
          }
          
          <div className='pregunta'>
            <label htmlFor='edad'>Edad: </label>
            <input type='number' id='edad' placeholder='Escribe tu edad' {...register('edad',{maxLength:40})} />
          </div>
          {
            errors.number?.type== 'maxLength' &&
            <div className='errores'>
            El email no ha de ser mayor a 30 caracteres
          </div>
          }
          <div className='pregunta'>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' placeholder='Escribe tu email' {...register('email')} />
          </div>
          <div className='pregunta'>
            <label htmlFor='telefono'>Teléfono: </label>
            <input type='tel' id='telefono' placeholder='Escribe tu telefono' {...register('telefono')} />
          </div>
          <div className='pregunta'>
            <label></label>
            <input type='submit' />
          </div>
        </form>
        <hr />
        
        {watch('nombre')} &&
        <p>Me llamo {watch('nombre')}, mi edad es {watch('edad')}, y mi teléfono es el {watch('telefono')}</p>
      </div>
    </>
  )
}

export default App
