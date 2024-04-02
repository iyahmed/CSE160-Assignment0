// DrawTriangle.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
  ctx.fillRect(120, 10, 150, 150);        // Fill a rectangle with the color
}

// Creates a vector v1 that will be red later on
//v1 = Vector3(10, 10, 0);

/**
* Creates a vector that is draw to the screen
* @param v input vector
* @param color input color
* @return nothing
*/
/*function drawVector(v, color) {
lineTo((v[0] * 20, v[1] * 20), (v[2] * 20, v[3] * 20));
}*/

// drawing the red vector v1
//drawVector(v1, "red");