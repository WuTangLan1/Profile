<!-- src\components\sections\info_section\techGravity.vue -->

<script>
import { onMounted, ref } from 'vue';

export default {
  props: {
    techImages: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const canvasRef = ref(null);
    const particles = [];

    onMounted(() => {
      const canvas = canvasRef.value;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;

      resizeCanvas();

      let mouseX = 0;
      let mouseY = 0;

      // Mousemove event for desktop
      canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
      });

      // Touchmove event for mobile
      canvas.addEventListener('touchmove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.touches[0].clientX - rect.left;
        mouseY = event.touches[0].clientY - rect.top;
      });

      props.techImages.forEach((tech) => {
        const img = new Image();
        img.src = tech.src;
        img.onload = () => {
          particles.push(new Particle(ctx, img, canvas.width, canvas.height));
        };
      });

      window.addEventListener('resize', resizeCanvas);

      function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          particle.update(canvas, particles, mouseX, mouseY);
          particle.draw(mouseX, mouseY);
        });
        requestAnimationFrame(animate);
      };

      animate();
    });

    class Particle {
      constructor(ctx, img, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.img = img;
        this.size = Math.random() * 40 + 20;
        this.x = Math.random() * (canvasWidth - this.size) + this.size / 2;
        this.y = Math.random() * (canvasHeight - this.size) + this.size / 2;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(canvas, particles, mouseX, mouseY) {
        const gravityStrength = 0.03;
        const repulsionStrength = 0.5;

        this.vy += gravityStrength;

        // Repulsion effect from the mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * repulsionStrength;
          this.vy += Math.sin(angle) * repulsionStrength;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.size / 2 > canvas.width - 20) {
          this.x = canvas.width - this.size / 2 - 20;
          this.vx *= -0.5;
        } else if (this.x - this.size / 2 < 20) {
          this.x = this.size / 2 + 20;
          this.vx *= -0.5;
        }

        if (this.y + this.size / 2 > canvas.height - 20) {
          this.y = canvas.height - this.size / 2 - 20;
          this.vy *= -0.5;
        } else if (this.y - this.size / 2 < 0) {
          this.y = this.size / 2;
          this.vy *= -0.8;
        }

        this.angle += (Math.random() - 0.5) * 0.02;

        particles.forEach((other) => {
          if (other !== this) {
            const dx = other.x - this.x;
            const dy = other.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (this.size + other.size) / 2;

            if (distance < minDistance) {
              const overlap = minDistance - distance;
              const angle = Math.atan2(dy, dx);
              const moveX = (Math.cos(angle) * overlap) / 2;
              const moveY = (Math.sin(angle) * overlap) / 2;

              this.x -= moveX;
              this.y -= moveY;
              other.x += moveX;
              other.y += moveY;
            }
          }
        });
      }

      draw(mouseX, mouseY) {
        const scaleFactor = 1.2;
        const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
        const isHovered = distance < this.size;

        if (isHovered) {
          this.ctx.shadowColor = 'rgba(0, 255, 0, 0.5)';
          this.ctx.shadowBlur = 15;
        } else {
          this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          this.ctx.shadowBlur = 10;
        }

        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.angle);

        const aspectRatio = this.img.width / this.img.height;
        const drawWidth = this.size * (isHovered ? scaleFactor : 1);
        const drawHeight = drawWidth / aspectRatio;

        this.ctx.drawImage(
          this.img,
          -drawWidth / 2,
          -drawHeight / 2,
          drawWidth,
          drawHeight
        );

        this.ctx.restore();
      }
    }

    return {
      canvasRef,
    };
  },
};
</script>

<template>
  <div class="gravity-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.gravity-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
}

@media(max-width: 500px)
{
  .gravity-container {
    height: 25vh;
  }
}

canvas {
  display: block;
  cursor: pointer;
  image-rendering: crisp-edges;
}
</style>
