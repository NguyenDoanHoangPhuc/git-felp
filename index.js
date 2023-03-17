/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Welcome from './screens/Welcome'
import Login  from './screens/Login';
import FoodList from './screens/FoodList/FoodList';
import UITab from './navigation/UITab';
import { UIButton } from './components';
import App from './navigation/App';
import FoodInfo from './screens/FoodList/FoodInfo';

AppRegistry.registerComponent(appName,() => () => <App/>); 

