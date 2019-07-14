import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Modal, Alert, AsyncStorage } from "react-native";
import { IconButton, Colors, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import Icon2 from "react-native-vector-icons/dist/MaterialCommunityIcons";
import axios from "axios";
import { getCart } from "../public/action/cart";
 
import ModalBuy from "../components/ModalBeli";
 
//redux
import { connect } from "react-redux";
 
 
 
class DetailPage extends Component {
  constructor(props) {
    super(props);
    console.log("this.props.navigation.state.params");
    console.log(this.props.navigation.state.params);
 
    this.state = {
      image: this.props.navigation.state.params.image,
      product: this.props.navigation.state.params.product,
      id_product: this.props.navigation.state.params.id_product,
      description: this.props.navigation.state.params.description,
      id_wishlist:0,
     
      id_user: "",
      price: this.props.navigation.state.params.price,
      star: 3,
      amount_purchase: 1,
      modalVisible: false,
      favorit: false
    };
    this.loginasync();
  }
 
 
  loginasync = async () => {
    await AsyncStorage.getItem("user", (error, id) => {
      if (id) {
        this.setState({
          isLogin: true,
          id_user: id
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
 
    console.log("this.state.id_user")
    console.log(this.state.id_user)
  };
 
 
  componentDidMount = () => {
    axios.get(`https://clone-bhineka.herokuapp.com/wishlist?id=${this.state.id_user}&id_product=${this.state.id_product}`).then(res =>{
      let data = res.data
      if (data.data.id_wishlist) {
          this.setState({
            favorit :true,
            id_wishlist:data.data.id_wishlist
          })
      }
    })
 
    if (this.state.favorit == true) {
      this.setState({ iconFavorit: "favorite" });
    } else {
      this.setState({ iconFavorit: "favorite-border" });
    }
  };
 
  addFavorit = () => {
    let id_product = this.state.id_product
    let id_user = this.state.id_user
    let id_wishlist = this.state.id_wishlist
    console.log("this.state.id_user2")
    console.log(this.state.id_user)
    if (id_user == '') {
      this.props.navigation.navigate('Login')
    }else{
      if (this.state.favorit) {
        this.setState({ favorit: false, iconFavorit: "favorite-border" });
        axios.delete(`https://clone-bhineka.herokuapp.com/wishlist/${id_wishlist}`)
      } else {
        this.setState({ favorit: true, iconFavorit: "favorite" });
        axios.post('https://clone-bhineka.herokuapp.com/wishlist',{ id_user: id_user, id_product: id_product })
      }
    }
  };
 
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
 
  items() {
    let item = [];
    for (let i = 0; i < 5; i++) {
      if (i < this.state.star) {
        item.push(<Icon name="star" size={25} color="#c2cc00" />);
      } else {
        item.push(<Icon name="star-border" size={25} color="#c2cc00" />);
      }
    }
    return item;
  }
 
  postCart = data => {
    if (this.state.id_user == '') {
      this.setModalVisible(false);
      Alert.alert('You must login')
      this.props.navigation.navigate('Login')
    }else{
      axios
      .post("https://clone-bhineka.herokuapp.com/cart", {
        id_product: data.id_product,
        id_user: data.id_user,
        amount_purchase: data.amount_purchase
      })
      .then(function(response) {
        console.warn(response);
      })
      .catch(function(error) {
        console.warn(error);
      });
    }
   
  };
 
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <IconButton
        icon="shopping-cart"
        color={Colors.white}
        size={22}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
    headerStyle: {
      backgroundColor: "#092B51",
      elevation: 0
    },
 
    headerTintColor: "#fff",
    title: "Detail Produk"
  });
 
  render() {
    const { visible } = this.state;
    // alert('asd'+this.props.auth._55.data.token);
    // console.log(this.props.auth._55.data);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewMain}>
            <View style={styles.view1}>
              <View style={styles.view1A}>
                <Image
                  style={{ width: "50%", height: "100%" }}
                  source={{ uri: this.state.image }}
                />
              </View>
              <View style={styles.view1B}>
                <Text
                  style={{ fontSize: 21, fontWeight: "bold", color: "#272929" }}
                >
                  {this.state.product}
                </Text>
              </View>
              <View style={styles.view1C}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, color: "#81868a" }}>
                    KP-{this.state.id_product}
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Text>{this.items()}</Text>
                  <Text style={{ fontSize: 16 }}>({this.state.star})</Text>
                </View>
              </View>
              <View style={styles.view1D}>
                <Text
                  style={{
                    marginTop: 2,
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "blue"
                  }}
                >
                  Rp {this.state.price}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ marginTop: 4, color: "#272929" }}>
                    Siap dikirim di hari yang sama
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <IconButton
                      icon={this.state.iconFavorit}
                      color={Colors.red}
                      size={30}
                      onPress={() => this.addFavorit()}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.view2}>
              <Icon name="store" size={25} color="#7b8785" />
              <Text style={{ marginLeft: 16, fontSize: 17, color: "#272929" }}>
                Dijual dan dikirim oleh Bhinneka
              </Text>
            </View>
            <View style={styles.view3}>
              <Icon name="style" size={25} color="#7b8785" />
              <View style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 17, color: "#272929" }}>Varian:</Text>
                <Text style={{ fontSize: 17, color: "#7b6ec2" }}>Grey</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end"
                }}
              >
                <Button
                  style={{
                    borderWidth: 2,
                    borderColor: "blue",
                    justifyContent: "center",
                    height: 40
                  }}
                  mode="outlined"
                  onPress={() => console.log("Pressed")}
                >
                  PILIH
                </Button>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                marginTop: 9,
                backgroundColor: "#fff",
                padding: 15,
                borderColor: "#07e8ca"
              }}
            >
              <Icon2 name="shield-check" size={25} color="#7b8785" />
              <Text style={{ marginLeft: 16, fontSize: 17, color: "#272929" }}>
                1 Year Local Official Distributor Warranty
              </Text>
            </View>
            {/* <View style={styles.view4}>
 
                            <Icon2 name="file-document" size={25} color="#7b8785" />
                            <View style={{marginLeft:16}}>
                                <Text style={{fontSize:17, color:'#272929'}}>Varian:</Text>
                                <Text style={{fontSize:17, color:'#7b6ec2'}}>{'\u2022'}Grey</Text>
                            </View>
                        </View> */}
 
            <View style={styles.view5}>
              <Text style={{ fontSize: 20, marginBottom: 5 }}>Overview</Text>
              <View style={{ flex: 1, marginBottom: 12 }}>
                <Text style={{ fontSize: 17, color: "#272929" }}>
                  {this.state.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "#d5d902" }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.50)",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFF",
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                  width: "90%",
                  height: "8%",
                  padding: 10,
                  elevation: 3
                }}
              >
                <View
                  style={{ flexDirection: "row", padding: 5, elevation: 1 }}
                >
                  <Image
                    style={{ width: 22, height: 22, marginRight: 5 }}
                    source={{
                      uri:
                        "https://dumielauxepices.net/sites/default/files/hand-emoji-clipart-air-emoji-png-632601-5302983.png"
                    }}
                  />
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    Produk berhasil ditambah
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#f2f0f0",
                  borderBottomRightRadius: 3,
                  borderBottomLeftRadius: 3,
                  width: "90%",
                  height: "20%",
                  padding: 10,
                  elevation: 3
                }}
              >
                <View>
                  <Button
                    style={{
                      height: 46,
                      justifyContent: "center",
                      backgroundColor: "#d5d902"
                    }}
                    mode="contained"
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                      this.props.navigation.navigate(
                        "Cart",
                        this.state.id_user
                      );
                      console.log(this.state.id_user);
                    }}
                  >
                    <Text style={{ fontSize: 14, color: "black" }}>
                      LANJUT KE KERANJANG
                    </Text>
                  </Button>
                  <Button
                    style={{
                      height: 45,
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      marginTop: 15,
                      elevation: 3
                    }}
                    mode="contained"
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                  >
                    <Text style={{ fontSize: 14, color: "#c8a8ed" }}>
                      KEMBALI BERBELANJA
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
          <Button
            style={{ height: 57, justifyContent: "center" }}
            mode="text"
            onPress={() => {
              this.setModalVisible(true);
              this.postCart({
                id_product: this.state.id_product,
                amount_purchase: this.state.amount_purchase,
                id_user: this.state.id_user
              });
            }}
          >
            <Text style={{ fontSize: 17, color: "black" }}>BELI</Text>
          </Button>
        </View>
      </View>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    auth: state.auth
    // auth: state.auth
  };
};
 
// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(DetailPage);
 
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    backgroundColor: "#edf0f0",
    paddingBottom: 45
  },
  view1: {
    height: 440,
    elevation: 1,
    backgroundColor: "#fff",
    padding: 15
  },
  view1A: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "52%"
  },
  view1B: {
    marginTop: 5
  },
  view1C: {
    paddingBottom: 15,
    marginTop: 5,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#07e8ca"
  },
  view1D: {
    flex: 1,
    justifyContent: "flex-end"
  },
  view2: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    height: "7%",
    elevation: 1,
    backgroundColor: "#fff",
    marginTop: 9
  },
  view3: {
    padding: 15,
    flexDirection: "row",
    height: "10%",
    elevation: 1,
    backgroundColor: "#fff",
    marginTop: 9
  },
  // view4: {
  //     padding:15,
  //     flexDirection:'row',
  //     height:'12%',
  //     elevation:1,
  //     backgroundColor:'#fff',
  // },
  view5: {
    padding: 15,
    elevation: 1,
    backgroundColor: "#fff"
  },
 
  textA: {
    textAlign: "right",
    fontSize: 12,
    marginRight: 25,
    flex: 1
  },
  textInput: {
    width: "80%",
    fontSize: 200,
    backgroundColor: "cyan"
  }
});