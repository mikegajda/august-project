import React, { Component } from "react";
import Weather from "./Weather"
import LocationForm from "./LocationForm"

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {loaded: false};
	}

	updateCity(city){
		fetch("/api/weather?city=" + city)
		.then(response => response.json())
		.then(data => this.setState({weather: data, loaded: true}))

	}

	render () {
		if (this.state.loaded){
			return (
				[ 
					<LocationForm updateCity={this.updateCity.bind(this)} />, 
					<Weather weather={ this.state.weather }/>
				]
			)
		}
		else {
			return <LocationForm updateCity={this.updateCity.bind(this)} />
		}
		
	}
}