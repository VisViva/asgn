'use strict';

/**
 * Point constructor
 */

function Circle() {

    // Material
    this._stroke = false;
    this._stroke_color = '#FF0000';
    this._fill = true;
    this._fill_color = '#FF0000';

    // Rendering context
    this._context;

    // Primitives
    this._center = [0, 0];

	// Canvas container bound to the scene
    this._radius = 0;
};

/**
 * Set the rendering context
 */

Circle.prototype.context = function(value) {
    this._context = value;
    return this;
};


/**
 * Set center
 */

Circle.prototype.center = function(value) {
    if (value !== void 0) {
        this._center = value;
        return this;
    } else {
        return this._center;
    }
};

/**
 * Set radius
 */

Circle.prototype.radius = function(value) {
    if (value !== void 0) {
        this._radius = value;
        return this;
    } else {
        return this._radius;
    }
};

/**
 * Render
 */

Circle.prototype.render = function() {

    // Setup context
    this._context.save();
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._context.beginPath();
    this._context.arc(this._center[0], this._center[1], this._radius, 0, 2 * Math.PI, false);
    
    // Fill if needed
    if (this._fill === true) {
        this._context.fillStyle = this._fill_color;
        this._context.fill();
    }

    // Stroke if needed
    if (this._stroke === true) {
        this._context.strokeStyle = this._stroke_color;
        this._context.stroke();
    }

    this._context.restore();

    return this;
};

exports.Circle = Circle;
