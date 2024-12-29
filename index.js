/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import { Welcome, Login, Register, FoodList} from './Screens';
AppRegistry.registerComponent(appName, () => () => <FoodList/>);
