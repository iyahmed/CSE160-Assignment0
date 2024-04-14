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
}

/**
* Draws from the center of the canvas to the input coordinates
* @param v (first input vector)
* @param color (second input color)
* @return (nothing)
*/
function drawVector(v, color) {
  ctx.beginPath(); // This is needed for proper clearing 
  ctx.strokeStyle = color;
  ctx.moveTo(200, 200); // empirical, following computer coords
  ctx.lineTo(200 + (v.elements[0] * 20), 200 - (v.elements[1] * 20)); // empirical, following computer coords
  ctx.stroke();
}

/**
 * Computes the angle between the two Vectors v1 and v2
 * @param v1 (first input vector)
 * @param v2 (second input vector)
 * @return (nothing)
 */
function angleBetween(v1, v2) {
  let numerator = Vector3.dot(v1, v2);
  let denominator = Vector3.dot(v1.normalize(), v2.normalize());
  let frac = numerator / denominator;
  if (isNaN(frac) === true) { frac = 0; } // Need it to be 0 for the acos()
  let angle = Math.acos(frac) * (180 / Math.PI); // Need it to convert from radians to degrees
  console.log("Angle: " + angle);
}

/**
 * Computes the area of the triangle formed by the two Vectors v1 and v2
 * @param v1 (first input vector)
 * @param v2 (second input vector)
 * @return (nothing)
 */
function areaTriangle(v1, v2) {
  let cross = Vector3.cross(v1, v2);
  let parallelogram = cross.magnitude();
  let area = parallelogram / 2;

  console.log("Area of the triangle: " + area);
}
/** On the press of the first draw button, clears and re-fills the black canvas and draws the v1 and v2 Vectors from user input
 * @params (nothing)
 * @return (nothing)
 */
function handleDrawEvent() {
  // Clear and re-fill the black canvas before use
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, 400, 400);
  // Create v1 and v2 from user input
  let v1 = new Vector3([0, 0, 0]);
  let v2 = new Vector3([0, 0, 0]);
  v1.elements[0] = document.getElementById("v1_x").valueAsNumber;
  v1.elements[1] = document.getElementById("v1_y").valueAsNumber;
  v2.elements[0] = document.getElementById("v2_x").valueAsNumber;
  v2.elements[1] = document.getElementById("v2_y").valueAsNumber;
  v1.elements[2], v2.elements[2] = 0;
  // Draw v1 and v2 into the canvas
  drawVector(v1, "red");
  drawVector(v2, "blue");
  // To draw the green line(s) (v3 and possibly v4)
  handleDrawOperationEvent();
}

/** On the press of the second draw button, clears and re-fills the black canvas and compute mathematical operations on the v1 and v2 Vectors from user input
 * @params nothing
 * @return nothing
 */
function handleDrawOperationEvent() {
  // Clear and re-fill the black canvas before use
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, 400, 400);
  // Create v1 and v2 from user input
  let v1 = new Vector3([0, 0, 0]);
  let v2 = new Vector3([0, 0, 0]);
  v1.elements[0] = document.getElementById("v1_x").valueAsNumber;
  v1.elements[1] = document.getElementById("v1_y").valueAsNumber;
  v2.elements[0] = document.getElementById("v2_x").valueAsNumber;
  v2.elements[1] = document.getElementById("v2_y").valueAsNumber;
  v1.elements[2], v2.elements[2] = 0;
  // Draw v1 and v2 into the canvas
  drawVector(v1, "red");
  drawVector(v2, "blue");
  // Calls the correct Vector3 operation based off the values of the selector and scalar (+, -, *, /)
  let v3 = new Vector3([0, 0, 0]);
  let v4 = new Vector3([0, 0, 0]);
  let selector = document.getElementById("operation_selector").value;
  let scalar = document.getElementById("operation_scalar").value;
  if (selector === "Add") {
    v3 = v1.add(v2);
    drawVector(v3, "green");
  } else if (selector === "Subtract") {
    v3 = v1.sub(v2);
    drawVector(v3, "green");
  } else if (selector === "Multiply") {
    v3 = v1.mul(scalar);
    v4 = v2.mul(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (selector === "Divide") {
    v3 = v1.div(scalar);
    v4 = v2.div(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (selector === "Magnitude") {
    console.log("Magnitude v1: " + v1.magnitude());
    console.log("Magnitude v2: " + v2.magnitude());
  } else if (selector === "Normalize") {
    v3 = v1.normalize();
    v4 = v2.normalize();
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (selector === "Angle Between") {
    angleBetween(v1, v2);
  } else if (selector === "Area") {
    areaTriangle(v1, v2);
  }
}