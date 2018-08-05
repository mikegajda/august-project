import React, { Component } from "react";

export default class Weather extends Component {
	constructor(props){
		super(props)
	}


	render () {
		const { weather } = this.props;
		if (weather.main !== undefined && weather.main.temp !== undefined){
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
			return <div>Error, are you sure you entered a real city?</div>
		}

		
		
	}
}