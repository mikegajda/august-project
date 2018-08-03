const fetch = require("node-fetch");

const getWeather = async(req, res, next) => {
	let weather = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=" + process.env.apiKey)
		.then(response => response.json())
		.then(data => data);
	
	req.weather = weather;
	next();
}

module.exports = getWeather;