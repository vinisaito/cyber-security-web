document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile menu toggle (will need HTML update for mobile)
  const menuToggle = document.createElement('button');
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  menuToggle.classList.add('menu-toggle');
  document.querySelector('header .header-container').prepend(menuToggle);
  
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Add animation to feature cards on scroll
  const featureCards = document.querySelectorAll('.feature-card');
  
  const animateOnScroll = () => {
    featureCards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state
  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});
