import React, { Component } from "react";
import { View, Image, AsyncStorage } from "react-native";
import { Appbar } from "react-native-paper";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Kontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
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
    if (this.state.id) {
    } else {
      this.props.navigation.goBack();
      alert("Anda belum login");
    }
  };

  static navigationOptions = {
    drawerLabel: "Akun Saya",
    drawerIcon: (
      <Icon
        name="account-box"
        type="MaterialIcons"
        style={{ color: "#000000", marginRight: -5 }}
      />
    )
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content style={{ padding: 20 }}>
          <Card>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ProfilDetail")}
            >
              <CardItem>
                <Icon active name="contact" />
                <Text>Profil</Text>
                <Right style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("History")}
            >
              <CardItem>
                <Icon active name="grid" />
                <Text>History</Text>
                <Right style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ProfilDetail")}
            >
              <CardItem>
                <Icon active name="navigate" />
                <Text>Alamat Pengiriman</Text>
                <Right style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddSelling")}
            >
              <CardItem>
                <Icon active name="add" />
                <Text>Jual</Text>
                <Right style={{ flex: 1, justifyContent: "flex-end" }}>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </TouchableOpacity>
          </Card>
        </Content>
      </Container>
    );
  }
}
