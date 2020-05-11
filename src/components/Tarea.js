import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { agregarMayuscula, existeDescripcion } from '../helpers';

const Tarea = ({ tarea, eliminarTarea }) => {
   return (
      <Fragment>
         <div className="alert alert-dismissible alert-dark">
            <button
               type="button"
               className="close"
               onClick={() => eliminarTarea(tarea.id)}
            >&times;</button>
            <h5><strong>Nombre:</strong> {agregarMayuscula(tarea.nombre)}</h5>
            <p><strong>Descripción:</strong> {existeDescripcion(tarea.descripcion)}</p>
         </div>
      </Fragment>
   );
};

Tarea.propTypes = {
   tarea: PropTypes.object.isRequired,
   eliminarTarea: PropTypes.func.isRequired
}

export default Tarea;