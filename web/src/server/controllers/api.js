const express = require("express");
const getWeather = require("../middlewares/weather")


const apiRouter = express.Router();

apiRouter.get("/weather", getWeather, (req, res) => (
		res.json(req.weather)
	)
);

module.exports = apiRouter;