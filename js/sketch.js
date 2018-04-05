// **** Global Variables ***** //
var apiKey = 'b48851c57ea2d35039a425fa9cedaa26';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var city= 'New York';
var weatherDataForecast;
var button;
var cityInput;
var description='';
var temperature = 0;
var humidity = 0;
var speed = 0;
var sunrise = 0;
var sunset = 0;
var pressure = 0;

// **** Preload Function **** //
function preload(){
  var request = baseURL + 'New York' + '&apikey=' + apiKey;
  weatherData = loadJSON(request);
  print(weatherData);
}

// **** Setup Function ****** //
function setup(){
  createCanvas(800, 800);
  background(200);

  noLoop();
  button= select('#submit');
  button.mousePressed(queryAPI);
}

// queryAPI//
function queryAPI (){
  var request = baseURL+city+ '&apikey='+apikey;
  loadJSON(request, getWeatherData);
}
function getWeatherData(apiResponse){
  weatherData = apiResponse;
  redraw();

}

function draw(){
  if (weatherData){


  var description = weatherData.weather[0].description;
  var temperature = weatherData.main.temp;
  var humidity = weatherData.main.humidity;
  var pressure = weatherData.main.pressure;
  text('The current weather for New York City is:', 50, 50);
  text(description, 80, 70);
  text(temperature + ' F', 80, 90);
  text(humidity + '% humidity', 80, 110);
  text(pressure + ' hPa (pressure)', 80, 130);
}
}
