import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather'
import LocationForm from './components/LocationForm'

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {loaded: false};
		//this.updateCity("Boston");
	}

	updateCity(city){
		fetch("http://localhost:8080/api/weather?city=" + city)
		.then(response => response.json())
		.then(data => this.setState({weather: data, loaded: true}))
		.catch((error) => {
      console.error(error);
    });

	}

	render() {
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
