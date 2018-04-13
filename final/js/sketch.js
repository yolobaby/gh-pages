// ***** Global variables ***** //
var ZONINGTABLE;
var topY = 20;
var bottomY = 600;
var leftX = 100;
var rightX = 700;
var textLeft = 60;
var buttonLabels = ['All', '<10 Floor', '11-15 Floor', '16-23 Floor'];
var buttonStartX = 360;
var buttonStartY = 660;
var buttonLength = 80;
var buttonHeight = 15;
var buttonSpacing = 10;
var selectedButton = 0;
var topfloor = new p5.Table;
var midfloor = new p5.Table;
var bottomfloor = new p5.Table;

// ***** Preload function ***** //
function preload(){
  ZONINGTABLE = loadTable('../data/MN201722.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textSize(12);
  textFont('Roboto');
  console.log('Setup complete...');
  print(ZONINGTABLE.getRowCount() + ' rows loaded...');
  print(ZONINGTABLE.getColumnCount() + ' columns loaded...');
  createNewTable();
  noLoop();
}

// ***** Labels Function ********* //
function drawLabels() {
  background(255);
  fill(167,167,167);
  textAlign(LEFT, CENTER);
  textSize(14);
 text("Year Built vs. Floor Height in MN1", textLeft - 10, topY + 650);

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
}

function createNewTable(){
  topfloor.addColumn('YearBuilt');
  topfloor.addColumn('Floors');
  midfloor.addColumn('YearBuilt');
  midfloor.addColumn('Floors');
  bottomfloor.addColumn('YearBuilt');
  bottomfloor.addColumn('Floors');
  for (var i = 0; i < ZONINGTABLE.getRowCount(); i++) {
    var floor = ZONINGTABLE.getNum(i, 'Floors');
    if (floor >= 16) {
      var newRow = topfloor.addRow();
      newRow.setString('YearBuilt', ZONINGTABLE.getString(i, 'YearBuilt'));
      newRow.setNum('Floors', ZONINGTABLE.getNum(i, 'Floors'));
        }
        else if (floor >= 11 && floor < 15) {
          var newRow = midfloor.addRow();
          newRow.setString('YearBuilt', ZONINGTABLE.getString(i, 'YearBuilt'));
          newRow.setNum('Floors', ZONINGTABLE.getNum(i, 'Floors'));
        }
        else {
          var newRow = bottomfloor.addRow();
          newRow.setString('YearBuilt', ZONINGTABLE.getString(i, 'YearBuilt'));
          newRow.setNum('Floors', ZONINGTABLE.getNum(i, 'Floors'));
        }
      }
      print('New tables created...');
    }



// ***** Draw Buildings function ***** //
function drawBuildings(){
  if (selectedButton == 0) {
    fill(0);
    noStroke();
    for (var i = 0; i < ZONINGTABLE.getRowCount(); i++) {
      var year = ZONINGTABLE.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var floorPosition = map(ZONINGTABLE.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, floorPosition, 5, 5);

    }
  }
  else if (selectedButton == 1){
    fill(237,176,47);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var floorPosition = map(bottomfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, floorPosition, 5, 5);
      fill(0);

    }
    fill(220);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
    }
  }
  else if (selectedButton == 2){
    fill(220);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(bottomfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
      fill(0);

    }
    fill(220);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
    }
  }
  else{
    fill(220);
    noStroke();
    for (var i = 0; i < bottomfloor.getRowCount(); i++) {
      var year = bottomfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var floorPosition = map(bottomfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, floorPosition, 5, 5);
    }
    fill(220);
    noStroke();
    for (var i = 0; i < midfloor.getRowCount(); i++) {
      var year = midfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(midfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
    }
    fill(255, 0, 0);
    noStroke();
    for (var i = 0; i < topfloor.getRowCount(); i++) {
      var year = topfloor.getString(i, 'YearBuilt');
      var yearPosition = map(year, 1900, 2015, leftX, rightX);
      var scorePosition = map(topfloor.getNum(i, 'Floors'), 0, 23, bottomY, topY);
      ellipse(yearPosition, scorePosition, 5, 5);
      fill(0);

    }
  }
}

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(200);
    }
    else {
      fill(240);
    }
    stroke(100);
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}

// ***** Draw function ***** //
function draw(){
  background(255);
  drawLabels();
  drawBuildings();
  drawButtons();
}

// ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseX <= (buttonStartX + buttonLength * 4 + buttonSpacing * 3) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 3;
    redraw();
  }
}
