/**
 * @format
 */
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import { Welcome, Login, Register} from './Screens';
AppRegistry.registerComponent(appName, () => () => <Register/>);
