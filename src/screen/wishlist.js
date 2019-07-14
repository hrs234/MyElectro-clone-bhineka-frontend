
import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, Image, AsyncStorage } from "react-native";
import { Icon } from "native-base";
import { Appbar } from "react-native-paper";
import {getWishlist} from '../public/action/wishlist'
import { connect } from "react-redux";
import axios from "axios";
// import { FlatList } from 'react-native-gesture-handler';

class wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_user:'',
      getid:true,
      data: [],
      total:0
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
    axios
      .get(`https://clone-bhineka.herokuapp.com/wishlist?id=${this.state.id_user}`)
      .then(res => {
        const data = res.data;

        this.setState({ data: data.data, total: data.total, loading: false});
      })
      .catch(error => {
        this.setState({ loading: false, error: "something went wrong" });
      });
  };

  static navigationOptions = {
    drawerIcon: (
      <Icon name="favorite" type="MaterialIcons" style={{ color: "#000000", marginRight:-5 }} />
    )
  };

  rendered = ({ item }) => {
    <View style={{ borderStyle: "solid" }}>
      <Text>{JSON.stringify(item.id)}</Text>
      {console.log("DATA: " + JSON.stringify(item.id))}
    </View>;
  };


    static navigationOptions = {
        drawerLabel: 'Wishlist',
        drawerIcon: (
          <Icon name="favorite" type="MaterialIcons" style={{ color: "#000000", marginRight:-5 }} />
        )
    };
    render() {
      return (
          // Header
          <View style={{ backgroundColor: "#F5F5F5" }}>
          <Appbar.Header style={{ backgroundColor: '#092B51'}}>
              <Appbar.BackAction
                  onPress={() => alert('this back')}
              />
              <Appbar.Content
                  title="Wishlist"
              />
          </Appbar.Header>

      <ScrollView>
        <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 25 }}>
        <Text style={{ fontSize: 20, color: "#9E9E9E" }}>Total Items {this.state.total} </Text>
        </View>
        <View style={{ marginBottom: 300 }}>
        <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => {
                item.id;
              }}
              numColumns={2}
              renderItem={({ item }) => (
                <View
                  style={{
                    borderColor: "#DEDEDE",
                    width: 178,
                    height: 330,
                    borderWidth: 1,
                    borderColor: "#d6d7da"
                  }}
                >
                  <View style={{ display: "flex" }}>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 150, height: 150, marginBottom: 10, marginLeft:10 }}
                    />
                    <View style={{ marginLeft: 23 }}>
                      <Text style={{ fontSize: 20, marginBottom: 10 }}>
                        {item.product}
                      </Text>
                      <Text>Rp. {item.price}</Text>
                    </View>
                  </View>
                </View>
                 )}
            />
          {/* <FlatList
                          data={[{ key: 'a' }, { key: 'b' }]}
                          renderItem={({ item }) => <View style={{ borderStyle: "solid" }}>
                              <Text>{item.key}</Text>
                              {console.log('DATA: ' + JSON.stringify(item.id))}
                          </View>}
                      /> */}
        </View>
      </ScrollView>
    </View>
  );

    }
}

const mapStateToProps = (state) =>{
  return{
    wishlist: state.product
  }
}

export default connect(mapStateToProps)(wishlist)


