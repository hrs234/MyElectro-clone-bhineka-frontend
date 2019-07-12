import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { List, Colors, Button } from 'react-native-paper';

export default class FloatingLabelExample extends Component {

  state = {
    text: '',
    password: ''
  };

  render() {
    return (
        <View style={{ flex: 1, backgroundColor:'#e1e1e3'}}>
            <View style={styles.view1}>
                <List.Icon color={Colors.blueGrey500} icon="account-box" />
                <Text style={{fontSize:20}}>Data Pembeli</Text>
            </View>
            <View style={styles.view2}> 
                <View>
                    <Text style={{fontSize:15, fontWeight:'bold', marginBottom:10}}>Ilham Yoga P.</Text>
                    <Text style={{fontSize:15, marginBottom:10}}>ilhamyogha@gmail.com</Text>
                </View>
                <Button style={{color:'blue', width: '34%', borderWidth:2, borderColor:'blue'}} mode="outlined" onPress={() => console.log('Pressed')}>
                    <Text style={{color: 'blue'}}>UBAH</Text> 
                </Button>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    view1: {
        flexDirection:'row',
        alignItems: 'center'
    },
    view2: {
        padding:20,
        paddingLeft:50,
        height:'25%',
        backgroundColor:'#fff',
        elevation:2
    },
})