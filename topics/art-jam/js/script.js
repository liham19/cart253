/**
 * Self Portrait Art Jam
 * Liam St-Georges
 * 
 * This is a basic self portrait of myself. Variables will be used to make my eyebrows go up and down. Interactivity will be with the cursor moving my hand. Conditionals will be used to change the hand sign with a simple click of a button :).
 * 
 */

"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * Draws myself and the background
*/
function draw() {
    // Coloured Background
    background(140, 180, 255);
}

/**
 * Draws myself using functions
 */
function drawLiam() {
    drawHead();
    drawHair();
    drawEar();
    drawEyes();
    drawMouth();
    drawBeard();
    drawNose();
    drawEyebrows();
    drawNeck();
    drawShoulders();
}

/**
 * Draws the arm (cursor) using functions
 */
function drawArm() {
    drawForearm();
    drawPalm();
    drawFingers();
}