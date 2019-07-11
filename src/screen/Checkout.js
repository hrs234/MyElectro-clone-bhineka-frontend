import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Icon,
  Card,
  CardItem,
  Text,
  Right,
  Content
} from "native-base";
const faker = [
  {
    id: 1,
    title: "ASUS Notebook X441MA-GA004T - White",
    price: "4.000.000"
  },
  {
    id: 2,
    title: "ASUS Notebook X441MA-GA004T - black",
    price: "4.500.000"
  },
  {
    id: 3,
    title: "ASUS Notebook X441MA-GA004T - black",
    price: "4.500.000"
  },
  {
    id: 4,
    title: "ASUS Notebook X441MA-GA004T - black",
    price: "4.500.000"
  }
];

export default class Checkout extends Component {
  static navigationOptions = {
    drawerIcon: <Icon name="store" type="MaterialIcons" style={{ color: "#000000" }} />
  };

  _keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <CardItem
    style={{
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0"
    }}
  >
    <Body>
      <Text
        style={{
          marginBottom: 10
        }}
      >
        {item.title}
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Text>1 x </Text>
        <Text>{item.price}</Text>
        <Text style={{ flex: 1, textAlign: "right" }}>Total</Text>
      </View>
    </Body>
    </CardItem>
  );

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#404D5D" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Icon name="close" style={{ color: "white" }} />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                marginLeft: 40,
                fontWeight: "bold"
              }}
            >
              Total Pembayaran
            </Text>
          </View>
        </Header>
        <Content>
          <Card
            style={{
              width: "90%",
              alignSelf: "center",
              marginTop: 15
            }}
          >
            <CardItem
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E0E0E0"
              }}
            >
              <Text>Total</Text>
              <Right
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  flexDirection: "row"
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 10
                  }}
                >
                  Rp 679.000
                </Text>
              </Right>
            </CardItem>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={faker}
                renderItem={this.renderItem}
                style={{ marginTop: 5 }}
              />
            <CardItem
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E0E0E0"
              }}
            >
              <Body>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginBottom: 5
                  }}
                >
                  <Text>Total Pembelian</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginBottom: 5
                  }}
                >
                  <Text>Total Pengiriman</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginBottom: 5
                  }}
                >
                  <Text>Biaya Layanan</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Total</Text>
                  <Text
                    style={{ flex: 1, textAlign: "right", fontWeight: "bold" }}
                  >
                    Rp Total
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Text
            style={{
              margin: 5,
              marginLeft: 20,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            KartuKredit/ Debit/ Cicilan
          </Text>
          <Card
            style={{
              width: "90%",
              alignSelf: "center"
            }}
          >
            <CardItem>
              <Icon active name="card" />
              <Text>Bayar</Text>
              <Right
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  flexDirection: "row"
                }}
              >
                <Icon name="ios-arrow-forward" style={{ color: "black" }} />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
