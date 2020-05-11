import React, { useState, useEffect } from 'react';
import ListaTareas from './components/ListaTareas';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';

function App() {

   // LocalStorage
   let tareasIniciales = JSON.parse(localStorage.getItem('tareas'));
   if (!tareasIniciales) {
      tareasIniciales = [];
   }
   let tareasRealizadas = JSON.parse(localStorage.getItem('tareasRealizadas'));
   if (!tareasRealizadas) {
      tareasRealizadas = [];
   }

   // State inicial del arreglo de tareas
   const [tareas, actualizarTareas] = useState(tareasIniciales);

   // State inicial de tareas realizadas
   const [tareasrealizadas, listarRealizadas] = useState(tareasRealizadas);

   useEffect(() => {
      if (tareasIniciales || tareasRealizadas) {
         localStorage.setItem('tareas', JSON.stringify(tareas));
         localStorage.setItem('tareasRealizadas', JSON.stringify(tareasrealizadas));
      } else {
         localStorage.setItem('tareas', JSON.stringify([]));
         localStorage.setItem('tareasRealizadas', JSON.stringify([]));
      }
   }, [tareasIniciales, tareas, tareasRealizadas, tareasrealizadas]);

   // Agregar una tarea
   const agregarTarea = tarea => {
      actualizarTareas([...tareas, tarea]);
   }

   // Eliminar una tarea
   const eliminarTarea = id => {
      const tareasRestantes = tareas.filter(tarea => id !== tarea.id);
      actualizarTareas(tareasRestantes);

      // Listar tareas realizadas
      const tareaRealizada = tareas.filter(tarea => id === tarea.id)[0];
      listarRealizadas([...tareasrealizadas, tareaRealizada]);
   }

   // Vaciar lista de tareas realizadas
   const vaciarListaRealizadas = () => {
      listarRealizadas([]);
   }

   return (
      <div className="container">
         <h2 className="my-3 text-center">Task Manager</h2>
         <div className="row mb-3">
            <div className="col-md-12">
               <Formulario
                  agregarTarea={agregarTarea}
               />
            </div>
         </div>

         <div className="row mensaje-lista">
            {tareas.length === 0 && tareasrealizadas.length === 0 ?
               <Mensaje />
               :
               <ListaTareas
                  tareas={tareas}
                  eliminarTarea={eliminarTarea}
                  tareasrealizadas={tareasrealizadas}
                  vaciarListaRealizadas={vaciarListaRealizadas}
               />}
         </div>

         <div className="row my-2 d-flex justify-content-center">
            <p className="text-muted">&copy; Sebaavt95</p>
         </div>
      </div>
   );
}

export default App;