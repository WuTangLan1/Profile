<!-- src\components\sections\info_section\techGlobe.vue -->

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';

export default {
  props: {
    techImages: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.initGlobe();
  },
  methods: {
    initGlobe() {
      const canvas = this.$refs.globeCanvas;
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x111827); 

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 45;

      const globeRadius = 14; 

      const light = new THREE.PointLight(0xffffff, 1.5, 50);
      light.position.set(10, 10, 10);
      scene.add(light);

      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 500;
      const particlePositions = [];

      for (let i = 0; i < particleCount; i++) {
        particlePositions.push((Math.random() - 0.5) * 200); 
        particlePositions.push((Math.random() - 0.5) * 200); 
        particlePositions.push((Math.random() - 0.5) * 200); 
      }

      particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      const animateParticles = () => {
      particleGeometry.attributes.position.array.forEach((_, index) => {
        particleGeometry.attributes.position.array[index] += Math.sin(Date.now() * 0.0005 + index) * 0.01;
      });
      particleGeometry.attributes.position.needsUpdate = true;
    };


      this.techImages.forEach((tech, index) => {
        const loader = new THREE.TextureLoader();
        loader.load(tech.src, (texture) => {
          const iconSize = 3.5;
          const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);
          const iconMaterial = new THREE.MeshBasicMaterial({
              map: texture,
              transparent: true,
              side: THREE.FrontSide,
              depthTest: false,
              depthWrite: false,
              toneMapped: false,
            });

          const icon = new THREE.Mesh(iconGeometry, iconMaterial);

          const phi = Math.acos(-1 + (2 * index + 1) / this.techImages.length);
          const theta = Math.sqrt(this.techImages.length * Math.PI) * phi * 0.8;

          icon.position.setFromSphericalCoords(globeRadius, phi, theta);
          icon.lookAt(camera.position); 
          icon.lookAt(new THREE.Vector3(0, 0, 0)); 

          icon.userData = { speed: Math.random() * 0.01 };
          scene.add(icon);
            });
        });

      const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.dampingFactor = 0.05; 
        controls.autoRotateSpeed = 0.8;
        controls.enableZoom = false; 

        
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const animate = () => {
        requestAnimationFrame(animate);
        scene.children.forEach((icon) => {
          if (icon.isMesh) {
            icon.scale.setScalar(1 + 0.05 * Math.sin(Date.now() * 0.005));
            icon.lookAt(camera.position);
          }
        });

        animateParticles();
        
        controls.update();
        composer.render();
        };

      animate();

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
      });
    },
  },
};
</script>

<template>
  <div class="globe-container">
    <canvas ref="globeCanvas"></canvas>
  </div>
</template>

<style scoped>
.globe-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 15px;
}
</style>
