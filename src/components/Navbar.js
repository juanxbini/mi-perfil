export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'main-nav';
  nav.innerHTML = `
    <a href="#perfil">Perfil</a>
    <a href="#skills">Experiencia</a>
    <a href="#meteochismes">Meteochismes</a>
    <a href="#education">Formación</a>
    <a href="#projects">Proyectos</a>
  `;
  return nav;
}
