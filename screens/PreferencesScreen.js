import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class PreferencesScreen extends Component {
  static navigationOptions = {
    title: 'Preferencias',
  };

  render() {
    return (
      <View>
        <Text>Mis preferencias screen</Text>
      </View>
    )
  }
}
