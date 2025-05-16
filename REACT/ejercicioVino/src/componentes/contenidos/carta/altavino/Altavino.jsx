import { useForm } from 'react-hook-form'
import React from 'react'
import './Altavino.css'

const Altavino = () => {
  const {register, handleSubmit, formState: {errors}, setFocus, reset} = useForm()
   function recogerDatos(datos) {
    //recoger datos formulario
    console.table(datos)
    //enviar los datos a un servidor 
    reset()
    setFocus('nombre')
  }
  return (
    <div className='row'>
      <div className='column col-8'>
        <form onSubmit={handleSubmit(recogerDatos)}>
          <div className="mb-3">
            <label className="form-label">NOMBRE</label>
            <input type="text" className="form-control uppercase" placeholder="NOMBRE" autoFocus  {...register('nombre', {required:true,minLength:2,maxLength:30})}/>
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

          <div className="mb-3">
            <label className="form-label">País</label>
            <input type="text" className="form-control capitalize" placeholder="País"  {...register('pais', { required: true, minLength: 2, maxLength: 30 })}  />
          </div>
          {
            errors.pais?.type === 'required' &&
            <div className='errores'>
              El país es obligatorio
            </div>
          }
          {
            errors.pais?.type === 'minLength' &&
            <div className='errores'>
              El país no puede tener menos de 2 caracteres
            </div>
          }
          {
            errors.pais?.type === 'maxLength' &&
            <div className='errores'>
              El país no puede tener más de 30 caracteres
            </div>
          }
          <div className="mb-3">
            <label className="form-label">Región</label>
            <input type="text" className="form-control capitalize" placeholder="Región" {...register('region', { required: true, minLength: 2, maxLength: 30 })}/>
          </div>
           {
            errors.region?.type === 'required' &&
            <div className='errores'>
              La región es obligatorio
            </div>
          }
          {
            errors.region?.type === 'minLength' &&
            <div className='errores'>
              La región no puede tener menos de 2 caracteres
            </div>
          }
          {
            errors.region?.type === 'maxLength' &&
            <div className='errores'>
              La región no puede tener más de 30 caracteres
            </div>
          }
          <div className="mb-3">
            <label className="form-label">Uvas</label>
            <input type="text" className="form-control capitalize" placeholder="Uvas"  {...register('uvas', { required: true, minLength: 2, maxLength: 30 })} />
          </div>
          {
            errors.uvas?.type === 'required' &&
            <div className='errores'>
              La uva es obligatorio
            </div>
          }
          {
            errors.uvas?.type === 'minLength' &&
            <div className='errores'>
              La uva no puede tener menos de 2 caracteres
            </div>
          }
          {
            errors.uvas?.type === 'maxLength' &&
            <div className='errores'>
              La uva no puede tener más de 30 caracteres
            </div>
          }
          <div className="mb-3">
            <label className="form-label">Año</label>
            <input type="number" min='1800' max='2100' className="form-control capitalize" placeholder="Año" {...register('anyo', {required:true,min: 1800, max: 2100 })} />
          </div>
          {
            errors.anyo?.type === 'required' &&
            <div className='errores'>
              El año es obligatorio
            </div>
          }
          {
            errors.anyo?.type === 'min' &&
            <div className='errores'>
              El año no puede ser menor a 1800
            </div>
          }
          {
            errors.anyo?.type === 'max' &&
            <div className='errores'>
              El año no puede ser mayor a 2100
            </div>
          }
          <div className="mb-3">
              <label className="form-label">Imagen</label>
              <input type="file" className="form-control" accept='image/*'/>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea rows='8' className="form-control capitalize"></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success">Alta vino</button>
            <button type="reset" className="btn btn-warning">Limpiar</button>
          </div>
        </form>
      </div>
      <div className='column col-4'>
          <br></br>
          <img src='./img/sinbotella.jpg' alt="previsualizar" id='previsualizar'/>
      </div>
    </div>
  )
}

export default Altavino