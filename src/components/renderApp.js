import { createNavbar } from './Navbar.js';
import { createHeader } from './Header.js';
import { createProfile } from './Profile.js';
import { createSkillsSection } from './SkillsSection.js';
import { createMeteochismes } from './Meteochismes.js';
import { createEducationSection } from './EducationSection.js';
import { createProjectsSection } from './ProjectsSection.js';
import { createFooter } from './Footer.js';
import { renderSkills } from './skills.js';

export function renderApp() {
  const app = document.getElementById('app');

  document.body.prepend(createNavbar());

  app.innerHTML = `
    ${createHeader()}
    ${createProfile()}
    ${createSkillsSection()}
    ${createMeteochismes()}
    ${createEducationSection()}
    ${createProjectsSection()}
    ${createFooter()}
  `;

  renderSkills(); // Lógica de renderizado dinámica
}
