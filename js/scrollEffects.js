    document.addEventListener('DOMContentLoaded', function() {
        const mainElement = document.querySelector('main');
        const scrollEffects = [
            'scroll-effect-1',
            'scroll-effect-2',
            'scroll-effect-3'
        ];
        
        let currentEffect = 0;
        
        window.addEventListener('scroll', function() {
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
            
            if (newEffect !== currentEffect) {
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
        
        // Inicializa con el primer efecto
        mainElement.classList.add(scrollEffects[0]);
        });

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