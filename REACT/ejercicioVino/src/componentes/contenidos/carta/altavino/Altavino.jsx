import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import './Altavino.css'
import API from '../../../../entorno/api';

const Altavino = () => {
  // Estados para el formulario y la imagen
  const [imagenPreview, setImagenPreview] = useState('./img/sinbotella.jpg');
  
  // Obtenemos las funciones y estado de react-hook-form
  const { register, handleSubmit, formState: { errors }, setFocus, reset } = useForm();

  const recogerDatos = (datos) => {
    // Crear un objeto FormData
  const formData = new FormData();

  // Agregar datos del formulario
  formData.append('nombre', datos.nombre);
  formData.append('pais', datos.pais);
  formData.append('region', datos.region);
  formData.append('uvas', datos.uvas);
  formData.append('anyo', datos.anyo);
  formData.append('descripcion', datos.descripcion);

  // Agregar la imagen si existe
  if (datos.imagen[0]) {
    formData.append('imagen', datos.imagen[0].name);
     formData.append('imagenbmp', datos.imagen[0])
  }
    // Mostrar los datos en la consola (en producción esto debería ser un POST a un servidor)
    console.table(datos);
    
    // Restablecemos el formulario y enfocamos en el campo 'nombre' después de enviar
    reset();
    setFocus('nombre');

    // Aquí se podría hacer la llamada a la API, por ejemplo:
    fetch(API, 
      { method: 'POST',
        body: formData, 

      })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));
  };

  // Previsualizar la imagen seleccionada
  const handleImageChange = (e) => {
  const file = e.target.files[0]; // Obtener el archivo seleccionado
  console.log(file); // Verificar el archivo en la consola

  if (file) {
    // Crear un URL temporal para el archivo
    const objectURL = URL.createObjectURL(file);
    console.log(objectURL); // Verifica la URL creada en la consola
    setImagenPreview(objectURL); // Actualizar el estado para mostrar la imagen
  } else {
    setImagenPreview('/img/sinbotella.jpg'); // Restaurar la imagen por defecto si no hay archivo
  }
};


  return (
    <div className='row'>
      <div className='column col-8'>
        <form onSubmit={handleSubmit(recogerDatos)}>
          <div className="mb-3">
            <label className="form-label">NOMBRE</label>
            <input
              type="text"
              className="form-control uppercase"
              placeholder="NOMBRE"
              autoFocus
              {...register('nombre', { required: true, minLength: 2, maxLength: 30 })}
            />
          </div>
          {errors.nombre?.type === 'required' && (
            <div className='errores'>El nombre es obligatorio</div>
          )}
          {errors.nombre?.type === 'minLength' && (
            <div className='errores'>Nombre no puede tener menos de 2 caracteres</div>
          )}
          {errors.nombre?.type === 'maxLength' && (
            <div className='errores'>Nombre no puede tener más de 30 caracteres</div>
          )}

          <div className="mb-3">
            <label className="form-label">País</label>
            <input
              type="text"
              className="form-control capitalize"
              placeholder="País"
              {...register('pais', { required: true, minLength: 2, maxLength: 30 })}
            />
          </div>
          {errors.pais?.type === 'required' && (
            <div className='errores'>El país es obligatorio</div>
          )}
          {errors.pais?.type === 'minLength' && (
            <div className='errores'>El país no puede tener menos de 2 caracteres</div>
          )}
          {errors.pais?.type === 'maxLength' && (
            <div className='errores'>El país no puede tener más de 30 caracteres</div>
          )}

          <div className="mb-3">
            <label className="form-label">Región</label>
            <input
              type="text"
              className="form-control capitalize"
              placeholder="Región"
              {...register('region', { required: true, minLength: 2, maxLength: 30 })}
            />
          </div>
          {errors.region?.type === 'required' && (
            <div className='errores'>La región es obligatoria</div>
          )}
          {errors.region?.type === 'minLength' && (
            <div className='errores'>La región no puede tener menos de 2 caracteres</div>
          )}
          {errors.region?.type === 'maxLength' && (
            <div className='errores'>La región no puede tener más de 30 caracteres</div>
          )}

          <div className="mb-3">
            <label className="form-label">Uvas</label>
            <input
              type="text"
              className="form-control capitalize"
              placeholder="Uvas"
              {...register('uvas', { required: true, minLength: 2, maxLength: 30 })}
            />
          </div>
          {errors.uvas?.type === 'required' && (
            <div className='errores'>La uva es obligatoria</div>
          )}
          {errors.uvas?.type === 'minLength' && (
            <div className='errores'>La uva no puede tener menos de 2 caracteres</div>
          )}
          {errors.uvas?.type === 'maxLength' && (
            <div className='errores'>La uva no puede tener más de 30 caracteres</div>
          )}

          <div className="mb-3">
            <label className="form-label">Año</label>
            <input
              type="number"
              min="1800"
              max="2100"
              className="form-control capitalize"
              placeholder="Año"
              {...register('anyo', { required: true, min: 1800, max: 2100 })}
            />
          </div>
          {errors.anyo?.type === 'required' && (
            <div className='errores'>El año es obligatorio</div>
          )}
          {errors.anyo?.type === 'min' && (
            <div className='errores'>El año no puede ser menor a 1800</div>
          )}
          {errors.anyo?.type === 'max' && (
            <div className='errores'>El año no puede ser mayor a 2100</div>
          )}

          <div className="mb-3">
            <label className="form-label">Imagen</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              {...register('imagen')}
              onChange={handleImageChange} // Llama a la función para previsualizar la imagen
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              rows="8"
              className="form-control capitalize"
              {...register('descripcion')}
            ></textarea>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">Alta vino</button>
            <button type="reset" className="btn btn-warning">Limpiar</button>
          </div>
        </form>
      </div>

      {/* Mostrar imagen previsualizada */}
      <div className="column col-4">
        <br />
        <img src={imagenPreview} alt="previsualizar" id="previsualizar" />
      </div>
    </div>
  );
};

export default Altavino;
