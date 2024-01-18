var polys = [];
var angle = 75;
var delta = 10;
var deltaSlider;
var angleSlider;

function setup() {
  createCanvas(1487, 705);
  background(51);
  textSize(14);
  fill(255);
  deltaSlider = select('#delta');
  angleSlider = select('#angle');
  redSlider = select('#red');
  greenSlider = select('#green');
  blueSlider = select('#blue');
  var inc = 100;
  for (var x = 0; x < width; x += inc) {
    for (var y = 0; y < height; y += inc) {
      var poly = new Polygon(4);
      poly.addVertex(x, y);
      poly.addVertex(x + inc, y);
      poly.addVertex(x + inc, y + inc);
      poly.addVertex(x, y + inc);
      poly.close();
      polys.push(poly);
    }
  }
}

function draw() {
  background(51);
  angle = angleSlider.value();
  delta = deltaSlider.value();
  for (var i = 0; i < polys.length; i++) {
    polys[i].hankin();
    polys[i].show();
  }
  var r = redSlider.value();
  var g = greenSlider.value();
  var b = blueSlider.value();
  edgeColor = color(r, g, b);
  stroke(edgeColor);
}