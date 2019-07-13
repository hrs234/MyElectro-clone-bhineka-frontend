import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import {
  Appbar,
  TextInput,
  ToggleButton,
  Button,
  List
} from "react-native-paper";
import { DatePicker } from "native-base";
import ImagePicker from "react-native-image-picker";

//redux
import { connect } from "react-redux";
import { regUser } from "../public/action/action";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      gender: "",
      password: "",
      birth_date: new Date(),
      isDateTimePickerVisible: false
    };
    this.setDate = this.setDate.bind(this);
  }


  regUser = () => {
    if (
      this.state.image != "" &&
      this.state.first_name != "" &&
      this.state.last_name != "" &&
      this.state.email != "" &&
      this.state.phone_number != "" &&
      this.state.gender != "" &&
      this.state.password != "" &&
      this.state.birth_date != ""

    ) {
      let dataReg = {
        image: this.state.image,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        phone_number: this.state.phone_number,
        gender: this.state.gender,
        password: this.state.password,
        birth_date: this.state.birth_date
      };
      this.props.dispatch(regUser(dataReg));
    } else {
      Alert.alert("Field cannot empty");
    }
  };

  setDate(newDate) {

    let filter = newDate.toString();
    let filterA = filter.split(' ');

    let res = '';


    if (filterA[1] == 'Jan') {
      res = `${filterA[3]}-01-${filterA[2]}`;
    }
    else if (filterA[1] == 'Feb') {
      res = `${filterA[3]}-02-${filterA[2]}`;
    }
    else if (filterA[1] == 'Mar') {
      res = `${filterA[3]}-03-${filterA[2]}`;
    }
    else if (filterA[1] == 'Apr') {
      res = `${filterA[3]}-04-${filterA[2]}`;
    }
    else if (filterA[1] == 'May') {
      res = `${filterA[3]}-05-${filterA[2]}`;
    }
    else if (filterA[1] == 'Jun') {
      res = `${filterA[3]}-06-${filterA[2]}`;
    }
    else if (filterA[1] == 'Jul') {
      res = `${filterA[3]}-07-${filterA[2]}`;
    }
    else if (filterA[1] == 'Aug') {
      res = `${filterA[3]}-08-${filterA[2]}`;
    }
    else if (filterA[1] == 'Sep') {
      res = `${filterA[3]}-09-${filterA[2]}`;
    }
    else if (filterA[1] == 'Oct') {
      res = `${filterA[3]}-10-${filterA[2]}`;
    }
    else if (filterA[1] == 'Nov') {
      res = `${filterA[3]}-11-${filterA[2]}`;
    }
    else if (filterA[1] == 'Dec') {
      res = `${filterA[3]}-12-${filterA[2]}`;
    }
    else {
      res = `${filterA[3]}-00-${filterA[2]}`;
    }

    this.setState({ birth_date: res });
    console.log(res);
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    alert("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ image: response });

      }
    });
  };

  render() {
    console.log(this.state);
    const { image } = this.state;
    return (
      <View style={{ backgroundColor: "#F5F5F5" }}>
        {/* Header */}
        <Appbar.Header style={styles.Head}>
          <Appbar.BackAction onPress={() => alert("this back")} />
          <Appbar.Content title="Account Registration" />
        </Appbar.Header>
        {/* End Header */}

        {/* Container */}
        <ScrollView>
          <View style={styles.container}>
            {image ? (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 150, height: 150, borderRadius: 150 }}
              />
            ) : (
                <Image
                  source={require("../icons/man-user.png")}
                  style={{ width: 150, height: 150, borderRadius: 150 }}
                />
              )}

            <View style={styles.formInput}>
              <Button onPress={this.handleChoosePhoto}>Upload Photo</Button>
            </View>

            <View style={styles.Toggle}>
              <List.Icon icon="person" />
              <ToggleButton.Group
                onValueChange={value => this.setState({ gender: value })}
                value={this.state.gender}
              >
                <ToggleButton
                  style={styles.ToggleBtn}
                  icon={require("../icons/woman.png")}
                  value="P"
                />
                <ToggleButton
                  style={styles.ToggleBtn}
                  icon={require("../icons/male.png")}
                  value="L"
                />
              </ToggleButton.Group>
            </View>
            <View style={styles.formInput}>
              <List.Icon icon="" />
              <TextInput
                label="First Name"
                value={this.state.first_name}
                style={styles.inputs}
                onChangeText={first_name => this.setState({ first_name })}
              />
            </View>
            <View style={styles.formInput}>
              <List.Icon icon="" />
              <TextInput
                label="Last Name"
                value={this.state.last_name}
                style={styles.inputs}
                onChangeText={last_name => this.setState({ last_name })}
              />
            </View>
            <View style={styles.formInput}>
              <List.Icon icon="email" />
              <TextInput
                label="email"
                value={this.state.email}
                style={styles.inputs}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={styles.formInput}>
              <List.Icon icon="phone" />
              <TextInput
                label="Phone Number"
                value={this.state.phone_number}
                style={styles.inputs}
                onChangeText={phone_number => this.setState({ phone_number })}
              />
            </View>
            <View style={styles.formInput}>
              <List.Icon icon="lock" />
              <TextInput
                label="password"
                value={this.state.password}
                secureTextEntry={true}
                style={styles.inputs}
                onChangeText={password => this.setState({ password })}
              />
            </View>

            <View style={styles.formDate}>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(1789, 1, 1)}
                maximumDate={new Date(2019, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                format="YYYY-MM-DD"
                placeHolderText="Select date"
                textStyle={{ color: "#000" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </View>
            <Button
              mode="contained"
              title="Register!"
              onPress={() => {
                this.regUser()
                this.props.navigation.navigate('Login')
                alert("Saved data, back to login ");
                // alert("this regist")
              }}
              style={styles.button}
            >
              Register!
            </Button>
          </View>
        </ScrollView>
        {/* End Container */}
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
export default connect(mapStateToProps)(Register);

const styles = StyleSheet.create({
  Head: {
    backgroundColor: "#fff"
  },
  Toggle: {
    display: "flex",
    flexDirection: "row",
    marginTop: 35
  },
  formInput: {
    marginTop: 25,
    flexDirection: "row"
  },
  formDate: {
    marginTop: 25,
    flexDirection: "row"
  },
  ToggleBtn: {
    width: 135
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 350
  },
  inputs: {
    width: 270,
    backgroundColor: "#F5F5F5"
  },
  button: {
    marginTop: 25,
    width: 260,
    backgroundColor: "#4FC3F7"
  }
});
