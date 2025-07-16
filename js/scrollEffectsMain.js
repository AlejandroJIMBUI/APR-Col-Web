document.addEventListener('DOMContentLoaded', function() {
  const mainElement = document.querySelector('main');
  const footerTrigger = document.querySelector('.footer-trigger');
  const footer = document.querySelector('.footer');
  const scrollEffects = [
    'scroll-effect-1',
    'scroll-effect-2',
    'scroll-effect-3'
  ];
  
  let currentEffect = 0;
  let isFooterEffect = false;

  // Función para verificar si el trigger del footer es visible
  function checkFooterTrigger() {
    const triggerRect = footerTrigger.getBoundingClientRect();
    const triggerVisible = triggerRect.top <= window.innerHeight;
    
    if (triggerVisible && !isFooterEffect) {
      mainElement.classList.add('footer-effect');
      isFooterEffect = true;
    } else if (!triggerVisible && isFooterEffect) {
      mainElement.classList.remove('footer-effect');
      isFooterEffect = false;
    }
  }

  window.addEventListener('scroll', function() {
    // Efectos de scroll existentes...
    
    // Verificar el trigger del footer
    checkFooterTrigger();
    
    // Calcula el progreso del scroll (0 a 1)
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollProgress = scrollPosition / (documentHeight - windowHeight);
    
    // Cambia el efecto basado en el scroll
    const newEffect = Math.min(
      Math.floor(scrollProgress * scrollEffects.length),
      scrollEffects.length - 1
    );
    
    if (newEffect !== currentEffect && !isFooterEffect) {
      // Remueve todas las clases primero
      scrollEffects.forEach(effect => {
        mainElement.classList.remove(effect);
      });
      
      // Añade la clase correspondiente
      mainElement.classList.add(scrollEffects[newEffect]);
      currentEffect = newEffect;
    }
    
    // Ajusta la opacidad basada en el scroll
    const opacity = Math.min(scrollPosition / 300, 1);
    mainElement.style.setProperty('--scroll-opacity', opacity);
  });
  
  // Inicialización
  mainElement.classList.add(scrollEffects[0]);
  checkFooterTrigger(); // Verificar estado inicial

  // Efecto de scroll en la barra de navegación (mantén el existente)
  const nav = document.querySelector('nav');
  const scrollOffset = 100;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > scrollOffset) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});