import { education } from '../data/education.js';

export function createEducationSection() {
  setTimeout(renderEducation, 0);
  return `
    <section class="education-section" id="education">
      <h2>🎓 Formación Académica</h2>
      <ul id="education-list"></ul>
    </section>
  `;
}

function renderEducation() {
  const eduList = document.getElementById('education-list');
  education.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-book"></i> ${item}`;
    eduList.appendChild(li);
  });
}
