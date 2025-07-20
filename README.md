# 💼 Landing Profesional – Juan Cruz Bini

Bienvenido a mi landing page profesional. Este sitio fue construido desde cero utilizando herramientas modernas del ecosistema frontend con el objetivo de mostrar mis habilidades, proyectos y formación de forma clara, accesible y modular.

---

## ✨ Tecnologías utilizadas

* ⚡ [Vite](https://vitejs.dev/) – entorno de desarrollo moderno
* 🌐 HTML + CSS3 (modularizado)
* 🧠 JavaScript con ESModules (estructura por componentes)
* 🎨 Font Awesome para iconos
* 🛠 GitHub Pages como plataforma de despliegue

---

## 📁 Estructura del proyecto

```
mi-perfil/
├── public/
│   └── foto-perfil.png
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.js                 # Punto de entrada: importa renderApp
│   ├── style.css              # Estilos globales y responsivos
│   ├── data/                  # Contenido dinámico
│   │   ├── skills.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   └── links.js
│   └── components/            # Componentes por sección
│       ├── renderApp.js       # Inyecta estructura y render dinámico
│       ├── Navbar.js
│       ├── Header.js
│       ├── Profile.js
│       ├── SkillsSection.js   # Inserta estructura base
│       ├── skills.js          # Renderiza contenido interactivo
│       ├── Meteochismes.js
│       ├── EducationSection.js
│       ├── ProjectsSection.js
│       └── Footer.js
```

---

## 🧪 Desarrollo local

Para correr el proyecto en tu máquina:

```bash
npm install
npm run dev
```

Luego abrí tu navegador en:

```
http://localhost:5173/
```

---

## 📦 Build y despliegue en GitHub Pages

1. Configurá la base en `vite.config.js`:

```js
base: '/mi-perfil/' // reemplazar con el nombre de tu repositorio
```

2. Ejecutá build y deploy:

```bash
npm run build
npm run deploy
```

El sitio se publicará automáticamente en:

```
https://tuusuario.github.io/mi-perfil/
```

---

## 📌 Contenido destacado

* **Experiencia técnica** organizada por áreas (frontend, backend, automatización, devops, etc.)
* **Proyectos reales** con tecnologías modernas
* **Meteochismes**: canal personal de divulgación meteorológica
* **Perfil y contacto** con enlaces activos a redes

---

## 🧩 Personalización

Podés modificar fácilmente los datos dinámicos editando los archivos en `/src/data/`:

* `skills.js` → habilidades y tecnologías por área
* `education.js` → formación académica
* `projects.js` → proyectos destacados
* `links.js` → redes sociales, WhatsApp, GitHub, etc.

---

## 📄 Licencia

Este proyecto es de código abierto y puede ser reutilizado con atribución.
Creado por **Juan Cruz Bini**.

---

¡Gracias por visitar!
