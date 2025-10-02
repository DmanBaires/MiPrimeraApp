# MiPrimeraApp

Pequeña aplicación de ejemplo en React Native / Expo que demuestra navegación encadenada con React Navigation.

Descripción
- Tres pantallas principales: `Inicio`, `Detalle` y `Acerca`.
- Además añadimos una lista de `Contactos` y una pantalla `DetalleContacto`.
- Demuestra paso de parámetros entre pantallas y navegación hacia atrás.

Estructura relevante

- `App.tsx` - Contiene el `NavigationContainer` y el stack con las pantallas.
- `screens/Inicio.tsx` - Pantalla de inicio (botón a Detalle y a Contactos).
- `screens/Detalle.tsx` - Muestra parámetros enviados desde Inicio.
- `screens/Acerca.tsx` - Muestra parámetros enviados desde Detalle y botones para volver.
- `screens/Contactos.tsx` - Lista con UI mejorada (avatar iniciales).
- `screens/DetalleContacto.tsx` - Muestra todos los datos de un contacto.

Requisitos

- Node.js (recomendado instalar con nvm)
- npm
- Expo CLI (opcional, puede usarse con `npx expo`)

Instalación (local)

```bash
# desde la raíz del proyecto
npm install
```

Ejecutar la app

```bash
npx expo start
# o
npm run start
```

Flujo de prueba (rápido)

1. Abrir la app en Expo Go o en un emulador.
2. En `Inicio` pulsa "Ir a Detalle (enviando id y user)" para ver el paso de parámetros.
3. En `Detalle` pulsa "Ir a Acerca de..." para ver cómo se pasan otros parámetros.
4. En `Acerca` prueba "Volver" y "Volver al Inicio".
5. Desde `Inicio` pulsa "Ver Contactos" para probar la lista y ver el detalle de un contacto.

Notas y consejos

- Si trabajas en Linux Mint, usa `nvm` para gestionar Node y evitar problemas de permisos con `npm`.
- Si ves errores de módulos relacionados con React Navigation, ejecuta `npx expo install` para instalar las versiones compatibles con tu SDK.

Repositorio remoto

El proyecto ya está subido a GitHub: https://github.com/DmanBaires/MiPrimeraApp

Contacto

Si quieres que haga más mejoras (README más detallado, CI, screenshots, avatars remotos), dime y lo hago.
