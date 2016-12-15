'use strict';

/**
 * Scene constructor
 */

function Scene(container, name) {

    // Primitives
    this._points = [];

	// Canvas container bound to the scene
    this._container = document.getElementById(container);

    // Canvas element
    this._canvas = this._container.appendChild(document.createElement("canvas"));
    this._canvas.id = name;

    // 2d rendering context
    this._context = this._canvas.getContext('2d');

    // Resize the scene
    this.resize();
};

/**
 * Add point
 */

Scene.prototype.add = function(point) {

    // Check if we already have three control points
    if (this._points.length < 3) {
        this._points.push(point);
    }

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
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
};

/**
 * Render the primitives
 */

Scene.prototype.render = function() {

    // Render control points
    for (let i = 0; i < this._points.length; ++i) {
        this._points[i].render();
    }
    
    // Clear the context
    this.clear();
};

exports.Scene = Scene;
