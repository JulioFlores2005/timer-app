---

# **Timer App - Explicación del Proyecto**

Este documento tiene como objetivo explicar el proyecto **Timer App** desde un punto de vista técnico y funcional, detallando las decisiones de diseño, la arquitectura, el flujo de código y las funcionalidades implementadas.

---

## **Índice**

1. [Introducción](#introducción)
2. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
3. [Funcionalidades](#funcionalidades)
4. [Flujo de Código](#flujo-de-código)
5. [Decisiones de Diseño](#decisiones-de-diseño)
6. [Pruebas y Validación](#pruebas-y-validación)
7. [Conclusión](#conclusión)

---

## **Introducción**

El **Timer App** es una aplicación web que permite a los usuarios configurar un temporizador con funcionalidades básicas como **Start**, **Pause**, **Reset**, y ajustar el tiempo con botones de **+1 Min** y **-1 Min**. Además, cuando el temporizador llega a 0, se reproduce un sonido de alerta para notificar al usuario.

Este proyecto fue desarrollado utilizando tecnologías modernas como **JavaScript **, **Webpack**, **Babel**, **Sass** y **Jest** para pruebas unitarias.

---

## **Arquitectura del Proyecto**

### **Estructura de Carpetas**

El proyecto está organizado de la siguiente manera:

```
timer-app/
├── dist/                  # Carpeta de salida generada por Webpack
├── src/                   # Código fuente del proyecto
│   ├── assets/            # Recursos estáticos (imágenes, sonidos, etc.)
│   │   └── sounds/        # Archivos de sonido
│   ├── js/                # Código JavaScript
│   │   ├── modules/       # Módulos de la aplicación
│   │   └── index.js       # Punto de entrada de JavaScript
│   ├── scss/              # Estilos SCSS
│   │   ├── components/    # Componentes de estilo
│   │   └── styles.scss    # Archivo principal de estilos
│   └── index.html         # Archivo HTML principal
├── tests/                 # Pruebas unitarias
│   └── Timer.test.js      # Pruebas para la clase Timer
├── .babelrc               # Configuración de Babel
├── .gitignore             # Archivos ignorados por Git
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Documentación del proyecto
└── webpack.config.js      # Configuración de Webpack
```

### **Tecnologías Utilizadas**

- **JavaScript (ES6+):** Para la lógica del temporizador.
- **Webpack:** Para empaquetar y gestionar los recursos del proyecto.
- **Babel:** Para transpilar código moderno a versiones compatibles con navegadores antiguos.
- **Sass:** Para estilos avanzados y mantenibles.
- **Jest:** Para pruebas unitarias.
- **HTML5:** Para la estructura de la interfaz de usuario.

---

## **Funcionalidades**

### **1. Temporizador Básico**
- **Start:** Inicia el temporizador.
- **Pause:** Detiene el temporizador.
- **Reset:** Reinicia el temporizador a 00:00:00.

### **2. Ajuste de Tiempo**
- **+1 Min:** Aumenta el tiempo en 1 minuto.
- **-1 Min:** Disminuye el tiempo en 1 minuto (si el tiempo es mayor o igual a 1 minuto).

### **3. Sonido de Alerta**
- Cuando el temporizador llega a 0, se reproduce un sonido de alerta (`alert-sound.mp3`).

### **4. Interfaz de Usuario**
- Diseño simple y responsive.
- Botones claramente etiquetados y estilizados con colores que indican su función (verde para Start, amarillo para Pause, rojo para Reset, azul para ajustar el tiempo).

---

## **Flujo de Código**

### **1. Inicialización del Proyecto**
- El archivo `index.html` carga el archivo `bundle.js` generado por Webpack.
- El archivo `index.js` es el punto de entrada de la aplicación. Aquí se inicializa la clase `Timer` y se vinculan los eventos de los botones.

### **2. Clase Timer**
- La clase `Timer` (en `src/js/modules/Timer.js`) es el núcleo de la aplicación. Contiene la lógica para:
  - Iniciar, pausar y reiniciar el temporizador.
  - Formatear el tiempo en formato `HH:MM:SS`.
  - Reproducir un sonido de alerta cuando el temporizador llega a 0.

### **3. Estilos**
- Los estilos están organizados en archivos SCSS modularizados:
  - `_variables.scss`: Define variables reutilizables como colores y tamaños de fuente.
  - `_controls.scss`: Estilos para los botones de control.
  - `_display.scss`: Estilos para la pantalla del temporizador.
  - `styles.scss`: Archivo principal que importa todos los componentes de estilo.

### **4. Pruebas Unitarias**
- Las pruebas unitarias (en `tests/Timer.test.js`) validan el correcto funcionamiento de la clase `Timer`, incluyendo:
  - Formateo del tiempo.
  - Inicio y actualización del temporizador.
  - Reproducción del sonido de alerta.

---

## **Decisiones de Diseño**

### **1. Modularización del Código**
- El código está dividido en módulos para facilitar su mantenimiento y escalabilidad. Por ejemplo:
  - La clase `Timer` está separada del archivo `index.js`.
  - Los estilos están organizados en componentes SCSS.

### **2. Uso de Webpack y Babel**
- **Webpack** se utiliza para empaquetar todos los recursos (JavaScript, SCSS, sonidos) en un solo archivo (`bundle.js`).
- **Babel** permite usar características modernas de JavaScript (como clases y módulos ES6) mientras se mantiene la compatibilidad con navegadores antiguos.

### **3. Sonido de Alerta**
- El sonido de alerta se carga dinámicamente utilizando la API de `Audio` de JavaScript. Esto permite reproducir el sonido sin necesidad de librerías externas.

### **4. Pruebas Unitarias**
- Se utilizó **Jest** para escribir pruebas unitarias que validan el comportamiento del temporizador. Esto asegura que el código funcione correctamente y facilita la detección de errores en el futuro.

---

## **Pruebas y Validación**

### **Pruebas Unitarias**
- Las pruebas unitarias cubren los siguientes casos:
  - Formateo correcto del tiempo (por ejemplo, 3661 segundos se convierte en `01:01:01`).
  - Inicio y actualización del temporizador.
  - Reproducción del sonido de alerta.

### **Pruebas Manuales**
- Se probó manualmente la aplicación en diferentes navegadores (Chrome, Firefox, Edge) para asegurar la compatibilidad.
- Se verificó que el sonido de alerta se reproduzca correctamente cuando el temporizador llega a 0.

---

### **Instrucciones para Ejecutar el Proyecto**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/timer-app.git
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

4. Abre el navegador en `http://localhost:9000`.

5. Para ejecutar las pruebas unitarias:
   ```bash
   npm test
   ```

---

**Autor:** [Julio Braydi Flores Nogales]  
**Curso:** [2º DAW BIL]  
**Profesor:** [Jose Carlos Nuñez Hernandez]  

---

¡Gracias por revisar mi proyecto!