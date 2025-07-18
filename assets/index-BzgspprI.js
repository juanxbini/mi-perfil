(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const l=[{categoria:"Meteorología",habilidades:["Conocimientos de climatología y dinámica atmosférica","Interpretación de modelos meteorológicos","Divulgación científica en lenguaje claro","Uso de herramientas de monitoreo y pronóstico"]},{categoria:"Análisis Funcional",habilidades:["Levantamiento de requerimientos","Backlog funcional y priorización","BPMN y flujo de procesos","Historias de usuario y criterios de aceptación","Diseño de MVP y planificación incremental"]},{categoria:"Frontend",habilidades:["React.js (componentes, hooks, context)","Tailwind CSS y diseño responsive","Routing con React Router","Vite como entorno moderno de desarrollo"]},{categoria:"Backend",habilidades:["Node.js + Express para APIs REST","Modelado de datos con MongoDB","Conexión de frontend y backend","Autenticación y estructura modular de rutas"]},{categoria:"DevOps / Linux",habilidades:["Administración de usuarios y permisos en Linux","Gestión de servicios, procesos y red","Automatización con Bash y scripting en consola","Configuración de entorno de red local (LAN) y monitoreo","Manejo de paquetes, logs y tareas con cron","Diagnóstico y resolución de problemas con herramientas CLI"]},{categoria:"IA / Automatización",habilidades:["Uso avanzado de ChatGPT para documentación y diseño","Automatización con Google Apps Script","Integración de hojas de cálculo con flujos inteligentes"]},{categoria:"Electrónica & Sistemas embebidos",habilidades:["Proyectos con Arduino, sensores y actuadores","Lectura y escritura de entradas digitales/analógicas","Programación estructurada en C/C++ y MicroPython","Uso de registros, máscaras y operaciones a nivel de bit","Automatización con ESP32, control por Wi-Fi y Bluetooth","Diseño de soluciones con Raspberry Pi para control y monitoreo","Protocolos MQTT, HTTP y comunicación en redes inalámbricas"]},{categoria:"Gestión y Administración",habilidades:["Gestión operativa y logística en producción gastronómica","Control y planificación de insumos y entregas","Liquidación de alquileres, servicios y expensas","Gestión de redes sociales y soporte técnico en inmobiliaria"]}],d=["Diplomatura en Arduino, MicroPython y la IoT – UTN FRBA","Analista Funcional – UTN FRBA","Meteorología General Básica – InterAir","Administrador Linux – EducacionIT","Desarrollador Full Stack – EducacionIT","SysAdmin Linux - EducacionIT","Tec. Univ. en Sistemas Electrónicos Inteligentes Industriales – UNS"],u=[{titulo:"Sistema de Monitoreo Indoor con Arduino",url:"https://github.com/juanxbini/indoor-system",tags:["Arduino","IoT","JavaScript"]},{titulo:"Landing Page de Portfolio Personal",url:"https://github.com/juanxbini/mi-perfil",tags:["HTML","CSS","JavaScript"]},{titulo:"Sistema de Autenticación con React + Redux Toolkit",url:"https://github.com/juanxbini/authentication-redux",tags:["React","Redux Toolkit","Thunk","Autenticación","API REST"]},{titulo:"API REST de Autenticación – Node + Express + MongoDB",url:"https://github.com/juanxbini/auth-rest-node",tags:["Node.js","Express","MongoDB","JWT","API REST"]}],s={whatsapp:"https://wa.me/5492915705322",instagram:"https://instagram.com/juanxbini_",linkedin:"https://linkedin.com/in/juancruzbini",github:"https://github.com/juanxbini",meteochismesCanal:"https://whatsapp.com/channel/0029VbA2la0AojYoEeqyQj3o"},p=document.getElementById("app"),r=document.createElement("nav");r.className="main-nav";r.innerHTML=`
  <a href="#perfil">Perfil</a>
  <a href="#skills">Experiencia</a>
  <a href="#meteochismes">Meteochismes</a>
  <a href="#education">Formación</a>
  <a href="#projects">Proyectos</a>
`;document.body.prepend(r);p.innerHTML=`
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
      <a href="${s.whatsapp}" target="_blank" data-tooltip="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="${s.instagram}" target="_blank" data-tooltip="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="${s.linkedin}" target="_blank" data-tooltip="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="${s.github}" target="_blank" data-tooltip="GitHub"><i class="fab fa-github"></i></a>
</div>

  </section>

  <section class="skills-section" id="skills">
    <h2>Áreas de experiencia</h2>
    <div class="skills-grid" id="skills-container"></div>
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
    <a href="${s.meteochismesCanal}" target="_blank" class="canal-wsp">
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

`;const m=document.getElementById("skills-container");l.forEach((o,i)=>{const t=document.createElement("div");t.classList.add("skill-box"),t.style.setProperty("--delay",`${i*.1}s`),t.innerHTML=`
    <h3>${o.categoria}</h3>
    <ul>${o.habilidades.map(n=>`<li>${n}</li>`).join("")}</ul>
  `,m.appendChild(t)});const g=document.getElementById("education-list");d.forEach(o=>{const i=document.createElement("li");i.innerHTML=`<i class="fas fa-book"></i> ${o}`,g.appendChild(i)});const h=document.getElementById("projects-container");u.forEach(o=>{const i=document.createElement("div");i.classList.add("project-entry"),i.innerHTML=`
    <a href="${o.url}" target="_blank">${o.titulo}</a>
    <div class="tags">
      ${o.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
    </div>
  `,h.appendChild(i)});
