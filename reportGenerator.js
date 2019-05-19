
 
var ejs = require('ejs');
var http = require('http');
var url = require('url');

var express = require('express');
var path = require('path');
var app = express();

var request = require('request');

app.set('port', 3000);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/weather', function(req, res){
	var q = url.parse(req.url, true).query;
	var apiKey = "5ad0cc9913d9a806059365d3b98bb028"
	
	var owmURL = "http://api.openweathermap.org/data/2.5/weather?q=" + q.city + "," + q.country
		+ "&units=imperial" +  "&appid=" + apiKey;
	
	
	request(owmURL, function (error, response, body){
		if (error){
			console.log(error);
		}
		else{
			var weather = JSON.parse(body)
			var weatherReport = "Temperature in " + q.city + ", " + q.country + ": " + weather.main.temp
				+ " degrees F";
				
			res.render('weather_template', {
				weatherReport: weatherReport,
				headerTitle: "OWMReporter - Current Weather"
			});
		}
	});
});

var server = app.listen(app.get('port'), function() {
	console.log('The server is running on http://localhost:' + app.get('port'));
});