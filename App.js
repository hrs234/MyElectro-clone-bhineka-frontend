

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
// import { Provider as paperProvider } from 'react-native-paper';
// import AppStackNavigation from './src/navigator/navigate';
// import styles from './src/css/style';
    
import { Provider } from 'react-redux'
import store from './src/public/store';

// Import the pages component
import Splash from './src/screen/splash';
import Main from './src/screen/main';
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import wishlist from './src/screen/wishlist';
import paymentHistory from './src/screen/paymentHistory';
import addSelling from './src/screen/addSelling';
import cart from './src/screen/Cart';
import search from './src/screen/Search';
import profile from './src/screen/profile';


// Drawer Navigator
const AppSwitchNavigatiorA = createDrawerNavigator(
{
  App: { screen: Main },
  Splash: { screen: Splash },
  Register: { screen: Register },
  Login: { screen: Login },
  wishlist:{ screen: wishlist },
  paymentHistory: {screen: paymentHistory},
  addSelling: {screen: addSelling},
  cart: {screen: cart},
  search: {screen: search},
  profile: {screen: profile}
},
{
  initialRouteName:'Splash',
  drawerWidth: 250,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#000',
  }
});
  
const AppContainer = createAppContainer(AppSwitchNavigatiorA);

export default class App extends Component 
{

  constructor(props)
  {
    super(props)
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