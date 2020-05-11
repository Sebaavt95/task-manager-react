import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import Tarea from './Tarea';
import TareaRealizada from './TareaRealizada';

const ListaTareas = ({ tareas, eliminarTarea, tareasrealizadas, vaciarListaRealizadas }) => {

   return (
      <Fragment>
         <div className="col-md-6 tareas pendientes">
            <h4 className="text-center">Tareas a realizar</h4>
            {tareas.length !== 0 ?
               <div className="jumbotron m-0 pb-3">
                  {tareas.map(tarea => (
                     <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        eliminarTarea={eliminarTarea}
                     />
                  ))}
               </div> :
               <div className="jumbotron m-0 pb-5">
                  <div className="card border-primary">
                     <div className="card-body">
                        <p className="card-title text-center m-0"><em>Sin tareas pendientes</em></p>
                     </div>
                  </div>
               </div>
            }
         </div>
         <div className="col-md-6 tareas">
            <h4 className="text-center">Tareas realizadas</h4>
            <Fragment>
               {tareasrealizadas.map(tarea => (
                  <TareaRealizada
                     key={tarea.id}
                     tarea={tarea}
                  />
               ))}
               {tareasrealizadas.length !== 0 ?
                  <button
                     type="button"
                     className="btn btn-primary float-right"
                     onClick={vaciarListaRealizadas}
                  >Vaciar lista</button> :
                  <div className="alert alert-dismissible alert-light p-3 m-0">
                     <p className="m-0"><em>Lista vacía</em></p>
                  </div>
               }
            </Fragment>
         </div>
      </Fragment>
   );
}

ListaTareas.propTypes = {
   tareas: PropTypes.array.isRequired,
   eliminarTarea: PropTypes.func.isRequired,
   tareasrealizadas: PropTypes.array.isRequired,
   vaciarListaRealizadas: PropTypes.func.isRequired
}

export default ListaTareas;