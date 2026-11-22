// Menu burger (mobile)
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar');
if (btn) btn.addEventListener('click', () => nav.classList.toggle('open'));

// Lien actif selon la page courante
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
