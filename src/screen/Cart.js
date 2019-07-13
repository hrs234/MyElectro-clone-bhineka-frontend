import React, { Component } from "react";
import axios from "axios";

import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  AsyncStorage
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
  Content,
  Spinner
} from "native-base";
import {connect} from 'react-redux';
import {getCart} from '../public/action/cart'
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
    id: 4,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id: 5,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  },
  {
    id: 6,
    no: "085123",
    name: "kadarisman",
    alamat: "surakarta Indonesia"
  }
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
      getid: true,
      loading: true,
      id_user: this.props.navigation.state.params,
      data:[]

    };
    this.loginasync();
  }

  loginasync = async () => {
    if(this.state.getid){
      await AsyncStorage.getItem("user", (error, id) => {
        if (id) {
          this.setState({
            isLogin: true,
            id_user: id,
            getid:false
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
    }
    
    alert("login id " + this.state.id_user + " token " + this.state.token);

    axios
      .get(`https://clone-bhineka.herokuapp.com/cart/` + this.state.id_user)
      .then(res => {
        const data = res.data;

        this.setState({ cart: data.data, loading: false, data: data.data });
      })
      .catch(error => {
        this.setState({ loading: false, error: "something went wrong" });
      });
    console.log(this.state.cart);
  };

  

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  setModalInput(visible) {
    this.setState({ modalInput: visible });
  }

  _keyExtractor = (item, index) => index.toString();

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
          source={{ uri: item.image}}
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

  _keyExtractorKurir = (item, index) => index;

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

  _keyExtractorAlamat = (item, index) => index;

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

  Transaksi = () =>{
    let data = this.state.data
    let id_product = ''
    let id_role = 3
    let buy_methode= 1
    let id_user = this.state.id_user
    let id_addres = 1
    let id_agent = 1

    data.map(item =>{
      id_product = item.id_product
    })



    axios.post('https://clone-bhineka.herokuapp.com/transaction',{
      id_buy_methode : buy_methode,
      id_product: id_product,
      id_user: id_user,
      id_role: id_role,
      id_agent: id_agent,
      id_address: id_addres
    }).then(function(response) {
      console.warn(response);
    })
    .catch(function(error) {
      console.warn(error);
    });

    axios.delete(`https://clone-bhineka.herokuapp.com/cart/${id_user}`)

    
  }

  render() {
    console.warn(this.state.id_user)
    console.warn(this.state.getid)
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
        {this.state.loading ? <Spinner/> : 
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}
            style={{ marginTop: 5 }}
          />}
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
          }}>
            <Button transparent
              style={{ height: 57, justifyContent: "center" }}
              mode="text"
              onPress={() => {
                this.Transaksi()
                Alert.alert('Transaction Success')
                this.props.navigation.goBack()
                
              }}
            >
              <Text style={{ fontSize: 17, color: "#fff" }}>CHECKOUT</Text>
          </Button>
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
