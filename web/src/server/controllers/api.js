const express = require("express");
const { getWeatherForCity, getWeatherForCoordinates } = require("../middlewares/weather")
const { getPlaces, getCoordinates } = require("../middlewares/google")

const apiRouter = express.Router();

apiRouter.get("/weatherForCity", getWeatherForCity, (req, res) => (
		res.json(req.weather)
	)
);

apiRouter.get("/weatherForCoordinates", getWeatherForCoordinates, (req, res) => (
		res.json(req.weather)
	)
);

apiRouter.get("/places", getPlaces , (req, res) => (
		res.json(req.suggestions)
	)
);

apiRouter.get("/coordinates", getCoordinates , (req, res) => (
		res.json(req.coordinates)
	)
);



module.exports = apiRouter;