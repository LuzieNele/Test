// SPZ Nippes – Navigation & Interaktion

// Hamburger-Menü
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navList.classList.contains('open'));
  });

  // Schließen bei Klick auf Link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navList.classList.remove('open'));
  });

  // Schließen bei Klick außerhalb
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove('open');
    }
  });
}

// Smooth scroll für Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Kontaktformular: Client-side Demo-Submit
const form = document.getElementById('kontakt-form');
const erfolg = document.getElementById('form-erfolg');

if (form && erfolg) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(el => {
      if (!el.value || (el.type === 'checkbox' && !el.checked)) {
        el.style.borderColor = '#c00';
        valid = false;
      } else {
        el.style.borderColor = '';
      }
    });
    if (valid) {
      form.style.display = 'none';
      erfolg.style.display = 'block';
    }
  });
}

// Details/Summary: chevron via CSS handled; ensure only one open at a time (optional)
// Aktiven Nav-Link dynamisch setzen, falls per JS navigiert
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('aktiv');
    else a.classList.remove('aktiv');
  });
})();
