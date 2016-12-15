'use strict';

import {
    Scene
} from './core/scene';

// Construct the scene
const scene = new Scene('scene');

const CP1 = document.getElementById('CP1');
const CP2 = document.getElementById('CP2');
const CP3 = document.getElementById('CP3');

const CRA = document.getElementById('CRA');
const CCE = document.getElementById('CCE');
const CAR = document.getElementById('CAR');

const PCM = document.getElementById('PCM');
const PVA = document.getElementById('PVA');
const PVB = document.getElementById('PVB');
const PVC = document.getElementById('PVC');
const PVD = document.getElementById('PVD');
const PAR = document.getElementById('PAR');

scene.subscribe((data) => {
	CP1.innerHTML = 'First: (' + data.CP1 + ')';
	CP2.innerHTML = 'Second: (' + data.CP2 + ')';
	CP3.innerHTML = 'Third: (' + data.CP3 + ')';
	CRA.innerHTML = 'Radius: ' + Math.round(data.CRA) + 'px';
	CCE.innerHTML = 'Center: (' + data.CCE + ')';
	CAR.innerHTML = 'Area: ' + Math.round(data.CAR) + ' square px';
	PCM.innerHTML = 'Center of mass: (' + data.PCM + ')';
	PVA.innerHTML = 'Vertex A: (' + data.PVA + ')';
	PVB.innerHTML = 'Vertex B: (' + data.PVB + ')';
	PVC.innerHTML = 'Vertex C: (' + data.PVC + ')';
	PVD.innerHTML = 'Vertex D: (' + data.PVD + ')';
	PAR.innerHTML = 'Area: ' + Math.round(data.PAR) + ' square px';
});