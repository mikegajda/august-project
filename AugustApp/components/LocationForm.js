import React, { Component } from "react";
var t = require('tcomb-form-native');
const Form = t.form.Form;
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native'

// here we are: define your domain model
var Location = t.struct({
  city: t.String,              // a required string
});


export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Boston'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A city was submitted: ' + this.state.value);
    this.props.updateCity(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form ref="form" type={Location}/>
        <Button title="Submit" onPress={this.handleSubmit.bind(this)} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});