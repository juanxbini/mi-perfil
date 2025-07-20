// Importación de datos y estilos
import { skills } from './data/skills.js';
import { education } from './data/education.js';
import { projects } from './data/projects.js';
import './style.css';
import { links } from './data/links.js';

// Seleccionamos el div principal de la página
const app = document.getElementById('app');

/* 
---------------------------------------------------
1. Crear navegación sticky
---------------------------------------------------
*/
const nav = document.createElement('nav');
nav.className = 'main-nav';
nav.innerHTML = `
  <a href="#perfil">Perfil</a>
  <a href="#skills">Experiencia</a>
  <a href="#meteochismes">Meteochismes</a>
  <a href="#education">Formación</a>
  <a href="#projects">Proyectos</a>
`;
document.body.prepend(nav);

/* 
---------------------------------------------------
2. Renderizar contenido base del sitio
---------------------------------------------------
*/
app.innerHTML = `
  <header>
    <h1>Juan Cruz Bini</h1>
    <p class="subtitulo">Desarrollador Web · Analista Funcional · Electrónica & Automatización</p>
  </header>

  <section class="profile" id="perfil">
    <img src="/mi-perfil/FOTO-PERFIL.png" alt="Foto de perfil" class="profile-photo" />
    <p class="profile-description">
      Apasionado por la tecnología, el desarrollo web y los sistemas embebidos. También soy aficionado a la meteorología y la divulgación científica.
    </p>
    <div class="social-icons" id="contacto">
      <a href="${links.whatsapp}" target="_blank" data-tooltip="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="${links.instagram}" target="_blank" data-tooltip="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${links.linkedin}" target="_blank" data-tooltip="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="${links.github}" target="_blank" data-tooltip="GitHub"><i class="fab fa-github"></i></a>
    </div>
  </section>

  <section class="skills-section" id="skills">
    <h2>Áreas de experiencia</h2>
    <div class="skills-grid" id="skills-grid"></div>
    <div class="skills-accordion" id="skills-accordion"></div>
  </section>

  <section class="highlight-section" id="meteochismes">
    <h2>🌦 Meteochismes</h2>
    <p class="highlight-description">
      Canal de comunicación meteorológica donde comparto pronósticos, alertas y contenidos sobre el clima de Bahía Blanca y la región.
      Integro datos oficiales, análisis propios y un estilo claro y accesible. También administro el diseño visual, redacción y comunidad.
    </p>
    <div class="tags">
      <span class="tag">Meteorología</span>
      <span class="tag">Divulgación</span>
      <span class="tag">Redes Sociales</span>
      <span class="tag">Educativo</span>
      <a href="${links.meteochismesCanal}" target="_blank" class="canal-wsp">
        <i class="fab fa-whatsapp"></i> Canal
      </a>
    </div>
  </section>

  <section class="education-section" id="education">
    <h2>🎓 Formación Académica</h2>
    <ul id="education-list"></ul>
  </section>

  <section class="projects-section" id="projects">
    <h2>📁 Proyectos destacados</h2>
    <div id="projects-container"></div>
  </section>

  <footer class="footer-tec">
    <p>© 2025 Juan Cruz Bini – Todos los derechos reservados</p>
    <p class="footer-stack">
      Sitio desarrollado con <strong>Vite</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong> y desplegado en <strong>GitHub Pages</strong>.
    </p>
  </footer>
`;

/* 
---------------------------------------------------
3. Renderizar tarjetas de experiencia (skills)
---------------------------------------------------
*/
const gridContainer = document.getElementById('skills-grid');
const accordionContainer = document.getElementById('skills-accordion');

skills.forEach((cat, index) => {
  // --- Tarjeta estilo grid para desktop ---
  const box = document.createElement('div');
  box.classList.add('skill-box');
  box.style.setProperty('--delay', `${index * 0.1}s`);
  box.innerHTML = `
    <h3>${cat.categoria}</h3>
    <ul>${cat.habilidades.map(h => `<li>${h}</li>`).join('')}</ul>
  `;
  gridContainer.appendChild(box);

  // --- Acordeón para mobile ---
  const wrapper = document.createElement('div');
  wrapper.classList.add('skill-accordion');

  const header = document.createElement('button');
  header.classList.add('accordion-header');
  header.innerText = cat.categoria;
  header.setAttribute('aria-expanded', 'false');

  const content = document.createElement('div');
  content.classList.add('accordion-content');
  content.innerHTML = `
    <ul>${cat.habilidades.map(h => `<li>${h}</li>`).join('')}</ul>
  `;

  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.accordion-header').forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    document.querySelectorAll('.accordion-content').forEach(ctn => ctn.style.maxHeight = null);

    if (!expanded) {
      header.setAttribute('aria-expanded', 'true');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });

  wrapper.appendChild(header);
  wrapper.appendChild(content);
  accordionContainer.appendChild(wrapper);
});

/* 
---------------------------------------------------
4. Renderizar lista de educación
---------------------------------------------------
*/
const eduList = document.getElementById('education-list');

education.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<i class="fas fa-book"></i> ${item}`;
  eduList.appendChild(li);
});

/* 
---------------------------------------------------
5. Renderizar lista de proyectos
---------------------------------------------------
*/
const projContainer = document.getElementById('projects-container');

projects.forEach(proj => {
  const div = document.createElement('div');
  div.classList.add('project-entry');
  div.innerHTML = `
    <a href="${proj.url}" target="_blank">${proj.titulo}</a>
    <div class="tags">
      ${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
  `;
  projContainer.appendChild(div);
});
