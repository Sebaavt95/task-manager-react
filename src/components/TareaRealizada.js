import React from 'react';
import PropTypes from 'prop-types'
import { agregarMayuscula, existeDescripcion } from '../helpers';

const TareaRealizada = ({ tarea }) => {
   return (
      <div className="alert alert-dismissible alert-success">
         <h5><strong>Nombre:</strong> {agregarMayuscula(tarea.nombre)}</h5>
         <p><strong>Descripción:</strong> {existeDescripcion(tarea.descripcion)}</p>
      </div>
   );
}

TareaRealizada.propTypes = {
   tarea: PropTypes.object.isRequired
}

export default TareaRealizada;