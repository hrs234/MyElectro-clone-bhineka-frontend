import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  List,
  Colors,
  HelperText,
  TextInput,
  Appbar,
  Button
} from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

//redux
import { connect } from "react-redux";
import { forgotUser } from "../public/action/action";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      email: "",
      modalVisible: false
    };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  code = code => {
    console.log("reducer");
    console.log(this.props.reducer);
    console.log("code");
    console.log(this.props.reducer);
    console.log(this.props.reducer.data);
    console.log(code);
    if (this.props.reducer.data.code !== code) {
      alert("wrong code");
    } else {
      alert("Confirm Code");
      this.props.navigation.navigate("ChangePassword");
    }
  };

  forgot = () => {
    let email = this.state.email.toLocaleLowerCase();
    let dataForgot = {
      email: email
    };
    this.props.dispatch(forgotUser(dataForgot));
  };

  //Action Header
  _goBack = () => this.props.navigation.goBack();

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <Appbar.Header style={{ backgroundColor: "#fff" }}>
          <Appbar.Action icon="close" onPress={this._goBack} />
          <Appbar.Content title="Forgot Password" />
        </Appbar.Header>

        <View style={styles.view1}>
          <View style={{ flexDirection: "row" }}>
            <List.Icon color={Colors.blue300} icon="email" />
            <TextInput
              label="Email"
              value={this.state.email}
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <HelperText
            type="error"
            visible={
              !this.state.email.includes("@")
                ? this.state.email == ""
                  ? false
                  : true
                : false
            }
          >
            Format email salah
          </HelperText>
          <Button
            style={{ width: "80%", marginTop: 20 }}
            mode="contained"
            onPress={() => {
              this.forgot();
              this.setModalVisible(true);
            }}
          >
            FORGOT
          </Button>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(51,51,51,0.8)",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
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
                width: "80%",
                height: "50%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderRadius: 5,
                elevetion: 3,
                backgroundColor: "#F5F5F5"
              }}
            >
              <TextInput
                label="code"
                value={this.state.code}
                style={styles.textCode}
                onChangeText={code => this.setState({ code })}
              />
              <Button
                style={{ width: "80%", marginTop: 20 }}
                mode="contained"
                onPress={() => {
                  this.code(this.state.code);
                  this.setModalVisible(false);
                }}
              >
                CONFIRM
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    reducer: state.reducer
    // auth: state.auth
  };
};

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(Forgot);

const styles = StyleSheet.create({
  view1: {
    marginLeft: 15,
    margin: 20,
    marginRight: 20,
    alignItems: "flex-end"
  },
  view2: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    height: "10%"
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
    backgroundColor: "#F5F5F5"
  },
  textCode: {
    width: "50%",
    fontSize: 200,
    backgroundColor: "#F5F5F5"
  }
});
