import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Container, Header, Body } from "native-base";
import { Button } from "react-native-paper"
import { NavigationActions, DrawerItems } from "react-navigation";
import {getWishlist} from '../public/action/wishlist'
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import wishlist from "../screen/wishlist";

import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux'
import { getUser } from '../public/action/action'

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }
    this.loginasync();
  }

  loginasync = async () => {
    await AsyncStorage.getItem("user", (error, id) => {
      if (id) {
        this.setState({
          isLogin: true,
          id: id
        });
      } else {
        this.setState({
          isLogin: false
        });
      }
    });
    await AsyncStorage.getItem("token", (error, token) => {
      if (token) {
        this.setState({
          isLogin: true,
          token: token
        });
      } else {
        this.setState({
          isLogin: false
        });
      }
    });
    this.getDataUser(this.state.id)
  };

  getDataUser(id){
    console.warn(this.state.id)
    this.props.dispatch(getUser(id))
    this.setState({auth:this.props.reducer})
    console.log('this.state.auth');
    console.log(this.state.auth.data["0"].image);
  }
  removeAsync = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    alert("remove");
  };

  handleHomePressed() {
    console.warn("tes");
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "informasi" })]
    });
    return () => this.props.navigation.dispatch(resetAction);
  }

  removeAsync = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    alert("Logout");
  };

  render() {
    console.log(this.props.reducer)
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body style={{ alignItems: "baseline" }}>
            <Image
              style={styles.drawerImage}
              source={require("../assets/image/logo.png")}
            />
            { (this.state.isLogin == false) ?
              <Button mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
                <Text>LOGIN / REGISTER</Text>
              </Button> : null }
          </Body>
        </Header>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <DrawerItems {...this.props} />
            {(this.state.isLogin == true) ?
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 17
                }}
                onPress={() => {
                  this.removeAsync();
                  this.props.navigation.closeDrawer();
                }}
              >
                <Icon name="exit-to-app" size={28} color="grey" />
                <Text style={{ margin: 16, marginLeft: 27, fontWeight: "bold" }}>
                  Logout
                </Text>
              </TouchableOpacity> : null
            }
          </View>
        </ScrollView>
      </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const mapStateToProps = ( state ) => {
  return {
    reducer: state.reducer
  }
}
export default connect(mapStateToProps)(SideMenu);

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
    height: 135,
    width: 135
  }
});
