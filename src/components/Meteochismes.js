import { links } from '../data/links.js';

export function createMeteochismes() {
  return `
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
  `;
}
