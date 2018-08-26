import React, { Component } from "react";

export default class Weather extends Component {
	constructor(props){
		super(props)
	}


	render () {
		const { weather } = this.props;
		if (weather.main !== undefined && weather.main.temp !== undefined){
			let celsius = (weather.main.temp - 273.15).toFixed(0);
			//celsius = Math.round(celsius*2)/2;
			let fahrenheit = ((weather.main.temp * (9.0/5.0)) - 459.67).toFixed(0);
			return (
				<div class="text-center p-6">
					<div class="display-1" style={styles.big}>{ celsius }<small style={styles.small}>°C</small></div>
					<hr style={styles.divider}></hr>
					<div class="display-1" style={styles.big}>{ fahrenheit }<small style={styles.small}>°F</small></div>
				</div>
			)
		}
		else {
			return <div>Error, are you sure you entered a real city?</div>
		}

	}
}

const styles = {
	small: {
		fontSize: "33%",
		fontWeight: "300",
		position: "relative",
		top: "-75px"
	},
	big: {
		verticalAlign: "top",
		fontWeight: "400",
		fontSize: "10rem"
	},
	divider: {
		width: "300px"
	}
}
