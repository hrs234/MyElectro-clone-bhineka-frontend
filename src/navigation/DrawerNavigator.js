import React, { Component } from 'react';
import { createAppContainer, createDrawerNavigator,createSwitchNavigator } from 'react-navigation';
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

import profil from '../screen/Profil'
import history from '../screen/paymentHistory'

import Forgot from '../screen/Forgot';
import ChangePassword from '../screen/ChangePassword';
import cart from '../screen/Cart';
import search from '../screen/Search';
import Kontak from '../screen/Kontak';
import Informasi from '../screen/Informasi';


//custom drawer
// import SideMenu from '../components/SideMenu';
import SideMenu from '../components/SideMenu';


const AppSwitchNavigatorA = createDrawerNavigator(
    {
      Belanja : { 
        screen: Main,
        navigationOptions: {
          drawerIcon: (
            <Icon name="store" type="MaterialIcons" style={{ marginRight:-5 }} />
          )
        }
      },
      // Splash : { screen: Splash },
      Register : { 
        screen: Register,
        navigationOptions: {
          drawerLabel: ()=>null
        }
      },
      Profil :{ screen: profil },
      Wishlist :{ screen: wishlist },
      //PaymentHistory : {screen: paymentHistory},
      //AddSelling : {screen: addSelling},
      Kontak :{ screen: Kontak },
      Informasi :{ screen: Informasi },
      Forgot :{ 
        screen: Forgot,
        navigationOptions: {
          drawerLabel: ()=>null
        }
      },
      Login : { screen: Login },
      History :{
        screen: history,
        navigationOptions: {
          drawerLabel: ()=>null
        }
      },
  },
  {
    initialRouteName:'Belanja',
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: SideMenu,
    contentOptions: {
      activeTintColor: '#000',
    }
  });
  const InitialNavigator = createSwitchNavigator({
    Splash: Splash,
    App: AppSwitchNavigatorA
  });

const AppContainer = createAppContainer(InitialNavigator);
export default class DrawerNavigator extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    )
  }
}