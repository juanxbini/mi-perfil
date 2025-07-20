import { skills } from '../data/skills.js';

export function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');

  skills.forEach((cat, index) => {
    const box = document.createElement('div');
    box.classList.add('skill-box');
    box.style.setProperty('--delay', `${index * 0.1}s`);

    const title = document.createElement('h3');
    title.classList.add('skill-title');
    title.innerHTML = `${cat.categoria} <span class="arrow">›</span>`;

    const list = document.createElement('ul');
    list.className = 'skill-list';
    list.innerHTML = cat.habilidades.map(h => `<li>${h}</li>`).join('');

    box.appendChild(title);
    box.appendChild(list);
    skillsContainer.appendChild(box);

    // Toggle dinámico en mobile
    title.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        const isExpanded = list.style.maxHeight && list.style.maxHeight !== "0px";

        // Contraer todas
        document.querySelectorAll('.skill-list').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.skill-box').forEach(b => b.classList.remove('open'));

        if (!isExpanded) {
          list.style.maxHeight = list.scrollHeight + "px";
          box.classList.add('open');
        }
      }
    });
  });
}
