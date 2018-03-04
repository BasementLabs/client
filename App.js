/**
 * Copyright (c) 2018, Grant Hughes, All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 */

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';

/**
 * @file Test Client slide for Basement Labs app. Form with user name input and message input
 *       to be sent to client database
 * @author Grant Hughes
 * @version 0.1
 */
export default class Test extends Component {

  /**
   * Constructor for App.js class. Initializes user and message strings to empty
   *
   * @param props - Props for the constructor
   */
  constructor(props) {
    super(props);
    this.state = {user: '', message: ''};
  }

  /**
  * Process form submit. Sends POST reqest to application API containing
  * user and message values submitted into form.
  */
  submitForm(user, message) {

    if(user == '' && message == '') {
      Alert.alert("Failure: One or more fields are empty.");
    }
    else {

      var url = "http://ec2-34-238-119-166.compute-1.amazonaws.com/message";

      var result = fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'user': user,
          'message': message
        })
      })
      .then(console.log("hi"))
      .catch(e => { throw e; });
      Alert.alert("Success: Your message " + '"' + this.state.message + '"' + " has been entered into the database.");
    }
  }

  /**
  * Function to render React Hyptertext onto screen of mobile device
  */
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold', width: 200, textAlign: 'center'}}>Send a message to the database</Text>
        <TextInput
          style={styles.user}
          placeholder="Name"
          onChangeText={(user) => this.setState({user})}
        />
        <TextInput
          style={styles.message}
          placeholder="Message"
          onChangeText={(message) => this.setState({message})}
        />
        <View style={styles.button}>
          <Button
            onPress={() => {
              this.submitForm(this.state.user, this.state.message)
            }}
            title="Enter"
          />
        </View>
      </View>
    );
  }
}

// Styles for form components
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  user: {
    height: 40,
    width: 200,
    backgroundColor: '#f6f6f6',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 5
  },
  message: {
    height: 40,
    width: 200,
    backgroundColor: '#f6f6f6',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 10
  },
  button: {
    borderRadius: 10,
    padding: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.15,
    marginTop: 10
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('client', () => Test);
