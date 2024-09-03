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
            toneMapped: false
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
        controls.dampingFactor = 0.1;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;
        controls.enableZoom = false; 


      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));

      const animate = () => {
        requestAnimationFrame(animate);
        scene.children.forEach((icon) => {
          if (icon.isMesh) {
            icon.lookAt(camera.position);
          }
        });

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
  overflow: hidden;
  border-radius: 15px;
}
</style>
