import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, TextInput, View, Button, Alert } from 'react-native';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      }}>
        <TextInput
          style={{
            height: 60
          }}
          placeholder="Enter a message here"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{
          borderRadius: 10,
          padding: 3,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowRadius: 5,
          shadowOpacity: 0.15
        }}>
          <Button
            onPress={() => {
              Alert.alert("Your message " + '"' + this.state.text + '"' + " has been entered into the database");
            }}
            title="Enter"
          />
        </View>
      </View>
    );
  }
}


// skip this line if using Create React Native App
AppRegistry.registerComponent('client', () => Test);
