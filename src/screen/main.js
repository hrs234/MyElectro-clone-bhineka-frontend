import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { IconButton, Colors, Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import Carousel from "react-native-carousel-control";

import DetailPage from "./DetailPage";
import { Icon } from "native-base";




const data = [
    {nameCategory: 'Aksesories Gadget & Komputer'},
    {nameCategory: 'Alat Musik & Pro Audio'},
    {nameCategory: 'Alat Tulis & Perlengkapan Kerja'},
    {nameCategory: 'Buku, Film & Musik'},
    {nameCategory: 'Camera and Video'},
    {nameCategory: 'Computer,Dekstop,Notebook'},
    {nameCategory: 'Fashion & Busana Pria'},
    {nameCategory: 'Fashion & Busana Wanita'},
    {nameCategory: 'Gadget'},
    {nameCategory: 'Kesehatan dan Kecantikan'},
]

const list = [
    {
        image : 'http://static.bmdstatic.com/pk/product/medium/5c456f9e0df12.jpg',
        nameBarang: 'Consina Daypack Nauru Grey',
        discon: 'Rp 285.000',
        harga: '269.000'
    },
    {
        image : 'https://www.mobiledokan.co/wp-content/uploads/2019/04/Realme-C2.jpg',
        nameBarang: 'Realme C2 3GB/32GB-Diamond Blue',
        discon: '',
        harga: '1.699.000'
    },
    {
        image : 'http://static.bmdstatic.com/pk/product/medium/5cbfcff173f83.jpg',
        nameBarang: 'LOCK & LOCK Botol Minum Easy Stopper Bottle 950ml Green',
        discon: '',
        harga: '70.000'
    },
    {
        image : 'https://id-media.apjonlinecdn.com/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/F/3/F3J92AA-1_T1539253707.png',
        nameBarang: 'HP Slim Blutooth Mouse F3J92AA',
        discon: 'Rp 200.000',
        harga: '380.000'
    },
];

// Tab Main Menu
export class MainMenu extends Component {
    static navigationOptions = {
        drawerIcon: <Icon name="store" type="MaterialIcons" style={{ color: "#000000" }} />
    };

    constructor(props) {
        super(props);
        this.state = {
            data : data,
            list : list
        }
    }
    handleNavigate = (Item) => {
        const { navigation } = this.props;
        navigation.navigate('DetailPage', Item)
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f2f5f7'}}>
                <View style={{flexDirection:'row', marginTop:10, marginRight:-13, marginLeft:-12}}>
                    <Carousel pageWidth={340}>
                        <Card>
                            <Card.Cover style={{height:230}} source={{ uri: 'https://artikel.pricearea.com/wp-content/uploads/2017/10/bkj.jpg' }} />
                        </Card>
                        <Card>
                            <Card.Cover style={{height:230}} source={{ uri: 'https://jadwalevent.web.id/wp-content/uploads/2018/11/promo-1-1.png?w=640' }} />
                        </Card>
                        <Card>
                            <Card.Cover style={{height:230}} source={{ uri: 'http://jadwalevent.web.id/wp-content/uploads/2018/09/promo-9.png?w=640' }} />
                        </Card>
                        <Card>
                            <Card.Cover style={{height:230}} source={{ uri: 'https://cms.dailysocial.id/wp-content/uploads/2016/07/DS-bhi.jpg' }} />
                        </Card>
                        <Card>
                            <Card.Cover style={{height:230}} source={{ uri: 'https://pbs.twimg.com/media/CVb9wNgWcAApCJ7.jpg' }} />
                        </Card>
                    </Carousel>
                </View>
                <View style={{width:'95%', marginTop:20, borderWidth:0}}>
                    <Card style={{elevation:5}}>
                        <Card.Title 
                            style={{borderBottomWidth:0.7, borderColor:'#97a6a1', height:50}}
                            title="Rekomendasi untuk Anda"
                            titleStyle={{fontSize: 17}}
                            right={(props) => <Text style={{color:'blue', fontWeight:'bold', fontSize:12}}>LIHAT SEMUA</Text>} 
                            rightStyle={{marginRight:16}}
                        />
                        <Card.Content>
                            <FlatList
                                style={{borderWidth:0, marginLeft:-16, paddingLeft:10, paddingRight:30, marginRight:-16}}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('DetailPage', item)}
                                        >
                                        <View style={{width:180, marginTop:25, marginBottom:14,}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{width: 100, height: 120,}}
                                                    source={{uri: item.image}}
                                                />
                                            </View>
                                            <View style={{marginTop:12}}>
                                                <Text style={{ fontSize:15 }} numberOfLines={2}>
                                                    {item.nameBarang}
                                                </Text>
                                            </View>
                                            <View style={{marginTop:5, marginBottom:3}}>
                                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>
                                                    {item.discon}
                                                </Text>
                                            </View>
                                            <View style={{flex:1, alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                                                <Text style={{ fontWeight:'bold' }}>
                                                    Rp {item.harga}
                                                </Text>
                                            </View>
                                        </View>
                                        </TouchableOpacity>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{width:'95%', marginTop:20, borderWidth:0}}>
                    <Card style={{elevation:5}}>
                        <Card.Title 
                            style={{borderBottomWidth:0.7, borderColor:'#97a6a1', height:50}}
                            title="Rekomendasi untuk Anda"
                            titleStyle={{fontSize: 17}}
                            right={(props) => <Text style={{color:'blue', fontWeight:'bold', fontSize:12}}>LIHAT SEMUA</Text>} 
                            rightStyle={{marginRight:16}}
                        />
                        <Card.Content>
                            <FlatList
                                style={{borderWidth:0, marginLeft:-16, paddingLeft:10, paddingRight:30, marginRight:-16}}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{width:180, marginTop:25, marginBottom:14,}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{width: 100, height: 120,}}
                                                    source={{uri: item.image}}
                                                />
                                            </View>
                                            <View style={{marginTop:12}}>
                                                <Text style={{ fontSize:15 }} numberOfLines={2}>
                                                    {item.nameBarang}
                                                </Text>
                                            </View>
                                            <View style={{marginTop:5, marginBottom:3}}>
                                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>
                                                    {item.discon}
                                                </Text>
                                            </View>
                                            <View style={{flex:1, alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                                                <Text style={{ fontWeight:'bold' }}>
                                                    Rp {item.harga}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{width:'95%', marginTop:20, borderWidth:0}}>
                    <Card style={{elevation:5}}>
                        <Card.Title 
                            style={{borderBottomWidth:0.7, borderColor:'#97a6a1', height:50}}
                            title="Rekomendasi untuk Anda"
                            titleStyle={{fontSize: 17}}
                            right={(props) => <Text style={{color:'blue', fontWeight:'bold', fontSize:12}}>LIHAT SEMUA</Text>} 
                            rightStyle={{marginRight:16}}
                        />
                        <Card.Content>
                            <FlatList
                                style={{borderWidth:0, marginLeft:-16, paddingLeft:10, paddingRight:30, marginRight:-16}}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{width:180, marginTop:25, marginBottom:14,}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{width: 100, height: 120,}}
                                                    source={{uri: item.image}}
                                                />
                                            </View>
                                            <View style={{marginTop:12}}>
                                                <Text style={{ fontSize:15 }} numberOfLines={2}>
                                                    {item.nameBarang}
                                                </Text>
                                            </View>
                                            <View style={{marginTop:5, marginBottom:3}}>
                                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>
                                                    {item.discon}
                                                </Text>
                                            </View>
                                            <View style={{flex:1, alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                                                <Text style={{ fontWeight:'bold' }}>
                                                    Rp {item.harga}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{width:'95%', marginTop:20, borderWidth:0}}>
                    <Card style={{elevation:5}}>
                        <Card.Title 
                            style={{borderBottomWidth:0.7, borderColor:'#97a6a1', height:50}}
                            title="Rekomendasi untuk Anda"
                            titleStyle={{fontSize: 17}}
                            right={(props) => <Text style={{color:'blue', fontWeight:'bold', fontSize:12}}>LIHAT SEMUA</Text>} 
                            rightStyle={{marginRight:16}}
                        />
                        <Card.Content>
                            <FlatList
                                style={{borderWidth:0, marginLeft:-16, paddingLeft:10, paddingRight:30, marginRight:-16}}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{width:180, marginTop:25, marginBottom:14,}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{width: 100, height: 120,}}
                                                    source={{uri: item.image}}
                                                />
                                            </View>
                                            <View style={{marginTop:12}}>
                                                <Text style={{ fontSize:15 }} numberOfLines={2}>
                                                    {item.nameBarang}
                                                </Text>
                                            </View>
                                            <View style={{marginTop:5, marginBottom:3}}>
                                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>
                                                    {item.discon}
                                                </Text>
                                            </View>
                                            <View style={{flex:1, alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                                                <Text style={{ fontWeight:'bold' }}>
                                                    Rp {item.harga}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </Card.Content>
                    </Card>
                </View>
                <View style={{width:'95%', marginTop:20, marginBottom: 40}}>
                    <Card style={{elevation:5}}>
                        <Card.Title 
                            style={{borderBottomWidth:0.7, borderColor:'#97a6a1', height:50}}
                            title="Rekomendasi untuk Anda"
                            titleStyle={{fontSize: 17}}
                            right={(props) => <Text style={{color:'blue', fontWeight:'bold', fontSize:12}}>LIHAT SEMUA</Text>} 
                            rightStyle={{marginRight:16}}
                        />
                        <Card.Content>
                            <FlatList
                                style={{borderWidth:0, marginLeft:-16, paddingLeft:10, paddingRight:30, marginRight:-16}}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={list}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{width:180, marginTop:25, marginBottom:14,}}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                                <Image
                                                    style={{width: 100, height: 120,}}
                                                    source={{uri: item.image}}
                                                />
                                            </View>
                                            <View style={{marginTop:12}}>
                                                <Text style={{ fontSize:15 }} numberOfLines={2}>
                                                    {item.nameBarang}
                                                </Text>
                                            </View>
                                            <View style={{marginTop:5, marginBottom:3}}>
                                                <Text style={{ textDecorationLine: 'line-through', color:'#6a6f7a' }}>
                                                    {item.discon}
                                                </Text>
                                            </View>
                                            <View style={{flex:1, alignItems: 'flex-start',justifyContent: 'flex-end'}}>
                                                <Text style={{ fontWeight:'bold' }}>
                                                    Rp {item.harga}
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                }}
                                keyExtractor={(item, index) => index}
                            />
                        </Card.Content>
                    </Card>
                </View>
            </View>
            </ScrollView>
        )
    }
}

