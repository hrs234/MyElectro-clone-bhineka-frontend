import React, { Component } from "react";
import { View, Image } from "react-native";
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

export default class Checkout extends Component {
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
              Metode Pembayaran
            </Text>
          </View>
        </Header>
        <Content>
          <Card
            style={{
              backgroundColor: "blue",
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
                <Icon name="ios-arrow-down" style={{ color: "black" }} />
              </Right>
            </CardItem>
            <CardItem
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E0E0E0"
              }}
            >
            {/* flatlist */}
              <Body>
                <Text
                  style={{
                    marginBottom: 10
                  }}
                >
                  Cosmos stand
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <Text>1 x </Text>
                  <Text>199000</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Total</Text>
                </View>
              </Body>
              {/* flatlist */}
            </CardItem>
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
                    marginBottom:5
                  }}
                >
                  <Text >Total Pembelian</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginBottom:5

                  }}
                >
                  <Text>Total Pengiriman</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginBottom:5

                  }}
                >
                  <Text>Biaya Layanan</Text>
                  <Text style={{ flex: 1, textAlign: "right" }}>Rp 199000</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Text style={{fontWeight:"bold"}}>Total</Text>
                  <Text style={{ flex: 1, textAlign: "right",fontWeight:"bold" }}>Rp Total</Text>
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
              backgroundColor: "blue",
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
