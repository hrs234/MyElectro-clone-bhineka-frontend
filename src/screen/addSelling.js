import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { Item, Picker } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';

export default class addSelling extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            photo: null,
            product: '',
            price: '',
            desc: '',
            category: '',
            selected2: undefined
            
        }
        // this.setDate = this.setDate.bind(this);
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

    render() {
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
                        <TextInput label="Product Name" style={styles.inputs} onChangeText={(product) => this.setState({ product }) } />
                    </View >
                    <View style={styles.formInput}>
                        <Icon name="wallet" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <TextInput label="Price" style={styles.inputs} onChangeText={(price) => this.setState({ price })}/>
                    </View>
                    <View style={styles.formInput}>
                        <Icon name="profile" size={28} style={{ marginTop: 15, marginRight: 15 }} />
                        <TextInput label="Product Description" style={styles.inputs} onChangeText={(desc) => this.setState({ desc })} />
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
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Category A" value="key0" />
                                <Picker.Item label="Category B" value="key1" />
                                <Picker.Item label="category C" value="key2" />
                                
                            </Picker>
                        </Item>
                    </View>
                    
                    
                    
                    <Button mode="contained" title="Add Items" onPress={() => alert('this regist')} style={styles.button} >Add Product</Button>

                
                </View>
                </ScrollView>
                {/* End Container */}
            </View>
        )
    }
}

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