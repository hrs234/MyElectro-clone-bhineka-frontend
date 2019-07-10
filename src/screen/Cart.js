import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button,
  Footer,
  Content
} from "native-base";

const faker = [
  {
    id: 1,
    title: "ASUS Notebook X441MA-GA004T - White",
    image:
      "https://www.asus.com/media/global/products/KXZoWM1TwHAoC115/P_setting_fff_1_90_end_500.png",
    price: "4.000.000"
  },
  {
    id: 2,
    title: "Asus Notebook B",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "3.000.000"
  },
  {
    id: 3,
    title: "Asus Notebook C",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "5.000.000"
  },
  {
    id: 4,
    title: "Asus Notebook D",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "7.000.000"
  },
  {
    id: 5,
    title: "Asus Notebook E",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "1.000.000"
  }
];

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        marginBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0"
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 80, height: 80, margin: 5 }}
        />
        <View style={{ flex: 1, marginLeft: 5, marginTop: 15 }}>
          <Text style={{ fontSize: 15 }}>{item.title}</Text>
          <Text style={{ fontWeight: "bold", marginTop: 5 }}>
            Rp. {item.price}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 5,
              marginTop: 5
            }}
          >
            <Button bordered>
              <Icon name="remove" style={{ color: "gray" }} />
            </Button>
            <Button bordered>
              <Text style={{ padding: 20 }}>1</Text>
            </Button>

            <Button bordered>
              <Icon name="add" style={{ color: "gray" }} />
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 5
        }}
      >
        <Icon
          name="trash"
          style={{
            marginLeft: 15,
            color: "gray"
          }}
        />
        <Text
          style={{
            justifyContent: "center",
            marginLeft: 60
          }}
        >
          @Rp {item.price}
        </Text>
        <Text
          style={{
            flex: 1,
            textAlign: "right",
            paddingRight: 10
          }}
        >
          Rp TOTAL
        </Text>
      </View>
    </View>
  );

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#404D5D" }}>
          <Left>
            <Icon name="close" style={{ color: "white", margin: 5 }} />
          </Left>
          <Body>
            <Text style={{ color: "white", fontSize: 20 }}>Keranjang</Text>
          </Body>
          <Right>
            <Icon name="more" style={{ color: "white", margin: 5 }} />
          </Right>
        </Header>
        <View style={{ backgroundColor: "#F5F5F5" }}>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 25,
              marginBottom: 5,
              fontSize: 15
            }}
          >
            BHINNEKA
          </Text>
        </View>
        <Content>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={faker}
            renderItem={this.renderItem}
            style={{ marginTop: 5 }}
          />
          <View
            style={{
              backgroundColor: "#FAFAFA",
              borderBottomWidth: 1,
              borderBottomColor: "#E0E0E0"
            }}
          >
            <View style={{ marginLeft: 15 }}>
              <Text>Erik Kadarisman</Text>
              <Text>margoasri gang 6 no 20 puro karangmalang sragen</Text>
              <Text>085702601953</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "left",
                marginLeft: 15,
                marginTop: 15
              }}
            >
              Jasa Pengiriman
            </Text>
            <Text
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={{
                flex: 1,
                textAlign: "right",
                marginRight: 20,
                marginTop: 15
              }}
            >
              pilih
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text />
            <Text />
          </View>
        </Content>
        <Footer
          style={{
            backgroundColor: "#E4E4E4",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "left",
                marginLeft: 15,
                fontWeight: "bold"
              }}
            >
              TOTAL
            </Text>
            <Text
              style={{
                flex: 1,
                textAlign: "right",
                marginRight: 20,
                fontWeight: "bold"
              }}
            >
              RP. TOTAL
            </Text>
          </View>
        </Footer>
        <Footer
          style={{
            backgroundColor: "#2E78CF",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "white"
            }}
          >
            LANJUT
          </Text>
        </Footer>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            style={{ flex: 1, backgroundColor: "rgba(51,51,51,0.8)" }}
          >
            <View style={{ flex: 2, backgroundColor: "blue", width: "50%" }} />
          </TouchableOpacity>
        </Modal>
      </Container>
    );
  }
}
