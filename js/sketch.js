// Global Variables //
var apiKey = 'b48851c57ea2d35039a425fa9cedaa26';
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var city = 'New York';
var button;
var cityInput;
var description = '';
var temperature = 0;
var tempMax = 0;
var tempMin = 0;
var humidity = 0;
var pressure = 0;



// **** Setup Function ****** //
function setup(){

  createCanvas(800, 550);

  textFont ('Roboto Condensed');
  textSize (14);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);

  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].main;
  temperature = weatherData.main.temp;
  tempMax = weatherData.main.temp_max;
  tempMin = weatherData.main.temp_min;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  print(weatherData);
  redraw();
}




// **** Draw Function **** //
function draw(){

  var roundTemp = Math.round((temperature * (9/5)) - 459.67);
  var roundMax = Math.round((tempMax * (9/5)) - 459.67);
  var roundMin = Math.round((tempMin * (9/5)) - 459.67);

  background(255);

      if (roundTemp < 100){
	background(255)
	noStroke();
  fill(240, 213, 205);
  rect(400, 50, 800, 800);
   }




  if (weatherData){


	fill(255);
	textAlign(CENTER);
	textSize(80);
textFont('Roboto');
    text(description, 650, 350);

	textStyle (NORMAL);
	textFont('Roboto');
	textSize(50);
	textAlign(CENTER);
	textSize(60);

  line(512.5, 230,25,25);
  fill(108,164,240);
  ellipse(512.5, 230,25,25);
  ellipse(512.5, 430,25,25);
	rect(500, 230,25,200);
	textSize(15);
  textAlign(RIGHT);
	text(roundMin + ' F ', 520, 200);
  fill(0);
  textFont('Roboto');
  text(humidity + '% humidity', 660, 400);
  text(pressure + ' hPa (pressure)', 670, 420);


  }



}
