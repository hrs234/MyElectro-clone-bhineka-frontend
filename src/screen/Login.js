import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { List, Colors, HelperText, TextInput, Appbar, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class FloatingLabelExample extends Component {
  
  //Action Header
  _goBack = () => this.props.navigation.goBack();

  state = {
    text: '',
    password: ''
  };

  render() {
    return (

        <View style={{ flex: 1, backgroundColor:'#F5F5F5'}}>
            <Appbar.Header style={{ backgroundColor: '#fff' }}>
                <Appbar.Action
                    icon="close"
                    onPress={this._goBack}
                />
                <Appbar.Content
                    title="Login"
                />
            </Appbar.Header>

            <View style={styles.view1}>
                <View style={{flexDirection:'row'}}>
                    <List.Icon color={Colors.blue300} icon="email" />
                    <TextInput
                        label='Email'
                        value={this.state.text}
                        style={styles.textInput}
                        onChangeText={text => this.setState({ text })}
                    />
                </View>
                <HelperText
                    type="error"
                    visible=
                    {
                        !this.state.text.includes('@') ? 
                            this.state.text == '' ? 
                                false 
                                : 
                                true 
                            : false
                    }
                    >
                    Format email salah
                </HelperText>
                <View style={{flexDirection:'row'}}>   
                    <List.Icon color={Colors.blue300} icon="lock" /> 
                    <TextInput
                        label='Password'
                        value={this.state.password}
                        style={styles.textInput}
                        secureTextEntry={true}
                        // keyboardType='visible-password' // Action for show & hide password 
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <TouchableOpacity style={{marginTop: 20, TextAlign:'right'}}>
                    <Text style={{textAlign:'right'}}>LUPA PASSWORD</Text>
                </TouchableOpacity>
                <Button 
                    style={{width: '80%', marginTop:20}} 
                    mode="contained" 
                    onPress={() => console.log('Pressed')}
                >
                    LOGIN
                </Button>
            </View>
            <View style={styles.view2}>
                <Text style={styles.textA}>Belum punya akun Bhineka?</Text>
                <Button style={{color:'blue', width: '34%', backgroundColor:'#fff'}} mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={{color: 'blue'}}>REGISTRASI</Text> 
                </Button>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    view1: {
        marginLeft:15,
        margin:20,
        marginRight:20,
        alignItems:'flex-end'
    },
    view2: {
        marginRight:20,
        flexDirection: 'row',
        alignItems:'center',
        height:'10%'
    },
    textA: {
        textAlign:'right',
        fontSize:12,
        marginRight:25,
        flex:1
    },
    textInput: {
        width: '80%',
        fontSize: 200,
        backgroundColor: '#F5F5F5'
    }
})