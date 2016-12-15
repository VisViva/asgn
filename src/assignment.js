'use strict';

import {
    Scene
} from './core/scene';

// Construct the scene
const scene = new Scene('viewport', 'scene');

// Initialize auto-resizing
window.addEventListener('resize', scene.resize.bind(scene), false);
