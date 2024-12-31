export function initFireworks() {
  const fireworksContainer = document.querySelector('.fireworks');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  fireworksContainer.appendChild(canvas);

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.velocity = {
        x: -2 + Math.random() * 4,
        y: -2 + Math.random() * 4
      };
      this.alpha = 1;
      this.decay = 0.015;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }

    update() {
      this.velocity.y += 0.05;
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= this.decay;
    }
  }

  function createFirework(x, y) {
    const colors = [
      '255, 0, 0',    // Red
      '0, 255, 0',    // Green
      '255, 215, 0',  // Gold
    ];
    const particles = [];
    const particleCount = 50;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(x, y, color));
    }
    return particles;
  }

  let fireworks = [];

  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.05) {
      const x = Math.random() * canvas.width;
      const y = canvas.height - Math.random() * canvas.height * 0.4;
      fireworks = fireworks.concat(createFirework(x, y));
    }

    fireworks = fireworks.filter(particle => {
      particle.draw();
      particle.update();
      return particle.alpha > 0;
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}