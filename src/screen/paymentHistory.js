import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import {Appbar} from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class paymentHistory extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            dummy:[{
                id: '1',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '2',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '3',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '4',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '5',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '6',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            },
            {
                id: '7',
                name: 'dummy',
                dateBuyed: '2000-09-09',
                price: '3000'
            }]
        }
    }

    render() {
        return (
            <View style={styles.back}>
                <Appbar.Header style={styles.Head}>
                    <Appbar.BackAction
                        onPress={() => alert('this back')}
                    />
                    <Appbar.Content
                        title="Payment History"
                    />
                </Appbar.Header>
                <View>
                    <ScrollView>
                        <FlatList 
                            data={this.state.dummy}
                            keyExtractor={this.state.dummy.id}
                            renderItem={({item}) => 
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.FlatContainer}>
                                    <Image style={styles.imgs} source={require('../icons/indonesia.jpg')} />
                                    <View style={styles.TextDetails}>
                                        <Text style={styles.TextInner}>{item.name}</Text>
                                        <Text style={styles.TextInner}>{item.dateBuyed}</Text>
                                        <Text style={styles.TextInner}>Rp. {item.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Head: {
        backgroundColor: "#fff"
    },
    back:{
        backgroundColor: "#DEDEDE"
    },
    FlatContainer: { 
        backgroundColor: "#fff",
        borderBottomColor: "#BDBDBD",
        borderTopColor: "#fff",
        padding: 15, 
        borderWidth: 0.5, 
        display: "flex", 
        flexDirection: "row" 
    },
    imgs: { 
        
        borderRadius: 150, 
        width: 50, 
        height: 50,
        marginRight: 23,
        alignItems: "center"

    },
    TextDetails: { 
        flexDirection: "column" 
    },
    TextInner:{
        marginBottom: 10
    }

})