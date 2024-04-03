// DrawTriangle.js (c) 2012 matsuda
// Get the rendering context for 2DCG
let canvas;
let ctx;
function main() {
  // Retrieve <canvas> element
  canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  ctx = canvas.getContext('2d');

  // Draw a black canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color
  // Creates a vector v1 that will be red later on
  /* let v1 = new Vector3(2.25, 2.25, 0);
  v1[0] = 2.25;
  v1[1] = 2.25;
  v1[2] = 0;
  // Drawing the red vector v1
  drawVector(v1, "red");*/
}

/**
* Draws from the center of the canvas to the input coordinates
* @param v input vector
* @param color input color
* @return nothing
*/
function drawVector(v, color) {
  ctx.beginPath(); // This is needed for proper clearing 
  ctx.strokeStyle = color;
  ctx.moveTo(200, 200); // empirical, following computer coords
  ctx.lineTo(200 + (v[0] * 20), 200 - (v[1] * 20)); // empirical, following computer coords
  ctx.stroke();
}

/** On the press of the draw button, clears and re-fills the black canvas and draws the v1 vector from user input
 * @params nothing
 * @return nothing
 */
function handleDrawEvent() {
  // Clear and re-fill the black canvas before use
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, 400, 400);
  // Create v1 from user input
  let v1 = new Vector3;
  v1[0] = document.getElementById("v1_x").valueAsNumber;
  v1[1] = document.getElementById("v1_y").valueAsNumber;
  v1[2] = 0;
  // Draw v1 into the canvas
  drawVector(v1, "red");
}