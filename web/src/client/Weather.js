import React, { Component } from "react";

export default class Weather extends Component {
	constructor(props){
		super(props)
		this.state = {
			loaded: false
		}
	}

	componentDidMount(){
		fetch("/api/weather")
		.then(response => response.json())
		.then(data => this.setState({weather: data, loaded: true}))
	}

	render () {
		const { loaded, weather } = this.state;

		if (loaded){
			console.log(weather)
			let celsius = weather.main.temp - 273.15;
			let fahrenheit = (weather.main.temp * (9.0/5.0)) - 459.67;
			return (
				<ul>
					<li>Celsius: { celsius } </li>
					<li> Fahrenheit: { fahrenheit }</li>
				</ul>
			)
		}
		else {
			return <div>Loading...</div>
		}
		
	}
}