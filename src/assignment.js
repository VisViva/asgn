'use strict';

import {
    Scene
} from './core/scene';

// Construct the scene
const scene = new Scene('scene');

// Initialize auto-resizing
window.addEventListener('resize', scene.resize.bind(scene), false);

// Add click events
scene.element().addEventListener('click', (event) => {
	scene.add(event.clientX, event.clientY, 5.5);
}, false);

// Add mouse down events
scene.element().addEventListener('mousedown', (event) => {
	scene.grab(event.clientX, event.clientY);
}, false);