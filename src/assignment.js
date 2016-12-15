'use strict';

import {
    Scene
} from './core/scene';

// Construct the scene
const scene = new Scene('scene');

const CP1 = document.getElementById('CP1');
const CP2 = document.getElementById('CP2');
const CP3 = document.getElementById('CP3');
const CAR = document.getElementById('CAR');
const PAR = document.getElementById('PAR');

scene.subscribe((data) => {
	CP1.innerHTML = 'First: (' + data.CP1 + ')';
	CP2.innerHTML = 'Second: (' + data.CP2 + ')';
	CP3.innerHTML = 'Third: (' + data.CP3 + ')';
	CAR.innerHTML = 'Area: ' + Math.round(data.CAR) + ' square px';
	PAR.innerHTML = 'Area: ' + Math.round(data.PAR) + ' square px';
});