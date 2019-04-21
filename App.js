/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileDetailScreen from './screens/ProfileDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import PreferencesScreen from './screens/PreferencesScreen';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ProfileDetail: ProfileDetailScreen,
    Profile: ProfileScreen,
    Preferences: PreferencesScreen
  }, 
  {
    initialRouteName: 'Home'  
  }
);

const App = createAppContainer(AppNavigator);

export default App;
