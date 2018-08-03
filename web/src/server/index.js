const fetch = require("node-fetch");
const express = require("express");
const os = require("os");
const app = express();
require('dotenv').config();
app.use(express.static("dist"));


var weatherRouter = express.Router();
const getWeather = async(req, res, next) => {
	let weather = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Boston&APPID=" + process.env.apiKey)
		.then(response => response.json())
		.then(data => data);
	
	req.weather = weather;
	next();
}

weatherRouter.get("/weather", getWeather, (req, res) => (
		res.json(req.weather)
	)
);

app.use("/api", weatherRouter);

app.listen(8080, () => console.log("Listening on port 8080!"));