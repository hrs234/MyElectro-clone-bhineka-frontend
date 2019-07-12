import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Header, Body } from "native-base";
import { DrawerItems, SafeAreaView } from "react-navigation";

import { ScrollView } from "react-native-gesture-handler";


import Splash from "../src/screen/splash";
import MainMenu from "../src/screen/main";
import Register from "../src/screen/Register";
import Login from "../src/screen/Login";
import Cart from "../src/screen/Cart";
import Checkout from "../src/screen/Checkout";
import Search from "../src/screen/Search";
import Wishlist from "../src/screen/wishlist";
import PaymentHistory from "../src/screen/paymentHistory";
import AddSelling from "../src/screen/addSelling";

import CustomDrawer from "../src/Components/Drawer";


const AppNavigator = createStackNavigator(
  {
    Main: MainMenu,
    Search: Search,
    Splash: Splash,
    Login:Login,
    Register: Register,
    Cart: Cart,
    Checkout: Checkout,
    Wishlist: Wishlist,
    PaymentHistory: PaymentHistory,
    AddSelling: AddSelling,
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    defaultNavigationOptions: {
      headerVisible: false
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    Route: AppNavigator
  },
  {
    initialRouteName: "Route",
    drawerWidth: 250,
    drawerPosition: "left",
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "#000"
    }
  }
);

export default createAppContainer(Drawer);

// const custom = props => (
//   <Container>
//     <Header style={styles.drawerHeader}>
//       <Body style={{ alignItems: "baseline" }}>
//         <Image
//           style={styles.drawerImage}
//           source={require("../src/assets/image/logo.png")}
//         />
//         <View style={{flex:1}}>
//         <Text
//           style={{
//             color: "#000000",
//             fontStyle: "normal",
//             fontWeight: "600",
//             lineHeight: 23,
//           }}
//         >
//           Erik Kadarisman
//         </Text>
//         <Text
//           style={{
//             color: "#000000",
//             fontStyle: "normal",
//             fontWeight: "600",
//             lineHeight: 23,
//           }}
//         >
//           Erikadarisman@gmail.com
//         </Text>
//         </View>
        
//       </Body>
//     </Header>
//     <ScrollView>
//       <DrawerItems {...props} />
//     </ScrollView>
//   </Container>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   drawerHeader: {
//     height: 200,
//     backgroundColor: "white"
//   },
//   drawerImage: {
//     height: 150,
//     width: 150
//   }
// });