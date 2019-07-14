import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, FlatList, Image, AsyncStorage, RefreshControl, ActivityIndicator} from "react-native";
import { Appbar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from 'axios';

//redux
import { connect } from "react-redux";
import { getHistory } from "../public/action/action";

class paymentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      refreshing: true
      
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
    let id = this.state.id_user

    axios
      .get('https://clone-bhineka.herokuapp.com/transaction?id='+id+'&id_role=3')
      .then(res => {
        const data = res.data;

        this.setState({ data: data.data, refreshing: false, });
      })
      .catch(error => {
        this.setState({ refreshing: false, error: "something went wrong" });
      });

      console.log("this.state.data");
      console.log(this.state.data);
      

    
  };

  
  

  filter_date = date => {
    let filterA = date.split("T");

    return filterA[0];
  };

  formatNumber = nums => {
    return nums.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  getData = id => {
    return this.props.dispatch(getHistory(id));
  };

  render() {
    console.log(this.props.reducer.data.id_transaction);
    return (
      <View style={styles.back}>
        <Appbar.Header style={styles.Head}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Riwayat Pembayaran" />
        </Appbar.Header>
        <View style={{flex: 1}}>
            {
            this.state.refreshing
            ?
              <View style={styles.backActivity}>
                <ActivityIndicator size="large" color="#CFD8DC" style={{ marginTop: 25 }} />
              </View>
            :
              <View>
                <FlatList
                data={this.state.data}
                keyExtractor={this.props.reducer.data.id_transaction}
                
                refreshControl={
                  <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => this.loginasync()}
                  />
                  }
                  renderItem={({ item }) => (

                    <TouchableOpacity activeOpacity={0.8}>
                      <View style={styles.FlatContainer}>
                        <Image
                          style={styles.imgs}
                          source={{ uri: `${item.image}` }}
                        />
                        <View style={styles.TextDetails}>
                          <Text style={styles.TextInner}>{item.product}</Text>
                          <Text style={styles.TextInner}>
                            {this.filter_date(item.date)}
                          </Text>
                          <Text style={styles.TextInner}>
                            Rp. {this.formatNumber(item.price)}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  />
              </View>
              }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    reducer: state.reducer
  };
};

export default connect(mapStateToProps)(paymentHistory);

const styles = StyleSheet.create({
  Head: {
    backgroundColor: "#092B51"
  },
  backActivity:{
    backgroundColor: "#DEDEDE"
  },
  back: {
    backgroundColor: "#DEDEDE",
    flex: 1
  },
  FlatContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "#BDBDBD",
    borderTopColor: "#fff",
    padding: 15,
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row"
  },
  imgs: {
    borderRadius: 150,
    width: 50,
    height: 50,
    marginRight: 23,
    alignItems: "center"
  },
  TextDetails: {
    flexDirection: "column"
  },
  TextInner: {
    marginBottom: 10
  }
});
