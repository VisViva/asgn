'use strict';

import {
    Circle
} from './circle';
import {
    Parallelogram
} from './parallelogram';
import {
    circle_hit_test
} from '../utils/math';

/**
 * Scene constructor
 */

function Scene(name) {

    // Canvas element
    this._canvas = document.body.appendChild(document.createElement("canvas"));
    this._canvas.id = name;

    // 2d rendering context
    this._context = this._canvas.getContext('2d');

    // User zoom
    this._zoom = 1 / window.devicePixelRatio;

    // Control points
    this._points = [];

    // Circle
    this._circle = new Circle()
        .context(this._context)
        .fill(false)
        .stroke(true)
        .strokeColor('#FFFF00');

    // Parallelogram
    this._parallelogram = new Parallelogram()
        .context(this._context)
        .fill(false)
        .stroke(true)
        .strokeColor('#0000FF');

    // Resize the scene
    this.resize();
};

/**
 * Get the canvas
 */

Scene.prototype.element = function() {
    return this._canvas;
};


/**
 * Add point
 */

Scene.prototype.add = function(cx, cy, radius) {

    // Check if we already have three control points
    if (this._points.length < 3) {
        this._points.push(new Circle()
            .context(this._context)
            .fill(true)
            .stroke(false)
            .fillColor('#FF0000')
            .center([cx/this._zoom, cy/this._zoom])
            .radius(radius)
        );
    }

    // Initiate render
    this.render();

    return this;
};

/**
 * Reset points
 */

Scene.prototype.reset = function(point) {

    this._points.length = 0;

    return this;
};

/**
 * Resize the scene
 */

Scene.prototype.resize = function() {

    // Set dimensions to the maximum of the available area
    this._zoom = 1 / window.devicePixelRatio;
    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    this._context.scale(this._zoom, this._zoom);

    // Render the scene
    this.render();

    return this;
};

/**
 * Clear the context
 */

Scene.prototype.clear = function() {
    
    // Clear the context and reset the transformation matrix
    this._context.save();
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.restore();
};



/**
 * Render the primitives
 */

Scene.prototype.render = function() {
    
    // Clear the context
    this.clear();

    // Render control points
    for (let i = 0; i < this._points.length; ++i) {
        this._points[i].render();
    }

    if (this._points.length === 3) {
        this._parallelogram.render();
        this._circle.render();
    }
};

/**
 * Render the primitives
 */

Scene.prototype.grab = function(mx, my) {

    // Exit if number of points is not 3
    if (this._points.length !== 3) return;

    const that = this;
    let grabbed = false;
    let point;
    let delta_x;
    let delta_y;
    
    // Hit test for control points
    for (let i = 0; i < this._points.length; ++i) {
        const hit_test = circle_hit_test(mx, my, this._points[i].center()[0]*this._zoom, this._points[i].center()[1]*this._zoom, this._points[i].radius()*this._zoom);
        if (hit_test.hit) {
            grabbed = true;
            delta_x = hit_test.delta_x;
            delta_y = hit_test.delta_y;
            point = this._points[i];
            break;
        }
    }
    
    if (grabbed === true) {
        const _mouse_move_listener = function(event) {
            point.center([(event.clientX)/that._zoom - delta_x, (event.clientY)/that._zoom - delta_y]);
            that.render();
        };

        const _mouse_up_listener = function(event) {
            window.removeEventListener('mousemove', _mouse_move_listener, false);
            window.removeEventListener('mouseup', _mouse_up_listener, false);
        };

        window.addEventListener('mousemove', _mouse_move_listener, false);
        window.addEventListener('mouseup', _mouse_up_listener, false);
    }
};

exports.Scene = Scene;