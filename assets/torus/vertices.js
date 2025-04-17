//
//  vertices.c - Control vertices of the patches forming the Utah teapot
//

var numTeapotVertices = 306;

var vertices = [
  vec3(1.4, 0.0, 2.4),
  vec3(1.4, -0.784, 2.4),
  vec3(0.784, -1.4, 2.4),
  vec3(0.0, -1.4, 2.4),
  vec3(1.3375, 0.0, 2.53125),
  vec3(1.3375, -0.749, 2.53125),
  vec3(0.749, -1.3375, 2.53125),
  vec3(0.0, -1.3375, 2.53125),
  vec3(1.4375, 0.0, 2.53125),
  vec3(1.4375, -0.805, 2.53125),
  vec3(0.805, -1.4375, 2.53125),
  vec3(0.0, -1.4375, 2.53125),
  vec3(1.5, 0.0, 2.4),
  vec3(1.5, -0.84, 2.4),
  vec3(0.84, -1.5, 2.4),
  vec3(0.0, -1.5, 2.4),
  vec3(-0.784, -1.4, 2.4),
  vec3(-1.4, -0.784, 2.4),
  vec3(-1.4, 0.0, 2.4),
  vec3(-0.749, -1.3375, 2.53125),
  vec3(-1.3375, -0.749, 2.53125),
  vec3(-1.3375, 0.0, 2.53125),
  vec3(-0.805, -1.4375, 2.53125),
  vec3(-1.4375, -0.805, 2.53125),
  vec3(-1.4375, 0.0, 2.53125),
  vec3(-0.84, -1.5, 2.4),
  vec3(-1.5, -0.84, 2.4),
  vec3(-1.5, 0.0, 2.4),
  vec3(-1.4, 0.784, 2.4),
  vec3(-0.784, 1.4, 2.4),
  vec3(0.0, 1.4, 2.4),
  vec3(-1.3375, 0.749, 2.53125),
  vec3(-0.749, 1.3375, 2.53125),
  vec3(0.0, 1.3375, 2.53125),
  vec3(-1.4375, 0.805, 2.53125),
  vec3(-0.805, 1.4375, 2.53125),
  vec3(0.0, 1.4375, 2.53125),
  vec3(-1.5, 0.84, 2.4),
  vec3(-0.84, 1.5, 2.4),
  vec3(0.0, 1.5, 2.4),
  vec3(0.784, 1.4, 2.4),
  vec3(1.4, 0.784, 2.4),
  vec3(0.749, 1.3375, 2.53125),
  vec3(1.3375, 0.749, 2.53125),
  vec3(0.805, 1.4375, 2.53125),
  vec3(1.4375, 0.805, 2.53125),
  vec3(0.84, 1.5, 2.4),
  vec3(1.5, 0.84, 2.4),
  vec3(1.75, 0.0, 1.875),
  vec3(1.75, -0.98, 1.875),
  vec3(0.98, -1.75, 1.875),
  vec3(0.0, -1.75, 1.875),
  vec3(2.0, 0.0, 1.35),
  vec3(2.0, -1.12, 1.35),
  vec3(1.12, -2.0, 1.35),
  vec3(0.0, -2.0, 1.35),
  vec3(2.0, 0.0, 0.9),
  vec3(2.0, -1.12, 0.9),
  vec3(1.12, -2.0, 0.9),
  vec3(0.0, -2.0, 0.9),
  vec3(-0.98, -1.75, 1.875),
  vec3(-1.75, -0.98, 1.875),
  vec3(-1.75, 0.0, 1.875),
  vec3(-1.12, -2.0, 1.35),
  vec3(-2.0, -1.12, 1.35),
  vec3(-2.0, 0.0, 1.35),
  vec3(-1.12, -2.0, 0.9),
  vec3(-2.0, -1.12, 0.9),
  vec3(-2.0, 0.0, 0.9),
  vec3(-1.75, 0.98, 1.875),
  vec3(-0.98, 1.75, 1.875),
  vec3(0.0, 1.75, 1.875),
  vec3(-2.0, 1.12, 1.35),
  vec3(-1.12, 2.0, 1.35),
  vec3(0.0, 2.0, 1.35),
  vec3(-2.0, 1.12, 0.9),
  vec3(-1.12, 2.0, 0.9),
  vec3(0.0, 2.0, 0.9),
  vec3(0.98, 1.75, 1.875),
  vec3(1.75, 0.98, 1.875),
  vec3(1.12, 2.0, 1.35),
  vec3(2.0, 1.12, 1.35),
  vec3(1.12, 2.0, 0.9),
  vec3(2.0, 1.12, 0.9),
  vec3(2.0, 0.0, 0.45),
  vec3(2.0, -1.12, 0.45),
  vec3(1.12, -2.0, 0.45),
  vec3(0.0, -2.0, 0.45),
  vec3(1.5, 0.0, 0.225),
  vec3(1.5, -0.84, 0.225),
  vec3(0.84, -1.5, 0.225),
  vec3(0.0, -1.5, 0.225),
  vec3(1.5, 0.0, 0.15),
  vec3(1.5, -0.84, 0.15),
  vec3(0.84, -1.5, 0.15),
  vec3(0.0, -1.5, 0.15),
  vec3(-1.12, -2.0, 0.45),
  vec3(-2.0, -1.12, 0.45),
  vec3(-2.0, 0.0, 0.45),
  vec3(-0.84, -1.5, 0.225),
  vec3(-1.5, -0.84, 0.225),
  vec3(-1.5, 0.0, 0.225),
  vec3(-0.84, -1.5, 0.15),
  vec3(-1.5, -0.84, 0.15),
  vec3(-1.5, 0.0, 0.15),
  vec3(-2.0, 1.12, 0.45),
  vec3(-1.12, 2.0, 0.45),
  vec3(0.0, 2.0, 0.45),
  vec3(-1.5, 0.84, 0.225),
  vec3(-0.84, 1.5, 0.225),
  vec3(0.0, 1.5, 0.225),
  vec3(-1.5, 0.84, 0.15),
  vec3(-0.84, 1.5, 0.15),
  vec3(0.0, 1.5, 0.15),
  vec3(1.12, 2.0, 0.45),
  vec3(2.0, 1.12, 0.45),
  vec3(0.84, 1.5, 0.225),
  vec3(1.5, 0.84, 0.225),
  vec3(0.84, 1.5, 0.15),
  vec3(1.5, 0.84, 0.15),
  vec3(-1.6, 0.0, 2.025),
  vec3(-1.6, -0.3, 2.025),
  vec3(-1.5, -0.3, 2.25),
  vec3(-1.5, 0.0, 2.25),
  vec3(-2.3, 0.0, 2.025),
  vec3(-2.3, -0.3, 2.025),
  vec3(-2.5, -0.3, 2.25),
  vec3(-2.5, 0.0, 2.25),
  vec3(-2.7, 0.0, 2.025),
  vec3(-2.7, -0.3, 2.025),
  vec3(-3.0, -0.3, 2.25),
  vec3(-3.0, 0.0, 2.25),
  vec3(-2.7, 0.0, 1.8),
  vec3(-2.7, -0.3, 1.8),
  vec3(-3.0, -0.3, 1.8),
  vec3(-3.0, 0.0, 1.8),
  vec3(-1.5, 0.3, 2.25),
  vec3(-1.6, 0.3, 2.025),
  vec3(-2.5, 0.3, 2.25),
  vec3(-2.3, 0.3, 2.025),
  vec3(-3.0, 0.3, 2.25),
  vec3(-2.7, 0.3, 2.025),
  vec3(-3.0, 0.3, 1.8),
  vec3(-2.7, 0.3, 1.8),
  vec3(-2.7, 0.0, 1.575),
  vec3(-2.7, -0.3, 1.575),
  vec3(-3.0, -0.3, 1.35),
  vec3(-3.0, 0.0, 1.35),
  vec3(-2.5, 0.0, 1.125),
  vec3(-2.5, -0.3, 1.125),
  vec3(-2.65, -0.3, 0.9375),
  vec3(-2.65, 0.0, 0.9375),
  vec3(-2.0, -0.3, 0.9),
  vec3(-1.9, -0.3, 0.6),
  vec3(-1.9, 0.0, 0.6),
  vec3(-3.0, 0.3, 1.35),
  vec3(-2.7, 0.3, 1.575),
  vec3(-2.65, 0.3, 0.9375),
  vec3(-2.5, 0.3, 1.125),
  vec3(-1.9, 0.3, 0.6),
  vec3(-2.0, 0.3, 0.9),
  vec3(1.7, 0.0, 1.425),
  vec3(1.7, -0.66, 1.425),
  vec3(1.7, -0.66, 0.6),
  vec3(1.7, 0.0, 0.6),
  vec3(2.6, 0.0, 1.425),
  vec3(2.6, -0.66, 1.425),
  vec3(3.1, -0.66, 0.825),
  vec3(3.1, 0.0, 0.825),
  vec3(2.3, 0.0, 2.1),
  vec3(2.3, -0.25, 2.1),
  vec3(2.4, -0.25, 2.025),
  vec3(2.4, 0.0, 2.025),
  vec3(2.7, 0.0, 2.4),
  vec3(2.7, -0.25, 2.4),
  vec3(3.3, -0.25, 2.4),
  vec3(3.3, 0.0, 2.4),
  vec3(1.7, 0.66, 0.6),
  vec3(1.7, 0.66, 1.425),
  vec3(3.1, 0.66, 0.825),
  vec3(2.6, 0.66, 1.425),
  vec3(2.4, 0.25, 2.025),
  vec3(2.3, 0.25, 2.1),
  vec3(3.3, 0.25, 2.4),
  vec3(2.7, 0.25, 2.4),
  vec3(2.8, 0.0, 2.475),
  vec3(2.8, -0.25, 2.475),
  vec3(3.525, -0.25, 2.49375),
  vec3(3.525, 0.0, 2.49375),
  vec3(2.9, 0.0, 2.475),
  vec3(2.9, -0.15, 2.475),
  vec3(3.45, -0.15, 2.5125),
  vec3(3.45, 0.0, 2.5125),
  vec3(2.8, 0.0, 2.4),
  vec3(2.8, -0.15, 2.4),
  vec3(3.2, -0.15, 2.4),
  vec3(3.2, 0.0, 2.4),
  vec3(3.525, 0.25, 2.49375),
  vec3(2.8, 0.25, 2.475),
  vec3(3.45, 0.15, 2.5125),
  vec3(2.9, 0.15, 2.475),
  vec3(3.2, 0.15, 2.4),
  vec3(2.8, 0.15, 2.4),
  vec3(0.0, 0.0, 3.15),
  vec3(0.0, -0.002, 3.15),
  vec3(0.002, 0.0, 3.15),
  vec3(0.8, 0.0, 3.15),
  vec3(0.8, -0.45, 3.15),
  vec3(0.45, -0.8, 3.15),
  vec3(0.0, -0.8, 3.15),
  vec3(0.0, 0.0, 2.85),
  vec3(0.2, 0.0, 2.7),
  vec3(0.2, -0.112, 2.7),
  vec3(0.112, -0.2, 2.7),
  vec3(0.0, -0.2, 2.7),
  vec3(-0.002, 0.0, 3.15),
  vec3(-0.45, -0.8, 3.15),
  vec3(-0.8, -0.45, 3.15),
  vec3(-0.8, 0.0, 3.15),
  vec3(-0.112, -0.2, 2.7),
  vec3(-0.2, -0.112, 2.7),
  vec3(-0.2, 0.0, 2.7),
  vec3(0.0, 0.002, 3.15),
  vec3(-0.8, 0.45, 3.15),
  vec3(-0.45, 0.8, 3.15),
  vec3(0.0, 0.8, 3.15),
  vec3(-0.2, 0.112, 2.7),
  vec3(-0.112, 0.2, 2.7),
  vec3(0.0, 0.2, 2.7),
  vec3(0.45, 0.8, 3.15),
  vec3(0.8, 0.45, 3.15),
  vec3(0.112, 0.2, 2.7),
  vec3(0.2, 0.112, 2.7),
  vec3(0.4, 0.0, 2.55),
  vec3(0.4, -0.224, 2.55),
  vec3(0.224, -0.4, 2.55),
  vec3(0.0, -0.4, 2.55),
  vec3(1.3, 0.0, 2.55),
  vec3(1.3, -0.728, 2.55),
  vec3(0.728, -1.3, 2.55),
  vec3(0.0, -1.3, 2.55),
  vec3(1.3, 0.0, 2.4),
  vec3(1.3, -0.728, 2.4),
  vec3(0.728, -1.3, 2.4),
  vec3(0.0, -1.3, 2.4),
  vec3(-0.224, -0.4, 2.55),
  vec3(-0.4, -0.224, 2.55),
  vec3(-0.4, 0.0, 2.55),
  vec3(-0.728, -1.3, 2.55),
  vec3(-1.3, -0.728, 2.55),
  vec3(-1.3, 0.0, 2.55),
  vec3(-0.728, -1.3, 2.4),
  vec3(-1.3, -0.728, 2.4),
  vec3(-1.3, 0.0, 2.4),
  vec3(-0.4, 0.224, 2.55),
  vec3(-0.224, 0.4, 2.55),
  vec3(0.0, 0.4, 2.55),
  vec3(-1.3, 0.728, 2.55),
  vec3(-0.728, 1.3, 2.55),
  vec3(0.0, 1.3, 2.55),
  vec3(-1.3, 0.728, 2.4),
  vec3(-0.728, 1.3, 2.4),
  vec3(0.0, 1.3, 2.4),
  vec3(0.224, 0.4, 2.55),
  vec3(0.4, 0.224, 2.55),
  vec3(0.728, 1.3, 2.55),
  vec3(1.3, 0.728, 2.55),
  vec3(0.728, 1.3, 2.4),
  vec3(1.3, 0.728, 2.4),
  vec3(0.0, 0.0, 0.0),
  vec3(1.5, 0.0, 0.15),
  vec3(1.5, 0.84, 0.15),
  vec3(0.84, 1.5, 0.15),
  vec3(0.0, 1.5, 0.15),
  vec3(1.5, 0.0, 0.075),
  vec3(1.5, 0.84, 0.075),
  vec3(0.84, 1.5, 0.075),
  vec3(0.0, 1.5, 0.075),
  vec3(1.425, 0.0, 0.0),
  vec3(1.425, 0.798, 0.0),
  vec3(0.798, 1.425, 0.0),
  vec3(0.0, 1.425, 0.0),
  vec3(-0.84, 1.5, 0.15),
  vec3(-1.5, 0.84, 0.15),
  vec3(-1.5, 0.0, 0.15),
  vec3(-0.84, 1.5, 0.075),
  vec3(-1.5, 0.84, 0.075),
  vec3(-1.5, 0.0, 0.075),
  vec3(-0.798, 1.425, 0.0),
  vec3(-1.425, 0.798, 0.0),
  vec3(-1.425, 0.0, 0.0),
  vec3(-1.5, -0.84, 0.15),
  vec3(-0.84, -1.5, 0.15),
  vec3(0.0, -1.5, 0.15),
  vec3(-1.5, -0.84, 0.075),
  vec3(-0.84, -1.5, 0.075),
  vec3(0.0, -1.5, 0.075),
  vec3(-1.425, -0.798, 0.0),
  vec3(-0.798, -1.425, 0.0),
  vec3(0.0, -1.425, 0.0),
  vec3(0.84, -1.5, 0.15),
  vec3(1.5, -0.84, 0.15),
  vec3(0.84, -1.5, 0.075),
  vec3(1.5, -0.84, 0.075),
  vec3(0.798, -1.425, 0.0),
  vec3(1.425, -0.798, 0.0),
];
