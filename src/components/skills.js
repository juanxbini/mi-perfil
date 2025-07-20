// components/skills.js
import { skills } from '../data/skills.js';

export function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');

  skills.forEach((cat, index) => {
    const box = document.createElement('div');
    box.classList.add('skill-box');

    // Animación escalonada opcional
    box.style.setProperty('--delay', `${index * 0.1}s`);

    const title = document.createElement('h3');
    title.textContent = cat.categoria;

    const list = document.createElement('ul');
    list.className = 'skill-list';
    list.innerHTML = cat.habilidades.map(h => `<li>${h}</li>`).join('');

    box.appendChild(title);
    box.appendChild(list);
    skillsContainer.appendChild(box);

    // Comportamiento desplegable en mobile
    title.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        list.classList.toggle('expanded');
      }
    });
  });
}
