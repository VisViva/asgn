'use strict';

import {
    Scene
} from './core/scene';

// Construct the scene
const scene = new Scene('scene');

// Initialize auto-resizing
window.addEventListener('resize', scene.resize.bind(scene), false);

// Add click events
document.getElementById('scene').addEventListener('click', (event) => {
	scene.add(event.clientX, event.clientY, 5.5);
}, false);