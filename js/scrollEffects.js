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

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.header-logo');
  let animationId;
  let isHovering = false;
  
  // Parámetros de animación
  const settings = {
    normal: {
      verticalRange: 10,
      rotationRange: 3,
      speed: 0.001,
      verticalSpeed: 1.5,
      rotationSpeed: 1.2,
      offset: Math.PI * 0.25
    },
    hover: {
      verticalRange: 15,
      rotationRange: 5,
      speed: 0.002,
      verticalSpeed: 2,
      rotationSpeed: 1.5,
      offset: Math.PI * 0.5
    }
  };

  function floatAnimation(timestamp, isHover) {
    const config = isHover ? settings.hover : settings.normal;
    const time = timestamp * config.speed;
    
    // Movimiento vertical
    const yPos = -config.verticalRange * Math.sin(time * config.verticalSpeed);
    
    // Rotación más dinámica
    const rotation = config.rotationRange * Math.sin(time * config.rotationSpeed + config.offset);
    
    // Efecto de escala solo en hover
    const scale = isHover ? 1.05 : 1;
    
    // Aplicar transformaciones
    logo.style.transform = `
      translateY(${yPos}px)
      rotate(${rotation}deg)
      scale(${scale})
      translateZ(0)
    `;
    
    animationId = requestAnimationFrame((ts) => floatAnimation(ts, isHover));
  }

  // Eventos de hover
  logo.addEventListener('mouseenter', () => {
    isHovering = true;
    cancelAnimationFrame(animationId);
    floatAnimation(performance.now(), true);
  });

  logo.addEventListener('mouseleave', () => {
    isHovering = false;
    cancelAnimationFrame(animationId);
    floatAnimation(performance.now(), false);
  });

  // Iniciar animación
  floatAnimation(performance.now(), false);
});