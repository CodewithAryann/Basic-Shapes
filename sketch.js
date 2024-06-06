function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Ellipse
  fill(255, 0, 0);
  ellipse(50, 50, 80, 80);

  // Triangle
  fill(0, 255, 0);
  triangle(200, 100, 250, 150, 150, 150);

  // Square
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(350, 100, 80, 80);

  // Pentagon
  fill(255, 255, 0);
  drawPolygon(100, 250, 60, 5);

  // Star
  fill(255, 165, 0);
  drawStar(250, 300, 40, 80, 5);

  // Hexagon
  fill(255, 0, 255);
  drawPolygon(350, 250, 50, 6);
}


function drawPolygon(x, y, radius, sides) {
  let angle = TWO_PI / sides;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
