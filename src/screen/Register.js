import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, ToggleButton, Button, List } from 'react-native-paper';
import { DatePicker } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';


export default class Register extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            photo: null,
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            gender: '',
            birth_date: '',
            password: '',
            gents: '',
            woman: '',
            birthDate: '',
            // chosenDate: new Date(),
            chosenDate: '',
            isDateTimePickerVisible: false
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {

        let filter = newDate.toString();
        let filterA = filter.split(' ');

        let res = '';
        if(filterA[1] == 'Jan')
        {
            res = `01-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Feb')
        {
            res = `02-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Mar') 
        {
            res = `03-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Apr') 
        {
            res = `04-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'May') 
        {
            res = `05-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Jun') 
        {
            res = `06-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Jul') 
        {
            res = `07-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Aug') 
        {
            res = `08-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Sep') 
        {
            res = `09-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Oct') 
        {
            res = `10-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Nov') 
        {
            res = `11-${filterA[2]}-${filterA[3]}`;
        }
        else if (filterA[1] == 'Dec') 
        {
            res = `12-${filterA[2]}-${filterA[3]}`;
        }
        else
        {
            res = `00-${filterA[2]}-${filterA[3]}`;
        }

        this.setState({ chosenDate: res });

    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = (date) => {
        alert("A date has been picked: ", date);
        this.hideDateTimePicker();
    };

    

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    };

    render() {
        const { photo } = this.state;
        return (
            <View style={{ backgroundColor: "#F5F5F5"}}>
                {/* Header */}
                <Appbar.Header style={styles.Head}>
                    <Appbar.Action
                        icon="close"
                        onPress={() => alert('this back')}
                    />
                    <Appbar.Content
                        title="Buat akun baru"
                    />
                </Appbar.Header>
                {/* End Header */}

                {/* Container */}
                <ScrollView>

                <View style={styles.container}>

                        

                        {
                            photo ? <Image source={{ uri: photo.uri }}
                                style={{ width: 120, height: 120, borderRadius: 150 }} /> : 
                                <Image source={require('../icons/man-user.png')}
                                    style={{ width: 120, height: 120, borderRadius: 150 }} />
                        }

                        <View style={styles.formInput}>
                            <Button onPress={this.handleChoosePhoto} >Unggah Foto</Button>
                        </View>

                    <View style={styles.Toggle}>
                        <List.Icon icon="person" />
                        <ToggleButton.Group onValueChange={value => this.setState({ value })} value={this.state.value}>
                                <ToggleButton style={styles.ToggleBtn} icon={require('../icons/woman.png')} value="woman" />
                                <ToggleButton style={styles.ToggleBtn} icon={require('../icons/male.png')} value="gents" />
                        </ToggleButton.Group>
                    </View>
                    <View style={styles.formInput}>
                        <List.Icon icon="" />
                        <TextInput label="Nama Depan" style={styles.inputs} onChangeText={(first_name) => this.setState({ first_name }) } />
                    </View >
                    <View style={styles.formInput}>
                        <List.Icon icon="" />
                        <TextInput label="Nama Belakang" style={styles.inputs} onChangeText={(last_name) => this.setState({ last_name })}/>
                    </View>
                    <View style={styles.formInput}>
                        <List.Icon icon="email" />
                        <TextInput label="alamat surel" style={styles.inputs} onChangeText={(email) => this.setState({ email })} />
                    </View>
                    <View style={styles.formInput}>
                        <List.Icon icon="phone" />
                        <TextInput label="Nomor Telepon" style={styles.inputs} onChangeText={(phone_number) => this.setState({ phone_number })} />
                    </View>
                    <View style={styles.formInput}>
                        <List.Icon icon="lock" />
                        <TextInput label="Kata Sandi" secureTextEntry={true} style={styles.inputs} onChangeText={(password) => this.setState({ password })} />
                    </View>
                    
                    <View style={styles.formDate}>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(1789, 1, 1)}
                            maximumDate={new Date(2019, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            format="YYYY-MM-DD"
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Pilih Tanggal Lahir"
                            textStyle={{ color: "#000" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                            
                        />
                    </View>
                    <Button mode="contained" title="Daftar!" onPress={() => alert('this regist')} style={styles.button} >Daftar!</Button>

                
                </View>
                </ScrollView>
                {/* End Container */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    Head:{
        backgroundColor: "#fff"
    },
    Toggle:{
        display: "flex",
        flexDirection: "row",
        marginTop: 35
    },
    formInput:{
        marginTop: 25,
        flexDirection: "row"
    },
    formDate: {
        marginTop: 25,
        flexDirection: "row"
    },
    ToggleBtn:{
        width: 135
    },
    container:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 350,
    },
    inputs:{
        width: 270,
        backgroundColor: "#F5F5F5"
    },
    button:{
        marginTop: 25,
        width: 260,
        backgroundColor: "#4FC3F7",
    }
});