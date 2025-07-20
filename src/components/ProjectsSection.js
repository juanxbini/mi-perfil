import { projects } from '../data/projects.js';

export function createProjectsSection() {
  setTimeout(renderProjects, 0);
  return `
    <section class="projects-section" id="projects">
      <h2>📁 Proyectos destacados</h2>
      <div id="projects-container"></div>
    </section>
  `;
}

function renderProjects() {
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
}
