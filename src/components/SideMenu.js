import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { Container, Header, Body, Button } from "native-base";
import { NavigationActions, DrawerItems } from "react-navigation";

import { ScrollView } from "react-native-gesture-handler";

class SideMenu extends Component {
  constructor(props) {
    super(props);
    
  }

  

  handleHomePressed() {
    console.warn("tes");
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "informasi" })]
    });
    return () => this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body style={{ alignItems: "baseline" }}>
            <Image
              style={styles.drawerImage}
              source={require("../assets/image/logo.png")}
            />
            
          </Body>
        </Header>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <DrawerItems {...this.props} />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Belanja"),
                  this.props.navigation.closeDrawer();
              }}
            >
              <Text style={{ margin: 16, fontWeight: "bold" }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "#0B2D53"
  },
  drawerImage: {
    height: 150,
    width: 150
  }
});
