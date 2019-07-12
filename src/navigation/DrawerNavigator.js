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
import kontak from '../screen/Kontak';
import informasi from '../screen/Informasi';
import profil from '../screen/Profil'
import history from '../screen/paymentHistory'

//custom drawer
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
      // Register : { screen: Register },
      // Login : { screen: Login },
      Profil :{ screen: profil },
      Wishlist :{ screen: wishlist },
      //PaymentHistory : {screen: paymentHistory},
      //AddSelling : {screen: addSelling},
      Kontak :{ screen: kontak },
      Informasi :{ screen: informasi },
      History :{
        screen: history,
        navigationOptions: {
          drawerLabel: ()=>null
        }
      }
    },
    {
      initialRouteName:'Belanja',
      drawerWidth: 280,
      contentComponent: SideMenu,
      contentOptions: {
        activeTintColor: '#908be8',
      }
    }
);

const AppContainer = createAppContainer(AppSwitchNavigatorA);
export default class DrawerNavigator extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    )
  }
}