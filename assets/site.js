(() => {
  const nav = document.getElementById('nav') || document.querySelector('.nav');
  const menu = document.getElementById('menu') || document.querySelector('.menu, .menu-toggle');
  const header = document.getElementById('header') || document.querySelector('.site-header, header');

  if (nav && menu) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      nav.classList.toggle('open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('.nav-links a, .navlinks a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open', 'open');
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open navigation');
        menu.textContent = '☰';
      });
    });
  }

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
  }

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });
  document.querySelectorAll('[data-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
  });
})();
