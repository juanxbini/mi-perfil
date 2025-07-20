import { links } from '../data/links.js';

export function createProfile() {
  return `
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
  `;
}
