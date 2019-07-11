import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { IconButton, Colors, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import ModalBuy from '../component/ModalBeli'

export default class Note extends Component {

    state = {
        star : 2,
    }

    items() {
        let item  = []
        for(let i = 0; i<5; i++){
            if(i < this.state.star ){
                item.push(
                    <Icon name="star" size={25} color="#c2cc00" />
                )
            }
            else{
                item.push(
                    <Icon name="star-border" size={25} color="#c2cc00" />
                )
            }
        }
        return item
    }

    static navigationOptions = {
        headerRight: (
            <IconButton
                icon='shopping-cart'
                color={Colors.white}
                size={22}
                onPress={() => this.props.navigation.openDrawer()}
            />
        ),
        headerStyle: {
            backgroundColor: '#092B51',
            elevation:0
        },
        
        headerTintColor: '#fff',
        title: 'Detail Produk',
    }
    render() {
        const { visible } = this.state;
        return (
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.viewMain}>
                        <View style={styles.view1}>
                            <View style={styles.view1A}>
                                <Image
                                    style={{width: '50%', height: '100%',}}
                                    source={{uri: this.props.navigation.state.params.image}}
                                />
                            </View>
                            <View style={styles.view1B}>
                                <Text style={{fontSize:21,fontWeight:'bold',color:'#272929'}}>{this.props.navigation.state.params.nameBarang}</Text>
                                <Text style={{fontSize:16, color:'blue', marginTop:5}}>Consina - Backpack Pria</Text>
                            </View>
                            <View style={styles.view1C}>
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text style={{fontSize:16, color:'#81868a'}}>SKU - 3323309823</Text>
                                </View>
                                <View style={{flexDirection:'row', justifyContent:'flex-end',}}>
                                    <Text>
                                        {this.items()}
                                    </Text>
                                    <Text style={{fontSize:16}}>({this.state.star})</Text>
                                </View>
                            </View>
                            <View style={styles.view1D}>
                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>{this.props.navigation.state.params.discon}</Text>
                                <Text style={{ marginTop:2, fontSize:24, fontWeight:'bold', color:'blue'}}>Rp {this.props.navigation.state.params.harga}</Text>
                                <Text style={{ marginTop:4, color:'#272929'}}>Siap dikirim di hari yang sama</Text>
                            </View>
                        </View>
                        <View style={styles.view2}>
                            <Icon name="store" size={25} color="#7b8785" />
                            <Text style={{marginLeft:16, fontSize:17, color:'#272929'}}>Dijual dan dikirim oleh Bhinneka</Text>
                        </View>
                        <View style={styles.view3}>
                            <Icon name="style" size={25} color="#7b8785" />
                            <View style={{marginLeft:16}}>
                                <Text style={{fontSize:17, color:'#272929'}}>Varian:</Text>
                                <Text style={{fontSize:17, color:'#7b6ec2'}}>Grey</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center',alignItems:'flex-end'}}>
                                <Button style={{borderWidth:2, borderColor:'blue', justifyContent:'center', height:40}} mode="outlined" onPress={() => console.log('Pressed')}>
                                    PILIH
                                </Button>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', borderBottomWidth:1, marginTop:9, backgroundColor:'#fff', padding:15, borderColor:'#07e8ca'}}>
                            <Icon2 name="shield-check" size={25} color="#7b8785" />
                            <Text style={{marginLeft:16, fontSize:17, color:'#272929'}}>1 Year Local Official Distributor Warranty</Text>
                        </View>
                        {/* <View style={styles.view4}>
                            <Icon2 name="file-document" size={25} color="#7b8785" />
                            <View style={{marginLeft:16}}>
                                <Text style={{fontSize:17, color:'#272929'}}>Varian:</Text>
                                <Text style={{fontSize:17, color:'#7b6ec2'}}>{'\u2022'}Grey</Text>
                            </View>
                        </View> */}
                        <View style={styles.view5}>
                            <Text style={{fontSize:20, marginBottom:5}}>Overview</Text>
                            <View style={{flex:1, marginBottom:12}}>
                                <Text style={{fontSize:17, color:'#272929'}}>
                                    Jaket X Multifungsi merupakan jaket yang dapat digunakan sebagai pelindung tubuh dari terpaan angin sekaligus berfungsi sebagai mantel hujan. Cocok digunakan untuk segala aktivitas tanpa mengurangi kenyamanan.
                                </Text>
                            </View>
                        </View>
                    </View> 
                </ScrollView>
                <View style={{backgroundColor: '#d5d902'}}>
                    <ModalBuy/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewMain: {
        flex:1,
        backgroundColor:'#e1e5e8',
        paddingBottom: 45
    },
    view1: {
        height:440,
        elevation:0,
        backgroundColor:'#fff',
        padding:15
    },
    view1A:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height: '52%',
    },
    view1B:{
        marginTop:5,
    },
    view1C:{
        paddingBottom:15,
        marginTop:5,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#07e8ca'
    },
    view1D:{
        flex:1,
        justifyContent:'flex-end',
    },
    view2: {
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        height:'7%',
        elevation:1,
        backgroundColor:'#fff',
        marginTop:9
    },
    view3: {
        padding:15,
        flexDirection:'row',
        height:'10%',
        elevation:1,
        backgroundColor:'#fff',
        marginTop:9
    },
    // view4: {
    //     padding:15,
    //     flexDirection:'row',
    //     height:'12%',
    //     elevation:1,
    //     backgroundColor:'#fff',
    // },
    view5: {
        padding:15,
        elevation:1,
        backgroundColor:'#fff',
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
        backgroundColor: 'cyan'
    }
})
