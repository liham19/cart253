/**
 * Self Portrait Art Jam
 * Liam St-Georges
 * 
 * This is a basic self portrait of myself. Variables will be used to make my eyebrows go up and down. Interactivity will be with the cursor moving my hand. Conditionals will be used to change the hand sign with a simple click of a button :).
 * 
 */

"use strict";

/**
 * The actual cursor
 */
const cursor = {
    //Cursor position and colour
    x: 0,
    y: 0,
    fill: (0, 0, 0)
}

/**
 * The right eyebrow
 */
let eyebrowR = {
    //RIGHT Eyebrow position and colour
    x: 0,
    y: 0,
    fill: (0, 0, 0)
}

/**
 * The left eyebrow
 */
let eyebrowL = {
    //LEFT Eyebrow position and colour
    x: 0,
    y: 0,
    fill: (0, 0, 0)
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(400, 400);

    //No boring old cursor for this one
    noCursor();
}


/**
 * Draws myself and the background
*/
function draw() {
    // Coloured Background
    background(140, 180, 255);

    //Function to draw the portrait
    drawLiam();

    //Functions to draw and update the arm cursor
    updateArm();
    drawArm();
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

/**
 * Sets the arm position (or hand attached to the arm position) based on the mouse position
 */
function updateArm() {
    cursor.x = mouseX;
    cursor.y = mouseY;
}