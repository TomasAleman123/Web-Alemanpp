/*
  ====================================
  FORMULARIO DE REGISTRO
  ====================================
  Este archivo contiene la lógica para
  validar y procesar el registro de nuevos usuarios.
  Los datos se guardan en localStorage.
*/

document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================================
  // OBTENER ELEMENTOS DEL FORMULARIO DE REGISTRO
  // ===========================================
  
  const registerForm = document.getElementById('registerForm');
  const registerScreen = document.getElementById('registerScreen');
  const dashboardScreen = document.getElementById('dashboardScreen');
  
  
  // ===========================================
  // EVENTO: ENVIAR FORMULARIO DE REGISTRO
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
    // PASO 1: VALIDAR QUE LOS CAMPOS NO ESTÉN VACÍOS
    // ===========================================
    
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
      alert('Por favor, rellena todos los campos');
      return;
    }
    
    
    // ===========================================
    // PASO 2: VALIDAR QUE EL EMAIL TENGA FORMATO CORRECTO
    // ===========================================
    
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!expresionRegular.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }
    
    
    // ===========================================
    // PASO 3: VALIDAR QUE LA CONTRASEÑA TENGA LONGITUD MÍNIMA
    // ===========================================
    
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    
    // ===========================================
    // PASO 4: VALIDAR QUE LAS CONTRASEÑAS COINCIDAN
    // ===========================================
    
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden. Intenta de nuevo');
      return;
    }
    
    
    // ===========================================
    // PASO 5: VALIDAR QUE EL USUARIO NO EXISTA
    // ===========================================
    
    const usuarios = obtenerUsuarios();
    const usuarioExiste = usuarios.some(u => u.email === email || u.username === username);
    
    if (usuarioExiste) {
      alert('Este email o nombre de usuario ya está registrado');
      return;
    }
    
    
    // ===========================================
    // PASO 6: GUARDAR EL NUEVO USUARIO
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
  
});

/*
  ====================================
  VALIDACIONES IMPLEMENTADAS:
  ====================================
  
  1. Campos no vacíos
  2. Email válido (debe tener @)
  3. Contraseña mínimo 6 caracteres
  4. Las contraseñas deben coincidir
  5. No permite registrar el mismo email o username dos veces
  6. Guarda los datos en localStorage (navegador)
*/
