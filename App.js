

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './src/public/store';

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <DrawerNavigator />
    </Provider>);
  }
}