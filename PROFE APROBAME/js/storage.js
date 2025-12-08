/*
  ====================================
  ALMACENAMIENTO DE USUARIOS (LocalStorage)
  ====================================
  Este archivo contiene las funciones para
  guardar y obtener usuarios del localStorage.
  Sirve tanto para login como para registro.
*/

// Función para obtener los usuarios guardados
function obtenerUsuarios() {
  /*
    localStorage.getItem('usuarios')
    
    ¿Qué hace?
    - Obtiene los usuarios guardados de localStorage.
    - Si no existen, devuelve null.
  */
  const usuariosGuardados = localStorage.getItem('usuarios');
  
  // Si existen usuarios, los convertimos a objeto. Si no, inicializamos como array vacío
  return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
}

// Función para guardar usuarios
function guardarUsuarios(usuarios) {
  /*
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    ¿Qué hace?
    - Guarda los usuarios en localStorage.
    - JSON.stringify convierte el objeto a texto.
  */
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}
