var Shouye = (function (global) {
  
  
    // 代码内容
    let amountSpines = 0;
    let spinesinterval = null;
    const cactus = document.querySelector('.cactus');
    let x = 0;
    let y = 0;
    document.querySelector('svg').addEventListener('mousedown', () => {
      amountSpines = 0;
      mousedown = true;
      cactus.style.transition = 'none';
      requestAnimationFrame(increaseSpines);
    });
    document.querySelector('svg').addEventListener('mouseup', (e) => {
      x = e.clientX;
      y = e.clientY;
      pop(e);
      mousedown = false;
      cactus.style.transform = 'scale(1)';
      cactus.style.transition = '';
    });
    document.querySelector('svg').addEventListener('touchstart', (e) => {
      console.log('start')
      amountSpines = 0;
      mousedown = true;
      cactus.style.transition = 'none';
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
      requestAnimationFrame(increaseSpines);
    });
    document.querySelector('svg').addEventListener('touchend', (e) => {
      console.log('end')
      pop(e);
      mousedown = false;
      cactus.style.transform = 'scale(1)';
      cactus.style.transition = '';
    });
    
    function increaseSpines () {
      if (mousedown && amountSpines < 200) {
        requestAnimationFrame(increaseSpines);
        amountSpines += 2;
        cactus.style.transform = `scale(${(200 - amountSpines) / 200 * 0.2 + 0.8})`;
      }
    }
    
    function pop (e) {
      for (let i = 0; i < Math.min(amountSpines, 200); i++) {
        // We call the function createParticle 30 times
        // As we need the coordinates of the mouse, we pass them as arguments
        createParticle(e);
      }
    }
    
    function createParticle (e) {
      const particle = document.createElement('span');
      particle.classList.add('particle');
      document.body.appendChild(particle);
      
      const size = Math.floor(Math.random() * 30 + 10);
      particle.style.width = `${size * 0.6}px`;
      particle.style.height = `${size}px`;
      particle.style.filter = `brightness(${Math.random() + 0.5})`;
      
      // Generate a random x & y destination within a distance of 75px from the mouse
      const destinationX = x + (Math.random() - 0.5) * 2 * (innerWidth * 0.5);
      const destinationY = y + (Math.random() - 0.8) * 2 * (innerHeight * 0.5);
      const rotate = Math.atan2(destinationY - y, destinationX - x) * 180 / Math.PI + 90;
    
      particle.animate({
          transform: [`translate(${x}px, ${y}px) rotate(${rotate}deg)`, `translate(${destinationX}px, ${destinationY}px) rotate(${rotate}deg)`],
          opacity: [1, 1, 0],
          offset: [0, 0.7]
        }, {
        duration: Math.random() * 1000 + 800,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 200,
        fill: 'backwards'
      })
      .onfinish = () => particle.remove();
    }
    
    // iOs hack
    document.addEventListener("touchstart", function() {},false);
  // ---------------------------------- 到这里是代码内容-------------------------------
  
  }) (window);
  
  export default Shouye;
  
  
  
  
  
  
  
  
  
  