
// ***** Global variables ***** //

var MN1;
var topY = 20;
var bottomY = 600;
var leftX = 100;
var rightX = 800;
var textLeft = 60;
var startYearBuilt=1900;
var endYearBuilt=2014;
var startFloors= 0;
var endFloors=23;


// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(14);
  textFont('Roboto');
  console.log('Setup complete...');
}
// ***** Preload function ***** //
function preload(){
  MN1 = loadTable('../data/MN22.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(RIGHT, CENTER);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(MN1.getRowCount() + ' rows loaded...');
  print(MN1.getColumnCount() + ' columns loaded...');
  noLoop();
}


// ***** Draw function ***** //
function draw() {
  background(255);
  fill(167,167,167);
  textAlign(LEFT, CENTER);
  textSize(14);
 text("Year Built vs. Floor Height in MN1 among Residential and Commerical", textLeft - 10, topY + 650);
   text("Commercial", textLeft+640, topY + 650);
   text("Residential", textLeft+640, topY + 670);
   text("Park", textLeft+640, topY + 690);
 textAlign(RIGHT, CENTER);
  for (var i = 0; i < 24; i++) {
    noStroke();
    text(i, textLeft, map(i, 0, 23, bottomY, topY));
    stroke(200);
    line(textLeft + 20, map(i, 0, 10, bottomY, topY), rightX + 10, map(i, 0, 10, bottomY, topY));
  }

  noStroke();
  for (var i = 0; i < 10; i++) {
    textAlign(CENTER, TOP);
    text(round(map(i, 0, 9, 1900, 2014)), map(i, 0, 9, leftX, rightX), bottomY + 5);
  }
  for (var i = 0; i < MN1.getRowCount(); i++) {

    var Floors = MN1.getNum(i, 'Floors');
    var YearBuilt = MN1.getString(i, 'YearBuilt');
    var xPosition = map(YearBuilt, startYearBuilt, endYearBuilt, leftX, rightX);
    var yPosition = map(Floors, startFloors, endFloors, bottomY, topY);
    var type = MN1.getString(i, 'type');
			if (type == 'Commercial'){
				fill (236,176,47);
			}
			else if (type == 'Residential') {
				fill (46,167,163);
			}
			else {
				fill (217,68,216);
			}
    stroke(255);
    ellipse (xPosition, yPosition,8, 8);

    fill (236,176,47);
  ellipse(textLeft +600, topY + 650, 10,10);
  	fill (217,68,216);
  ellipse(textLeft +600, topY + 670, 10,10);
  fill (46,167,163);
  ellipse(textLeft +600, topY + 690, 10,10);

  }

}
