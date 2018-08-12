import React, { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
				<View style={styles.container}>
					<Text>Celsius: { celsius } </Text>
					<Text>Fahrenheit: { fahrenheit }</Text>
				</View>
			)
		}
		else {
			return (
				<View style={styles.container}>
					<Text>Error, are you sure you entered a real city?</Text>
				</View>
				)
		}

		
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
