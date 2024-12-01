// Import Three.js
import * as THREE from 'three';

// Create Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add Light
const light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 10, 10);
scene.add(light);

// Add a 3D Object (Placeholder Car)
const geometry = new THREE.BoxGeometry(2, 1, 4); // Car Shape
const material = new THREE.MeshStandardMaterial({ color: 0x007BFF });
const car = new THREE.Mesh(geometry, material);
scene.add(car);

// Position Camera
camera.position.z = 10;

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    car.rotation.y += 0.01; // Rotate the car
    renderer.render(scene, camera);
}
animate();
