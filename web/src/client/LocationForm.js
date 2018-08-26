import React, { Component } from "react";
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationQuery: '',
      place_id: '',
      coordinates: {},
      locationSuggestions: [],
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getLocationSuggestions = this.getLocationSuggestions.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    if (event.target.value.length > 2){
      
    }
    else {
      this.setState({locationQuery: event.target.value});
    }
    
  }

  handleSubmit(event) {
    console.log('A city was submitted: ' + this.state.locationQuery);
    this.getCoordinates();
    event.preventDefault();
  }

  getCoordinates(){
    console.log("getCoordinates", this.state.place_id)

    fetch(`/api/coordinates?q=${this.state.place_id}`)
    .then(response => response.json())
    .then(data => this.props.getWeatherForCoordinates(data.result.geometry.location.lat, data.result.geometry.location.lng));
  }

  getLocationSuggestions() {
    this.setState({loading: true})
    console.log("getLocationSuggestions")
    fetch(`/api/places?q=${this.state.locationQuery}`)
    .then(response => response.json())
    .then(data => data.predictions.map((entry) => ({description: entry.description, place_id: entry.place_id})))
    .then(locationSuggestions => 
      this.setState({
        locationSuggestions: locationSuggestions,
        loading: false
      })
    );
  }

  render() {
    let component = this;
    return (
      <form class="">
        <div class="form-group row">
        <label class="col-sm-2 col-form-label text-right">Enter a location</label>
          <div class="col-sm-10">
          <AsyncTypeahead
            isLoading={this.state.loading}
            onSearch={(query) => this.setState({locationQuery: query}, this.getLocationSuggestions.bind(this))}
            onChange={(selected) => {
              console.log(selected[0])
              component.setState({
                place_id: selected[0].place_id
              }, component.getCoordinates)
            }}
            options={this.state.locationSuggestions}
            labelKey={"description"}
            promptText={"Type a location"}
          />
          </div>
        </div>
      </form>
    
    );
  }
}