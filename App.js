/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { Container, Header, Body } from "native-base";
import { DrawerItems, SafeAreaView } from "react-navigation";

// import { Provider as paperProvider } from 'react-native-paper';
// import AppStackNavigation from './src/navigator/navigate';
// import styles from './src/css/style';

// Import the pages component
import Splash from "./src/screen/splash";
import Main from "./src/screen/main";
import Register from "./src/screen/Register";
import Login from "./src/screen/Login";
import Cart from "./src/screen/Cart";
import Checkout from "./src/screen/Checkout";
import Search from "./src/screen/Search";
import wishlist from "./src/screen/wishlist";
import paymentHistory from "./src/screen/paymentHistory";
import addSelling from "./src/screen/addSelling";

import { ScrollView } from "react-native-gesture-handler";

const custom = props => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={{ alignItems: "baseline" }}>
        <Image
          style={styles.drawerImage}
          source={require("./src/assets/image/logo.png")}
        />
        <View style={{flex:1}}>
        <Text
          style={{
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 23,
          }}
        >
          Erik Kadarisman
        </Text>
        <Text
          style={{
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 23,
          }}
        >
          Erikadarisman@gmail.com
        </Text>
        </View>
        
      </Body>
    </Header>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </Container>
);

// Drawer Navigator
const AppSwitchNavigatiorA = createDrawerNavigator(
  {
    main: { screen: Main },
    Splash: { screen: Splash },
    Register: { screen: Register },
    Login: { screen: Login },
    Cart: { screen: Cart },
    Checkout: { screen: Checkout },
    Search: { screen: Search },
    wishlist: { screen: wishlist },
    paymentHistory: { screen: paymentHistory },
    addSelling: { screen: addSelling }
  },
  {
    initialRouteName: "Cart",
    drawerWidth: 250,
    drawerPosition: "left",
    contentComponent: custom,
    contentOptions: {
      activeTintColor: "#000"
    }
  }
);

const AppContainer = createAppContainer(AppSwitchNavigatiorA);

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
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "white"
  },
  drawerImage: {
    height: 150,
    width: 150
  }
});
