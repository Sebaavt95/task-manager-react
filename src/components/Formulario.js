import React, { Fragment, useState } from 'react'
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Formulario = ({ agregarTarea }) => {

   const [tarea, crearTarea] = useState({
      nombre: '',
      descripcion: ''
   })

   const [error, mostrarError] = useState(false);

   const leerTarea = e => {
      // { nombre: e.target.value }

      crearTarea({
         ...tarea,
         [e.target.name]: e.target.value
      });
   }

   const guardarTarea = e => {
      e.preventDefault();

      // validar formulario
      if (nombre === '') {
         mostrarError(true);
         return;
      }
      mostrarError(false);

      tarea.id = shortid.generate();

      // agregar tarea al arreglo de tareas
      agregarTarea(tarea);

      // reiniciar el formulario
      crearTarea({
         nombre: '',
         descripcion: ''
      });
   }

   // Extraer propiedad del objeto
   const { nombre, descripcion } = tarea;

   return (
      <Fragment>

         {error ? <p className="alert alert-danger">La tarea necesita al menos un nombre</p> : null}

         <form
            onSubmit={guardarTarea}
         >
            <div className="form-group row">
               <label htmlFor="input-tarea" className="col-sm-2 col-form-label">Nombre</label>
               <div className="col-sm-10">
                  <input
                     type="text"
                     id="input-tarea"
                     className="form-control"
                     placeholder="Ej. Ir a comprar"
                     name="nombre"
                     onChange={leerTarea}
                     value={nombre}
                  />
               </div>
            </div>
            <div className="form-group row">
               <label htmlFor="input-descripcion" className="col-sm-2 col-form-label">Descripción</label>
               <div className="col-sm-10">
                  <textarea
                     rows="3"
                     id="text-description"
                     className="form-control"
                     name="descripcion"
                     onChange={leerTarea}
                     value={descripcion}
                  ></textarea>
               </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">Agregar tarea</button>
         </form>
      </Fragment>
   );
}

Formulario.propTypes = {
   agregarTarea: PropTypes.func.isRequired
}

export default Formulario;