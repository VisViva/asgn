'use strict';

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
    return [A[0] - B[0] + C[0], A[1] - B[1] + C[1]];
}

/**
 * Get the area of the parallelogram
 */

export function get_parallelogram_area(A, B, C) {
    return Math.abs((A[0] - C[0]) * (B[1] - A[1]) - (A[0] - B[0]) * (C[1] - A[1]));
}

/**
 * Get the radius of the circle with the given area
 */

export function get_circle_radius_by_area(area) {
    return Math.sqrt(area / Math.PI);
}

/**
 * Get the center of mass of the parallelogram
 */

export function get_center_of_mass_of_parallelogram(A, B, C, D) {
    return [(A[0] + B[0] + C[0] + D[0]) / 4, (A[1] + B[1] + C[1] + D[1]) / 4];
}
