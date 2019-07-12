import React, { Component } from "react";
import { View, StyleSheet, Text, AsyncStorage } from "react-native";
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
import { changePassword } from "../public/action/action";


class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: ""
    };
  }

  password = (password1,password2) =>{
    if (password1==password2) {
      alert('Succes Change Password')
      let dataPassword = {
        id: this.props.reducer.data.id,
        newPassword: password1,
      }; 
      this.props.dispatch(changePassword(dataPassword));
      this.props.navigation.navigate('Login')
    }else{
      alert('beda')
    }
  }

  //Action Header
  _goBack = () => this.props.navigation.goBack();

  render() {
    // console.log("~~~~~~~");
    // console.log(this.props.reducer.data);
    
    return (
      <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <Appbar.Header style={{ backgroundColor: "#fff" }}>
          <Appbar.Action icon="close" onPress={this._goBack} />
          <Appbar.Content title="Change Password" />
        </Appbar.Header>

        <View style={styles.view1}>
          <View style={{ flexDirection: "row" }}>
            <List.Icon color={Colors.blue300} icon="lock" />
            <TextInput
              label="Password Baru"
              value={this.state.password1}
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={password1 => this.setState({ password1 })}
            />
          </View>
  
          <View style={{ flexDirection: "row" }}>
            <List.Icon color={Colors.blue300} icon="lock" />
            <TextInput
              label="Confirm Password"
              value={this.state.password2}
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={password2 => this.setState({ password2 })}
            />
          </View>
          
          <Button
            style={{ width: "80%", marginTop: 20 }}
            mode="contained"
            onPress={() => {
                this.password(this.state.password1,this.state.password2)
              }}
          >
            Change Password
          </Button>
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

// connect with redux,first param is map and second is component
export default connect(mapStateToProps)(ChangePassword);

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
  }
});
