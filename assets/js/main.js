// WELOX — shared interactions

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('.nav__mobile a').forEach((a) => {
      a.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const groups = new Map();
    revealEls.forEach((el) => {
      const group = el.closest('[data-reveal-group]');
      if (group) {
        const i = groups.get(group) || 0;
        el.style.setProperty('--i', i);
        groups.set(group, i + 1);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // Active nav link
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav__link, .nav__mobile a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href !== '/' && path.endsWith(href.replace(/^\.\.\//, '/'))) {
      link.classList.add('is-active');
    }
  });
});
