/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';

import AppNavigator from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { Colors } from './src/utils/Themes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={Colors.coralRed} barStyle="light-content" animated />
      <AppNavigator />
    </Provider>
  );
};

export default App;
