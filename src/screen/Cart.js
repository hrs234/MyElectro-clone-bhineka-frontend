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
import {connect} from 'react-redux';
import {getCart} from '../public/action/cart'
import cart from "../public/reducer/cart";
const Alamat = [
  {
    id: 1,
    no: "085123",
    name: "eri",
    alamat: "margoasri sragen"
  },
  {
    id: 2,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id: 3,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id:4,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id:5,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id:6,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
];
const kurir = [
  {
    id: 1,
    title: "TIKI Regular Service",
    price: "200.000"
  },
  {
    id: 2,
    title: "JNE Regular Service",
    price: "200.000"
  }
];

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
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalInput: false,
      id_user: this.props.navigation.state.params
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  setModalInput(visible) {
    this.setState({ modalInput: visible });
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
          <Text style={{ fontSize: 15 }}>{item.product}</Text>
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
              <Text style={{ padding: 20, color: '#000' }}>{item.amount_purchase}</Text>
            </Button>
            <TouchableOpacity>
              <Button bordered>
                <Icon name="add" style={{ color: "gray" }} />
              </Button>
            </TouchableOpacity>
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
          Rp {item.price * item.amount_purchase}
        </Text>
      </View>
    </View>
  );

  _keyExtractorKurir = (item, index) => item.id;

  renderItemKurir = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 15
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          marginLeft: 40
        }}
      >
        Rp {item.price}
      </Text>
    </View>
  );

  _keyExtractorAlamat = (item, index) => item.id;

  renderItemAlamat = ({ item }) => (
    <View
      style={{ padding: 5, borderBottomWidth: 1, borderBottomColor: "#E0E0E0" }}
    >
      <Text>{item.name}</Text>
      <Text>{item.no}</Text>
      <Text>{item.alamat}</Text>
    </View>
  );

  fatch = () =>{
    this.props.dispatch(getCart(this.state.id_user))
  }

  componentDidMount = () =>{
    this.fatch()
  }

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
            data={this.props.cart.data}
            renderItem={this.renderItem}
            style={{ marginTop: 5 }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#E0E0E0",
              justifyContent: "center",
              paddingTop: 15,
              paddingBottom: 15
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "left",
                marginLeft: 15
              }}
            >
              Alamat Pengiriman
            </Text>
            <Text
              onPress={() => {
                this.setModalInput(true);
              }}
              style={{
                flex: 1,
                textAlign: "right",
                marginRight: 20
              }}
            >
              pilih
            </Text>
          </View>
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
            CHECKOUT
          </Text>
        </Footer>
        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(51,51,51,0.8)",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
              }}
            />
            <View
              style={{
                width: "100%",
                height: "50%",
                position: "absolute",
                backgroundColor: "white",
                elevetion: 3
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#E0E0E0",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold" }}
                >
                  Pilih Jasa Pengiriman
                </Text>
                <View
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                >
                  <Icon
                    onPress={() =>
                      this.setModalVisible(!this.state.modalVisible)
                    }
                    name="close"
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1
                }}
              >
                <FlatList
                  keyExtractor={this.keyExtractorKurir}
                  data={kurir}
                  renderItem={this.renderItemKurir}
                  style={{ marginTop: 5 }}
                />
              </View>
            </View>
          </View>
        </Modal>
        {/* input */}
        <Modal
          transparent={true}
          animationType="fade"
          visible={this.state.modalInput}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
          onPress={() => {
            this.setModalInput(!this.state.modalInput);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(51,51,51,0.8)",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setModalInput(!this.state.modalInput)}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
              }}
            />
            <View
              style={{
                width: "100%",
                height: "50%",
                position: "absolute",
                backgroundColor: "white",
                elevetion: 3
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#E0E0E0",
                  alignItems: "center",
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ marginLeft: 10, fontSize: 15, fontWeight: "bold" }}
                >
                  Alamat pengiriman
                </Text>
                <View
                  style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}
                >
                  <Icon
                    onPress={() => this.setModalInput(!this.state.modalInput)}
                    name="close"
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1
                }}
              >
                <FlatList
                  keyExtractor={this.keyExtractorAlamat}
                  data={Alamat}
                  renderItem={this.renderItemAlamat}
                  style={{ marginTop: 5 }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.category
  };
};

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(Cart);
