export function agregarMayuscula(nombre) {
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

export function existeDescripcion(descripcion) {
   if (descripcion === '') {
      return 'No agregaste ninguna descripción';
   } else {
      return descripcion;
   }
}