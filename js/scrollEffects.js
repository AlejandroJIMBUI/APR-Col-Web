// Script para el efecto de scroll en la barra de navegación
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const scrollOffset = 100; // Ajusta este valor según cuando quieras que active el efecto
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > scrollOffset) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});