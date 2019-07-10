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

// import AppStackNavigation from './src/navigator/navigate';
// import styles from './src/css/style';

// Import the pages component
import Splash from './src/screen/splash';
import Main from './src/screen/main';
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import Cart from './src/screen/Cart';
import Checkout from './src/screen/Checkout';


// Drawer Navigator
const AppSwitchNavigatiorA = createDrawerNavigator(
{
  App: { screen: Main },
  Splash: { screen: Splash },
  Register: { screen: Register },
  Login: { screen: Login },
  Cart: { screen: Cart },
  Checkout: { screen: Checkout }

},
{
  initialRouteName:'App',
  drawerWidth: 250,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#000',
  }
});

// Stack Navigator
const Stack = createStackNavigator(
{
  first: {screen: AppSwitchNavigatiorA}
},
{
  headerMode: 'none'
})
  
const AppContainer = createAppContainer(Stack);

export default class App extends Component 
{

  constructor(props)
  {
    super(props)
    {
      this.state = {
        isLoading: false
      }
    }
  }

  render() 
  {

    return (
      <AppContainer />
    );
  }
}


// export default App;
