(() => {
  const menu = document.querySelector('#menu');
  const nav = document.querySelector('.nav-links');
  if (!menu || !nav) return;
  const closeMenu = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    menu.textContent = '☰';
  };
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    if (expanded) closeMenu();
    else {
      nav.classList.add('open');
      menu.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-label', 'Close navigation');
      menu.textContent = '×';
    }
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
})();
