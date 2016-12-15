'use strict';

import {
    Circle
} from './circle';

/**
 * Scene constructor
 */

function Scene(name) {

    // Primitives
    this._points = [];

    // Canvas element
    this._canvas = document.body.appendChild(document.createElement("canvas"));
    this._canvas.id = name;

    // 2d rendering context
    this._context = this._canvas.getContext('2d');

    // Resize the scene
    this.resize();
};

/**
 * Add point
 */

Scene.prototype.add = function(cx, cy, radius) {

    // Check if we already have three control points
    if (this._points.length < 3) {
        this._points.push(new Circle()
            .context(this._context)
            .center([cx, cy])
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
    this._canvas.style.width = '100%';
    this._canvas.style.height = '100%';
    this._canvas.width = this._canvas.offsetWidth;
    this._canvas.height = this._canvas.offsetHeight;

    // Render the scene
    this.render();

    return this;
};

/**
 * Clear the context
 */

Scene.prototype.clear = function() {
    
    // Clear the context and reset the transformation matrix
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._canvas.width = this._canvas.width;
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
};

exports.Scene = Scene;
