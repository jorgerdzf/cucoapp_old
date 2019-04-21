import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ProfileDetailScreen extends Component {
  static navigationOptions = {
    title: 'Detalle de Perfil',
  };

  render() {
    return (
      <View>
        <Text>Profile Detail Screen</Text>
      </View>
    )
  }
}
