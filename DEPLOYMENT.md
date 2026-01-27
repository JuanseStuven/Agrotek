# Configuración de Deployment para React Router

Este documento explica cómo configurar el servidor para que las rutas de React Router funcionen correctamente al acceder directamente a las URLs.

## Problema
Cuando accedes directamente a una URL como `https://agroteksa.com/cangilones/agricolas`, el servidor busca un archivo en esa ruta en lugar de dejar que React Router maneje el enrutamiento.

## Soluciones según el proveedor

### 1. Netlify
✅ **Ya configurado** - El archivo `public/_redirects` redirige todas las solicitudes a `index.html`.

**Pasos adicionales:**
- Asegúrate de que el comando de build sea: `npm run build`
- La carpeta de publicación debe ser: `build`

### 2. Vercel
✅ **Ya configurado** - El archivo `vercel.json` maneja las redirecciones.

**Pasos adicionales:**
- Vercel detectará automáticamente que es una aplicación Create React App
- No necesitas configuración adicional

### 3. Apache (Hosting tradicional)
✅ **Ya configurado** - El archivo `public/.htaccess` está listo.

**Requisitos:**
- El módulo `mod_rewrite` debe estar habilitado en Apache
- El archivo `.htaccess` debe estar en la carpeta `build` después del build

### 4. Nginx
📄 **Ver archivo** - `nginx.conf.example` tiene la configuración necesaria.

**Pasos:**
1. Copia la configuración de `nginx.conf.example`
2. Actualiza la ruta `root` con la ruta a tu carpeta `build`
3. Reinicia Nginx: `sudo systemctl restart nginx`

### 5. GitHub Pages
Para GitHub Pages, necesitas configuración adicional:

1. Instala: `npm install --save-dev gh-pages`

2. Agrega a `package.json`:
```json
{
  "homepage": "https://tuusuario.github.io/tu-repositorio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. En `src/App.js`, usa `HashRouter` en lugar de `BrowserRouter`:
```javascript
import { HashRouter as Router } from "react-router-dom";
```

## Verificación
Después de desplegar, prueba:
1. Navega a `https://agroteksa.com/cangilones/agricolas`
2. Refresca la página (F5)
3. Si funciona correctamente, la configuración está bien

## Notas importantes
- Todos estos archivos ya están incluidos en el proyecto
- Elige la configuración según tu proveedor de hosting
- Los archivos en `public/` se copian automáticamente a `build/` durante `npm run build`
