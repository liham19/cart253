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
    x: undefined,
    y: undefined,
    fill: "#000000"
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

    // No stroke everywhere
    noStroke();

    //Function to draw the portrait
    drawLiam();

    //Functions to draw and update the arm cursor
    updateArm();
    checkSignsArm();
    drawArm();
}

/**
 * Draws myself using functions
 */
function drawLiam() {
    drawTorso();
    drawHead();
    drawHair();
    drawEyes();
    drawMouth();
    drawNose();
    drawEyebrows();
}

/**
 * Function for Liam's neck and shoulders (torso)
 */
function drawTorso() {

    //Shoulders
    push();
    fill(90, 90, 110);
    angleMode(DEGREES);
    arc(225, 405, 380, 190, 180, 0);
    pop();

    //Neck
    push();
    fill(238, 191, 179);
    angleMode(DEGREES);
    rect(142, 220, 170, 120);
    arc(227, 340, 170, 120, 0, 180);
    pop();

}
/**
 * Function for Liam's head
 */
function drawHead() {

    //Left hand side
    push();
    fill(249, 212, 199);
    ellipse(160, 200, 90, 200);
    pop();

    //Right hand side
    push();
    fill(249, 212, 199);
    ellipse(275, 200, 130, 200);
    pop();

    //Middle of the face
    push();
    fill(249, 212, 199);
    rect(150, 110, 120, 170);
    pop();

    //Drawing the chin
    push();
    fill(249, 212, 199);
    quad(122, 250, 310, 270, 268, 325, 180, 330);
    pop();

    //Drawing the ears
    //Left hand side ear
    push();
    fill(249, 212, 199);
    ellipse(120, 180, 50, 100);
    pop();
    //Right hand side ear
    push();
    fill(249, 212, 199);
    ellipse(335, 180, 60, 100);
    pop();
}

/**
 * Function for Liam's hair and beard
 */
function drawHair() {

    //Left hand side of the hair
    push();
    fill(112, 67, 37);
    rect(105, 90, 50, 100);
    pop();

    //Right hand side of the hair
    push();
    fill(112, 67, 37);
    rect(280, 90, 70, 100);
    pop();

    //Skin lining up the sides of the hair
    //Left hand side
    push();
    fill(249, 212, 199);
    ellipse(155, 200, 60, 180);
    pop();
    //Right hand side
    push();
    fill(249, 212, 199);
    ellipse(275, 200, 95, 180);
    pop();

    //Top of the forehead to line up the sides more
    push();
    fill(249, 212, 199);
    quad(140, 80, 310, 80, 270, 140, 160, 140);
    pop();

    //Top of the hair
    //First lump of hair
    push();
    fill(112, 67, 37);
    ellipse(150, 76, 100, 50);
    pop();
    //Second lump of hair
    push();
    fill(112, 67, 37);
    ellipse(200, 76, 80, 85);
    pop();
    //Third lump of hair
    push();
    fill(112, 67, 37);
    ellipse(240, 80, 100, 85);
    pop();
    //Fourth lump of hair
    push();
    fill(112, 67, 37);
    ellipse(305, 80, 90, 60);
    pop();

    //Hair strands
    push();
    strokeWeight(3);
    stroke(112, 67, 37);
    noFill();
    angleMode(DEGREES);
    arc(160, 72, 50, 50, 80, 20);
    arc(220, 60, 50, 50, 80, 20);
    arc(270, 68, 50, 50, 280, 0);
    arc(230, 102, 50, 50, 110, 65);
    pop();

    //Beard
    //Left hand side
    push();
    fill(112, 67, 37);
    quad(105, 180, 122, 185, 180, 260, 116, 250);
    quad(140, 300, 180, 335, 179, 258, 116, 249);
    pop();
    //Left hand side beard lineup
    push();
    fill(249, 212, 199);
    ellipse(180, 190, 110, 150);
    pop();
    //Right hand side
    push();
    fill(112, 67, 37);
    quad(322, 190, 350, 188, 340, 260, 280, 250);
    quad(260, 335, 320, 300, 340, 259, 280, 249);
    pop();
    //Right hand side beard lineup
    push();
    fill(249, 212, 199);
    ellipse(268, 192, 110, 140);
    pop();

    //Chin beard
    push();
    fill(112, 67, 37);
    rect(175, 310, 90, 25);
    pop();

    //Moustache
    push();
    fill(112, 67, 37);
    quad(185, 270, 210, 267, 205, 272, 180, 275);
    quad(240, 270, 235, 267, 262, 268, 268, 275);
    pop();
}

/**
 * Function for Liam's eyes
 */
function drawEyes() {

    //Ellipses for the pupils
    push();
    fill(74, 39, 21);
    //Left hand side pupil
    ellipse(178, 183, 18, 18);
    //Right hand side pupil
    ellipse(270, 183, 18, 18);
    pop();

    //Arcs for the lashes
    push();
    strokeWeight(3);
    stroke(0, 0, 0);
    noFill();
    angleMode(DEGREES);
    //Left hand side lash
    arc(175, 190, 40, 35, 220, -20);
    //Right hand side lash
    arc(272, 190, 40, 35, 200, -40);
    pop();

}

/**
 * Function for Liam's mouth
 */
function drawMouth() {

    //Bottom lip
    push();
    strokeWeight(3);
    stroke(206, 148, 137);
    noFill();
    angleMode(DEGREES);
    arc(225, 286, 30, 6, 0, 180);
    pop();

    //Top lip
    push();
    strokeWeight(3);
    stroke(0, 0, 0);
    //Left hand side
    line(200, 282, 215, 280);
    line(200, 282, 192, 280);
    //Right hand side
    line(232, 280, 250, 282);
    line(258, 280, 250, 282);
    pop();

    //Mid lip
    push();
    strokeWeight(3);
    stroke(0, 0, 0);
    noFill();
    angleMode(DEGREES);
    arc(223.5, 280, 13, 6, 0, 180);
    pop();

}

/**
 * Function for Liam's nose
 */
function drawNose() {

    //Middle nose
    push();
    strokeWeight(3);
    stroke(0, 0, 0);
    noFill();
    angleMode(DEGREES);
    arc(225, 250, 20, 12, 0, 180);
    pop();

    //Straight nostrils
    push();
    strokeWeight(3);
    stroke(0, 0, 0);
    //Left hand side
    line(207, 250, 215, 250);
    //Right hand side
    line(235, 250, 243, 250);
    pop();

    //Curve nostrils
    push();
    strokeWeight(3);
    stroke(206, 148, 137);
    noFill();
    angleMode(DEGREES);
    //Left hand side
    arc(210, 250, 15, 12, -180, -80);
    //Right hand side
    arc(240, 250, 15, 12, 250, 0);
    pop();
}

/**
 * Sets the arm position (or hand attached to the arm position) based on the mouse position
 */
function updateArm() {
    cursor.x = mouseX;
    cursor.y = mouseY;
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

function drawForearm() {

    push();
    fill(cursor.fill);
    rect(cursor.x, cursor.y, cursor.x + 100, cursor.y + 100);
    pop();
}