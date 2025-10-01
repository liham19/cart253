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
 * Hand sign of the cursor arm
 */
const handsign = {
    //Property that defines the OK hand sign when the mouse is pressed. Starts out false to let the hand be a simple wave.
    ok: false
}

/**
 * The right eyebrow
 */
let rightEyebrow = {
    //RIGHT Eyebrow position and colour
    x: 0,
    y: 0,
    fill: (0, 0, 0),
    //RIGHT Eyebrow movement
    velocity: {
        x: 0,
        y: 0
    }
}

/**
 * The left eyebrow
 */
let leftEyebrow = {
    //LEFT Eyebrow position and colour
    x: 0,
    y: 0,
    fill: (0, 0, 0),
    //LEFT Eyebrow movement
    velocity: {
        x: 0,
        y: 0
    }
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
    checkSignsArm();
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
 * Changes the hand sign when the mouse button is being pressed
 */
function checkSignsArm() {
    if (mouseIsPressed) {
        handsign.ok = true;
    }
    else {
        handsign.ok = false;
    }
}

/**
 * Draws the arm (cursor) using functions. The hand sign will be drawn differently depending on whether or not the mouse button is being pressed
 */
function drawArm() {
    if (handsign.ok) {
        drawForearm();
        drawOKPalm();
        drawOKFingers();
    }
    else {
        drawForearm();
        drawHIPalm();
        drawHIFingers();
    }
}

/**
 * Sets the arm position (or hand attached to the arm position) based on the mouse position
 */
function updateArm() {
    cursor.x = mouseX;
    cursor.y = mouseY;
}

/**
 * Function for Liam's head
 */
function drawHead() {

    //Left hand side
    push();
    fill(249, 212, 199);
    ellipse(160, 200, 130, 200);
    pop();
}