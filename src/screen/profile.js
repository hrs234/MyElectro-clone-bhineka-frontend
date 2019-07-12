import React, { Component } from 'react';
import { View,Image, StyleSheet, Text } from 'react-native';
import { Appbar } from 'react-native-paper';


export default class profile extends Component
{
    render()
    {
        return(
            <View>
                <Appbar.Header style={styles.Head}>
                    <Appbar.BackAction/>
                    <Appbar.Content
                        title="Profil Saya"
                    />
                </Appbar.Header>
                <View>

                </View>
                {/* <Image source={require('../icons/indonesia.jpg')} style={}/> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Head:{
        backgroundColor: "#243d66"
    }

});