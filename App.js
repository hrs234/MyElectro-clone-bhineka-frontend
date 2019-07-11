import React, { Fragment, Component } from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import AppNavigator from "./src/DrawerStack";

import { Provider } from 'react-redux'
import store from './src/public/store';

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        isLoading: false
      };
    }
  }

  render() {
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}