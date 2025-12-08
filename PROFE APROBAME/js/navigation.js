/*
  ====================================
  NAVEGACIÓN ENTRE PANTALLAS
  ====================================
  Este archivo contiene la lógica para cambiar
  entre las diferentes pantallas de la aplicación:
  - Bienvenida
  - Selección (Login/Registro)
  - Login
  - Registro
  - Dashboard
*/

document.addEventListener('DOMContentLoaded', function() {
  
  // ===========================================
  // OBTENER ELEMENTOS DE NAVEGACIÓN
  // ===========================================
  
  const welcomeScreen = document.getElementById('welcomeScreen');
  const nextButton = document.getElementById('nextButton');
  const choiceScreen = document.getElementById('choiceScreen');
  const loginChoiceBtn = document.getElementById('loginChoiceBtn');
  const registerChoiceBtn = document.getElementById('registerChoiceBtn');
  const loginScreen = document.getElementById('loginScreen');
  const registerScreen = document.getElementById('registerScreen');
  const backToChoice = document.getElementById('backToChoice');
  const backToChoice2 = document.getElementById('backToChoice2');
  const dashboardScreen = document.getElementById('dashboardScreen');
  const logoutButton = document.getElementById('logoutButton');
  const logoutModal = document.getElementById('logoutModal');
  const confirmLogout = document.getElementById('confirmLogout');
  const cancelLogout = document.getElementById('cancelLogout');
  
  
  // ===========================================
  // 1. PANTALLA DE BIENVENIDA -> SELECCIÓN
  // ===========================================
  
  nextButton.addEventListener('click', function() {
    welcomeScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 2. SELECCIÓN -> LOGIN
  // ===========================================
  
  loginChoiceBtn.addEventListener('click', function() {
    choiceScreen.style.display = 'none';
    loginScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 3. SELECCIÓN -> REGISTRO
  // ===========================================
  
  registerChoiceBtn.addEventListener('click', function() {
    choiceScreen.style.display = 'none';
    registerScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 4. LOGIN -> SELECCIÓN (BOTÓN VOLVER)
  // ===========================================
  
  backToChoice.addEventListener('click', function(e) {
    e.preventDefault();
    loginScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 5. REGISTRO -> SELECCIÓN (BOTÓN VOLVER)
  // ===========================================
  
  backToChoice2.addEventListener('click', function(e) {
    e.preventDefault();
    registerScreen.style.display = 'none';
    choiceScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 6. DASHBOARD -> MODAL DE CONFIRMACIÓN
  // ===========================================
  
  logoutButton.addEventListener('click', function() {
    logoutModal.style.display = 'flex';
  });
  
  
  // ===========================================
  // 7. MODAL: CONFIRMAR LOGOUT
  // ===========================================
  
  confirmLogout.addEventListener('click', function() {
    logoutModal.style.display = 'none';
    dashboardScreen.style.display = 'none';
    welcomeScreen.style.display = 'flex';
  });
  
  
  // ===========================================
  // 8. MODAL: CANCELAR LOGOUT
  // ===========================================
  
  cancelLogout.addEventListener('click', function() {
    logoutModal.style.display = 'none';
  });
  
});
