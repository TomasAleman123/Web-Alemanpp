/*
  ====================================
  WEB ALEMANPP - SCRIPT DE LOGIN Y REGISTRO
  ====================================
  Este archivo JavaScript contiene la lógica
  para validar y procesar el formulario de login y registro.
  Cada función está explicada en detalle.
*/

// ===========================================
// ALMACENAMIENTO DE USUARIOS (LocalStorage)
// ===========================================

/*
  LocalStorage es una forma de guardar datos en el navegador.
  Los datos persisten incluso después de cerrar el navegador.
  
  Aquí guardamos los usuarios registrados para que se puedan loguear después.
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


// ===========================================
// 1. ESPERAR A QUE EL HTML CARGUE COMPLETAMENTE
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================================
  // 1A. OBTENER TODOS LOS ELEMENTOS
  // ===========================================
  
  const welcomeScreen = document.getElementById('welcomeScreen');
  const nextButton = document.getElementById('nextButton');
  const choiceScreen = document.getElementById('choiceScreen');
  const loginChoiceBtn = document.getElementById('loginChoiceBtn');
  const registerChoiceBtn = document.getElementById('registerChoiceBtn');
  const loginScreen = document.getElementById('loginScreen');
  const registerScreen = document.getElementById('registerScreen');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const backToChoice = document.getElementById('backToChoice');
  const backToChoice2 = document.getElementById('backToChoice2');
  const dashboardScreen = document.getElementById('dashboardScreen');
  const logoutButton = document.getElementById('logoutButton');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const logoutModal = document.getElementById('logoutModal');
  const confirmLogout = document.getElementById('confirmLogout');
  const cancelLogout = document.getElementById('cancelLogout');
  
  // ===========================================
  // 1B. BOTÓN "SIGUIENTE" DE BIENVENIDA
  // ===========================================
  
  nextButton.addEventListener('click', function() {
    welcomeScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1C. BOTÓN "INICIAR SESIÓN" EN SELECCIÓN
  // ===========================================
  
  loginChoiceBtn.addEventListener('click', function() {
    choiceScreen.style.display = 'none';
    loginScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1D. BOTÓN "REGISTRARSE" EN SELECCIÓN
  // ===========================================
  
  registerChoiceBtn.addEventListener('click', function() {
    choiceScreen.style.display = 'none';
    registerScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1E. BOTONES "VOLVER"
  // ===========================================
  
  backToChoice.addEventListener('click', function(e) {
    e.preventDefault();
    loginScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  backToChoice2.addEventListener('click', function(e) {
    e.preventDefault();
    registerScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1F. BOTÓN "CERRAR SESIÓN"
  // ===========================================
  
  logoutButton.addEventListener('click', function() {
    // Mostramos el modal de confirmación
    logoutModal.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1G. BOTÓN "SÍ" EN EL MODAL (CONFIRMAR LOGOUT)
  // ===========================================
  
  confirmLogout.addEventListener('click', function() {
    // Ocultamos el modal y el dashboard
    logoutModal.style.display = 'none';
    dashboardScreen.style.display = 'none';
    // Volvemos a la pantalla de bienvenida
    welcomeScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 1H. BOTÓN "NO" EN EL MODAL (CANCELAR LOGOUT)
  // ===========================================
  
  cancelLogout.addEventListener('click', function() {
    // Solo ocultamos el modal y volvemos al dashboard
    logoutModal.style.display = 'none';
  });
  
  
  // ===========================================
  // 2. FORMULARIO DE REGISTRO
  // ===========================================
  
  registerForm.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    /*
      Obtenemos los valores del formulario de registro.
    */
    
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    
    // ===========================================
    // 2A. VALIDAR QUE LOS CAMPOS NO ESTÉN VACÍOS
    // ===========================================
    
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
      alert('Por favor, rellena todos los campos');
      return;
    }
    
    
    // ===========================================
    // 2B. VALIDAR QUE EL EMAIL TENGA FORMATO CORRECTO
    // ===========================================
    
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!expresionRegular.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }
    
    
    // ===========================================
    // 2C. VALIDAR QUE LA CONTRASEÑA TENGA LONGITUD MÍNIMA
    // ===========================================
    
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    
    // ===========================================
    // 2D. VALIDAR QUE LAS CONTRASEÑAS COINCIDAN
    // ===========================================
    
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Intenta de nuevo');
      return;
    }
    
    
    // ===========================================
    // 2E. VALIDAR QUE EL USUARIO NO EXISTA
    // ===========================================
    
    const usuarios = obtenerUsuarios();
    const usuarioExiste = usuarios.some(u => u.email === email || u.username === username);
    
    if (usuarioExiste) {
      alert('Este email o nombre de usuario ya está registrado');
      return;
    }
    
    
    // ===========================================
    // 2F. GUARDAR EL NUEVO USUARIO
    // ===========================================
    
    // Creamos un objeto con los datos del nuevo usuario
    const nuevoUsuario = {
      email: email,
      username: username,
      password: password
    };
    
    // Agregamos el nuevo usuario a la lista
    usuarios.push(nuevoUsuario);
    
    // Guardamos los usuarios en localStorage
    guardarUsuarios(usuarios);
    
    // Mostramos un mensaje de éxito
    alert('¡Registro exitoso! Ahora puedes iniciar sesión');
    
    // Limpiamos el formulario
    registerForm.reset();
    
    // Ocultamos la pantalla de registro y mostramos el dashboard
    registerScreen.style.display = 'none';
    dashboardScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 3. FORMULARIO DE LOGIN
  // ===========================================
  
  loginForm.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    /*
      Obtenemos los valores del formulario de login.
    */
    
    const emailOUsuario = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    
    // ===========================================
    // 3A. VALIDAR QUE LOS CAMPOS NO ESTÉN VACÍOS
    // ===========================================
    
    if (emailOUsuario === '' || password === '') {
      alert('Por favor, rellena todos los campos');
      return;
    }
    
    
    // ===========================================
    // 3B. BUSCAR EL USUARIO EN LA BASE DE DATOS
    // ===========================================
    
    const usuarios = obtenerUsuarios();
    
    // Buscamos un usuario que coincida con el email o username y la contraseña
    const usuarioEncontrado = usuarios.find(u => 
      (u.email === emailOUsuario || u.username === emailOUsuario) && 
      u.password === password
    );
    
    
    // ===========================================
    // 3C. VERIFICAR SI EL USUARIO EXISTE
    // ===========================================
    
    if (usuarioEncontrado) {
      // Login exitoso
      alert('¡Bienvenido ' + usuarioEncontrado.username + '! Login exitoso.');
      
      // Limpiamos el formulario
      loginForm.reset();
      
      // Ocultamos la pantalla de login y mostramos el dashboard
      loginScreen.style.display = 'none';
      dashboardScreen.style.display = 'flex';
      
    } else {
      // Usuario o contraseña incorrectos
      alert('Email/Usuario o contraseña incorrectos. Intenta de nuevo.');
    }
  });
  
});

/*
  ====================================
  RESUMEN DEL PROGRAMA
  ====================================
  
  FLUJO DE PANTALLAS:
  1. Bienvenida con logo y botón "Siguiente"
  2. Selección: Dos opciones (Iniciar Sesión / Registrarse)
  3a. Login: Email/Usuario + Contraseña
  3b. Registro: Email + Usuario + Contraseña + Confirmar
  
  ALMACENAMIENTO:
  - Los usuarios registrados se guardan en localStorage (navegador).
  - Se pueden usar para loguear después.
  
  VALIDACIONES:
  - Email válido (debe tener @)
  - Contraseña mínimo 6 caracteres
  - Las contraseñas de registro deben coincidir
  - No permite registrar el mismo email dos veces
  - Login valida contra usuarios guardados
  
  ====================================
  CREDENCIALES DE PRUEBA:
  ====================================
  Email: usuario@example.com
  Contraseña: 123456
  
  (O registra un nuevo usuario para pruebas)
*/