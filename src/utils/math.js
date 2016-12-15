'use strict';

/**
 * Convert degrees to radians
 */

export function deg_to_rad(degrees) {

    if (degrees > 0 && degrees % 360 === 0) {
        return trim_float(Math.PI * 2);
    }
    return trim_float(degrees % 360 * (Math.PI / 180));
}

/**
 * Convert degrees to radians
 */

export function rad_to_deg(radians) {
    let negative = radians < 0;
    if (negative) {
        return (~~((radians * (180 / Math.PI))) % 360);
    }
    return trim_float(Math.ceil((radians * (180 / Math.PI))) % 360);
}

/**
 * Trim floats to certain precision
 */

export function trim_float(float, digits = 5) {
    const trimmer = Math.pow(10, digits);
    return Math.round(float * trimmer) / trimmer;
}

/**
 * Trim angles
 */

export function trim_angle(angle) {
    if (angle > 360) {
        return angle % 360;
    } else {
        if (angle < 0) {
            return 360 + angle % 360;
        } else {
            return angle;
        }
    }
}

/**
 * Circle hit test
 */

export function circle_hit_test(mx, my, px, py, pr) {
    const delta_x = mx - px;
    const delta_y = my - py;
    const hit = delta_x * delta_x + delta_y * delta_y < pr * pr;
    return {
        hit,
        delta_x,
        delta_y
    };
}

/**
 * Get the fourth vertex of the parallelogram by supplying three known vertices
 */

export function get_fourth_parallelogram_vertex(A, B, C) {
    return [0, 0];
}