// Tab Category
class Kategori extends React.Component {
    signIn = () => {
        console.warn('Tes Highlight')  
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableHighlight underlayColor="cyan" onPress={this.signIn}>
                            <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#33cccc'}}>
                                <Text style={styles.item}>{item.nameCategory}</Text>
                                <View style={{justifyContent:'center'}}>
                                    <IconButton
                                        icon='keyboard-arrow-right'
                                        color={Colors.black}
                                        size={25}
                                        onPress={() => console.log('Pressed')}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        );
    }
}

//Tab Navigation
const TabNavigator = createMaterialTopTabNavigator(
    {
        JELAJAH : MainMenu,
        KATEGORI: Kategori,
    },
    {
        tabBarOptions: {
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#092B51',
          },
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold'
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          }
        }
    }
);

//Stack Navigation
const Stack = createStackNavigator({
    TabNavigator: {
        screen: TabNavigator,
        navigationOptions:({ navigation }) => ({
            headerLeft: (
                <IconButton
                    icon='menu'
                    color={Colors.white}
                    size={25}
                    onPress={() => {navigation.openDrawer()}}
                />
            ),
            headerRight: (
                <View style={{flexDirection:'row'}}>
                    <IconButton
                        style={{marginRight:-3}}
                        icon='search'
                        color={Colors.white}
                        size={25}
                        onPress={() => {navigation.openDrawer()}}
                    />
                    <IconButton
                        icon='shopping-cart'
                        color={Colors.white}
                        size={22}
                        onPress={() => {navigation.openDrawer()}}
                    />
                </View>
            ),
            headerStyle: {
                backgroundColor: '#092B51',
                elevation:0
            },
            
            headerTintColor: 'red',
            title: 'MyElectro',
        })
    },
    DetailPage:{
        screen: DetailPage
    }
})

const styles = StyleSheet.create({
    container: {
        borderColor: '#33cccc',
        flexDirection: 'column',
        textAlignVertical: 'center',
    },
    item: {
        flex: 1,
        fontSize: 17,
        paddingLeft: '18%',
        height: 60,
        textAlignVertical: 'center',
    },
})

export default createAppContainer(Stack);