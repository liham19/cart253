/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
  shakeAmount: 0
};
let skyShade = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
}
// Bird incoming
let bird = {
    x: 50,
    y: 80,
    size: 35,
    // Colour
    fill: {
        r: 140,
        g: 255,
        b: 140
    }
}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(skyShade.fill.r, skyShade.fill.g, skyShade.fill.b);
  skyShade.fill.r = skyShade.fill.r + -0.5
  skyShade.fill.g = skyShade.fill.g + -0.5
  skyShade.fill.b = skyShade.fill.b + -0.5
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x + random(-4, 4), mrFurious.y, mrFurious.size);
  pop();
// MrFurious gets progressively more red
  mrFurious.fill.g = mrFurious.fill.g + -0.75
  mrFurious.fill.b = mrFurious.fill.b + -0.75
  push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  ellipse(bird.x, bird.y, bird.size)
  bird.x = bird.x + random(1, 3);
  bird.y = bird.y + random(-2, 1)
}