import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Mi Perfil',
  };

  render() {
    return (
      <View>
        <Text>Mi perfil screen</Text>
      </View>
    )
  }
}
