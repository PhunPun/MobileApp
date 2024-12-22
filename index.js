/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './Screens/MainScreen';
import Welcome from './Screens/Welcome';
AppRegistry.registerComponent(appName, () =>Welcome);