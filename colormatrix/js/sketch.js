function setup() {
    createCanvas(400,400);
noStroke();
}

function draw() {

for(var i = 0; i < 50 ; i++) {
  var hue = 0;
  var x = 10;
  var y = 2;
for(var j = 0; j < 50 ; j++) {

  colorMode(HSB, 100);
  gradient = color(hue , 5 + (y * i), 100);

  fill(gradient);
  rect(x * j, x * i, 10, 10);
  hue += 2;
        }
    }
}
