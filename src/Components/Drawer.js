import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Header, Body } from "native-base";

import { ScrollView } from "react-native-gesture-handler";


export default class Drawer extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body style={{ alignItems: "baseline" }}>
            <Image
              style={styles.drawerImage}
              source={require("../assets/image/logo.png")}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#000000",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: 23
                }}
              >
                Erik Kadarisman
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: 23
                }}
              >
                Erikadarisman@gmail.com
              </Text>
            </View>
          </Body>
        </Header>
        <ScrollView>
        </ScrollView>
      </Container>
    );
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