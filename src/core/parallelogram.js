'use strict';

/**
 * Parallelogram constructor
 */

function Parallelogram() {

    // Material
    this._stroke = false;
    this._stroke_color = '#000000';
    this._fill = true;
    this._fill_color = '#000000';

    // Rendering context
    this._context;

    // Vertices
    this._A = [0, 0];
    this._B = [0, 0];
    this._C = [0, 0];
    this._D = [0, 0];
};

/**
 * Set the rendering context
 */

Parallelogram.prototype.context = function(value) {
    this._context = value;
    return this;
};

/**
 * Set the fill color
 */

Parallelogram.prototype.fillColor = function(value) {
    this._fill_color = value;
    return this;
};

/**
 * Set the stroke color
 */

Parallelogram.prototype.strokeColor = function(value) {
    this._stroke_color = value;
    return this;
};

/**
 * Set the fill
 */

Parallelogram.prototype.fill = function(value) {
    this._fill = value;
    return this;
};

/**
 * Set the stroke
 */

Parallelogram.prototype.stroke = function(value) {
    this._stroke = value;
    return this;
};

/**
 * Set the vertices
 */

Parallelogram.prototype._vertex = function(vertex, value) {
    if (value !== void 0) {
        this['_' + vertex] = value;
        return this;
    } else {
        return this['_' + vertex];
    }
};

/**
 * Set the vertices
 */

Parallelogram.prototype.A = function(value) {
	return this._vertex('A', value);
};

Parallelogram.prototype.B = function(value) {
	return this._vertex('B', value);
};

Parallelogram.prototype.C = function(value) {
	return this._vertex('C', value);
};

Parallelogram.prototype.D = function(value) {
	return this._vertex('D', value);
};

/**
 * Render
 */

Parallelogram.prototype.render = function() {

    // Setup context
    this._context.save();
    this._context.beginPath();
    this._context.moveTo(this._A[0], this._A[1]);
    this._context.lineTo(this._B[0], this._B[1]);
    this._context.lineTo(this._C[0], this._C[1]);
    this._context.lineTo(this._D[0], this._D[1]);
    this._context.closePath();

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

exports.Parallelogram = Parallelogram;
