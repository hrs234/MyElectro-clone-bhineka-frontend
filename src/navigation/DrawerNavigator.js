import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Icon } from "native-base";

//redux
import { Provider } from 'react-redux'
import store from '../public/store';

// Import the pages component
import Splash from '../screen/splash';
import Main from '../screen/main';
import Register from '../screen/Register';
import Login from '../screen/Login';
import wishlist from '../screen/wishlist';
import paymentHistory from '../screen/paymentHistory';
import addSelling from '../screen/addSelling';
import Forgot from '../screen/Forgot';
import ChangePassword from '../screen/ChangePassword';
import cart from '../screen/Cart';
import search from '../screen/Search';

//custom drawer
// import SideMenu from '../components/SideMenu';
import SideMenu from '../components/SideMenu';

const AppSwitchNavigatiorA = createDrawerNavigator(
  {
    App: { screen: Main },
    Splash: { screen: Splash },
    Register: { screen: Register },
    Login: { screen: Login },
    wishlist:{ screen: wishlist },
    paymentHistory: {screen: paymentHistory},
    addSelling: {screen: addSelling},
    Forgot: {screen: Forgot},
    ChangePassword: {screen: ChangePassword},
    cart: { screen: cart },
    search: { screen: search },
    // profile: { screen: profile }
  
  },
  {
    initialRouteName:'App',
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: SideMenu,
    contentOptions: {
      activeTintColor: '#000',
    }
  });

const AppContainer = createAppContainer(AppSwitchNavigatiorA);
export default class DrawerNavigator extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    )
  }
}