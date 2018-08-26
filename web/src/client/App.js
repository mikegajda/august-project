import React, { Component } from "react";
import Weather from "./Weather"
import LocationForm from "./LocationForm"

class App extends Component {
	constructor(props){
		super(props)
		this.state = {loaded: false};
	}

	updateCity(city){
		fetch("/api/weather?city=" + city)
		.then(response => response.json())
		.then(data => this.setState({weather: data, loaded: true}))
	}

	getWeatherForCoordinates(lat, lon){
		console.log("getWeatherForCoordinates", lat, lon)
		fetch(`/api/weatherForCoordinates?lat=${lat}&lon=${lon}`)
		.then(response => response.json())
		.then(data => this.setState({weather: data, loaded: true}))

	}

	render () {
		if (this.state.loaded){
			return (
				[ 
					<LocationForm getWeatherForCoordinates={this.getWeatherForCoordinates.bind(this)} />, 
					<Weather weather={ this.state.weather }/>
				]
			)
		}
		else {
			return <LocationForm getWeatherForCoordinates={this.getWeatherForCoordinates.bind(this)} />
		}
		
	}
}

export default App;