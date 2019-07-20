import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Spinner } from "native-base";
import { List, Colors, Button } from "react-native-paper";
import axios from "axios";

export default class ProfilDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: "",
      data: "",
      loading: true,
      id : this.props.navigation.state.params
    };
    this.aa();
  }

  aa = async () => {
    await axios
      .get("https://clone-bhineka.herokuapp.com/user/"+this.state.id)
      .then(res => {
        const data = res.data.data["0"];
        this.setState({ data: data, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false, error: "something went wrong" });
        alert(this.state.error);
      });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#e1e1e3" }}>
        <View style={styles.view1}>
          <List.Icon color={Colors.blueGrey500} icon="account-box" />
          <Text style={{ fontSize: 20 }}>Data Pembeli</Text>
        </View>

        {this.state.loading ? (
          <View>
            <Spinner />
          </View>
        ) : (
          <View style={styles.view2}>
            <View>
              <View style={{ flexDirection: "row", marginBottom: 20 }}>

              <Image source={{ uri: this.state.data.image }} style={{ width: 50, height: 50, borderRadius: 150, marginRight: 25}} />
              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
                >
                  {this.state.data.first_name} {this.state.data.last_name}
                </Text>
                <Text style={{ fontSize: 15, marginBottom: 10 }}>
                  {this.state.data.email}
                </Text>
              </View>
              </View>
            </View>
            <Button
              style={{
                color: "blue",
                width: "34%",
                borderWidth: 2,
                borderColor: "blue"
              }}
              mode="outlined"
              onPress={() => this.props.navigation.navigate("EditUser")}
            >
              <Text style={{ color: "blue" }}>UBAH</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    alignItems: "center"
  },
  view2: {
    padding: 20,
    paddingLeft: 50,
    height: "35%",
    backgroundColor: "#fff",
    elevation: 2
  }
});
