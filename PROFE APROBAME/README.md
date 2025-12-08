# Web Alemanpp

Proyecto de ejemplo: sistema sencillo de bienvenida, registro e inicio de sesión.

Estructura del proyecto:

- `index.html` - Página principal con todas las pantallas (bienvenida, elección, login, registro, dashboard y modal).
- `css/styles.css` - Archivo con todos los estilos CSS (mantenido y referenciado desde `index.html`).
- `js/` - Carpeta con archivos JavaScript separados por responsabilidad:
  - `storage.js` - Funciones para leer/guardar usuarios en `localStorage`.
  - `navigation.js` - Lógica para mostrar/ocultar pantallas y manejar el modal de logout.
  - `login.js` - Manejo y validación del formulario de inicio de sesión.
  - `register.js` - Manejo y validación del formulario de registro.

Cambios realizados:
- Se organizó el JS en `js/` y el CSS en `css/`.
- Se eliminaron los archivos raíz `style.css` y `script.js` (se mantuvieron sus contenidos repartidos en los archivos ya mencionados).

Cómo probar localmente:

1. Abrir la carpeta del proyecto en un editor (VS Code recomendado).
2. Iniciar un servidor local (opcional, pero recomendable) para evitar restricciones de archivos locales en algunos navegadores:

```powershell
cd "c:\Users\tomir\OneDrive\Escritorio\PROFE APROBAME"; python -m http.server 8000
```

Luego abrir `http://localhost:8000` en el navegador.

Notas:
- Los usuarios registrados se guardan en `localStorage` del navegador; para limpiar los datos, usar las herramientas de desarrollo del navegador (Application → Local Storage).
- Si quieres que archive los archivos en lugar de borrarlos, puedo moverlos a una carpeta `archive/` en vez de eliminarlos.

Si querés, puedo:
- Mover archivos a `archive/` en vez de borrarlos (si preferís backup).
- Preparar un `package.json` con un script `start` que ejecute un servidor local.
- Añadir tests o una pantalla de perfil para el usuario en el dashboard.
