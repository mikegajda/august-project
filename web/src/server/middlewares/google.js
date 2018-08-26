const fetch = require("node-fetch");

const getPlaces = async(req, res, next) => {
	// https://maps.googleapis.com/maps/api/place/autocomplete/output
	let suggestions = await fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + req.query.q + "&types=geocode&key=" + process.env.googleApiKey)
		.then(response => response.json())
		.then(data => data);

	console.log("getPlaces", suggestions)
	
	req.suggestions = suggestions;
	next();
}

const getCoordinates = async(req, res, next) => {
	// https://maps.googleapis.com/maps/api/place/autocomplete/output
	console.log("getCoordinates", req.query)
	console.log("url", `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.q}&fields=geometry&key=${process.env.googleApiKey}`)
	let coordinates = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.q}&fields=geometry&key=${process.env.googleApiKey}`)
		.then(response => response.json())
		.then(data => data);

	console.log("getCoordinates", coordinates)
	
	req.coordinates = coordinates;
	next();
}

module.exports = {getPlaces, getCoordinates}