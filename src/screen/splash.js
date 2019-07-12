import React, { Component } from "react";
import { View, Text, StatusBar, Image } from "react-native";

export default class splasher extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
    setTimeout(() => {
      StatusBar.setHidden(false);
      this.props.navigation.navigate("App");
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "#092C52",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <StatusBar />
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/image/logo.png")}
        />
      </View>
    );
  }
}
