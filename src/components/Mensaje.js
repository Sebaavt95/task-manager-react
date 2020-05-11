import React from 'react'

const Mensaje = () => (
   <div className="alert alert-dismissible alert-secondary m-0">
      <h4 className="alert-heading">No tenés tareas pendientes...</h4>
      <p className="mb-0"><a href="#input-tarea">Agregá una!</a></p>
   </div>
);

export default Mensaje;