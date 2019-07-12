import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { Item, Picker } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';

//redux
import { connect } from "react-redux";
import { regItems } from "../public/action/action";
import axios from 'axios';
// import console = require('console');

class addSelling extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            photo: null,
            product: '',
            price: '',
            desc: '',
            category: [],
            selected2: undefined,
            currentLabel: '1',
            
        }
        // this.setDate = this.setDate.bind(this);


    }

    componentDidMount() 
    {
        axios.get('https://clone-bhineka.herokuapp.com/category').then(res => {
            const data = res.data;
            // console.log(data.data);
            this.setState({ category: data.data, loading: false });
        }).catch(error => {
            this.setState({ loading: false, error: 'something went wrong' })
        });
    }

    regSelling = () => {
        if (
            this.state.photo != "" &&
            this.state.currentLabel != "" &&
            this.state.desc != "" &&
            this.state.price != "" &&
            this.state.product != ""

        ) {
            let dataReg = {
                image: this.state.photo,
                product: this.state.product,
                price: this.state.price,
                description: this.state.desc,
                id_user: '1',
                id_category: this.state.currentLabel,
                id_variant: '1'
            };
            this.props.dispatch(regItems(dataReg));
        } else {
            Alert.alert("Field cannot empty");
        }
    };


    pickerChange(index) {
        this.state.category.map((v, i) => {
            if (index === i) {
                this.setState({
                    currentLabel: this.state.category[index].id_category,
                    // currency: this.state.category[index].currency
                })
            }
        })
    }

    
    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

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

    regUser = () => {
        if (
            this.state.product != "" &&
            this.state.price != "" &&
            this.state.desc != "" &&
            this.state.photo != ""

        ) {
            let dataReg = {
                product: this.state.product,
                price: this.state.price,
                desc: this.state.desc,
                photo: this.state.photo
            };
            this.props.dispatch(reqItems(dataReg));



        } else {
            Alert.alert("Field cannot empty");
        }
    };

    
   
    
    render() {
        console.log(this.state.category);
        console.log(this.state.currentLabel);

        const { photo } = this.state;
        return (
            <View style={{ backgroundColor: "#F5F5F5"}}>
                {/* Header */}
                <Appbar.Header style={styles.Head}>
                    <Appbar.BackAction
                        onPress={() => alert('this back')}
                    />
                    <Appbar.Content
                        title="Add New Item"
                    />
                </Appbar.Header>
                {/* End Header */}

                {/* Container */}
                <ScrollView>

                <View style={styles.container}>

                        
                    <View >
                    {
                        photo ? <Image source={{ uri: photo.uri }}
                            style={{ width: 300, height: 250, borderRadius: 15 }} /> : 
                            <Image source={require('../icons/indonesia.jpg')}
                            style={{ width: 300, height: 250, borderRadius: 15 }} />
                    }
                    </View>

                    <View style={styles.Pictures}>
                        <Button onPress={this.handleChoosePhoto} >Upload Photo</Button>
                    </View>
                    <View style={styles.formInput}>
                        <Icon name="tagso" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <TextInput label="Product Name" value={this.state.product} style={styles.inputs} onChangeText={(product) => this.setState({ product }) } />
                    </View >
                    <View style={styles.formInput}>
                        <Icon name="wallet" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <TextInput label="Price" value={this.state.price} style={styles.inputs} onChangeText={(price) => this.setState({ price })}/>
                    </View>
                    <View style={styles.formInput}>
                        <Icon name="profile" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <TextInput label="Product Description" value={this.state.desc} style={styles.inputs} onChangeText={(desc) => this.setState({ desc })} />
                    </View>
                    <View style={styles.formInput}>
                        <Icon name="folder1" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <Item picker style={styles.inputs}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                
                                selectedValue={this.state.currentLabel}
                                onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}
                                >


                                    {
                                        this.state.category.map((v) => {
                                            return <Picker.Item label={v.category} value={v.id_category} />
                                        })
                                    }

                            
                                                                
                            </Picker>
                        </Item>
                    </View>
                    
                    
                    
                    <Button mode="contained" title="Add Items" onPress={() => this.regSelling()} style={styles.button} >Add Product</Button>

                
                </View>
                </ScrollView>
                {/* End Container */}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        reducer: state.reducer
        // auth: state.auth
    };
};

export default connect(mapStateToProps)(addSelling)

const styles = StyleSheet.create({
    Pictures:{
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
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