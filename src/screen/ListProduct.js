import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { IconButton, Colors } from 'react-native-paper';

import { connect } from 'react-redux'
import { getProduct } from '../public/action/product'

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name_category: this.props.navigation.state.params.category
    }
  }

    getDataProduct(id){
        this.props.dispatch(getProduct(id))
    }

    componentDidMount = () => {
        this.getDataProduct(this.props.navigation.state.params.id_category)
        this.props.navigation.setParams({ title : this.state.name_category })
    }
  
  static navigationOptions = ({ navigation }) => ({
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
                onPress={() => {navigation.navigate('Cart')}}
            />
        </View>
    ),
    headerStyle: {
        backgroundColor: '#092B51',
        elevation:0
    },
    
    headerTintColor: '#fff',
    title: navigation.getParam('title')
  })

    render() {
        console.warn('tes')
        return (
            // Header
            <View style={{ backgroundColor: "#F5F5F5" }}>

        <ScrollView>
          <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 25 }}>
            <Text style={{ fontSize: 20, color: "#9E9E9E" }}>items 25</Text>
          </View>
          <View style={{ marginBottom: 300 }}>
            <FlatList
              data={this.props.product.data}
              keyExtractor={(item, index) => {
                item.id;
              }}
              numColumns={2}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    borderColor: "#DEDEDE",
                    width: 178,
                    height: 330,
                    borderWidth: 1,
                    borderColor: "#d6d7da"
                  }}
                >
                  <View style={{ display: "flex" }}>
                    <Image
                      source={{uri: item.image}}
                      style={{ width: 176, height: 160, marginBottom: 70 }}
                    />
                    <View style={{ marginLeft: 23 }}>
                      <Text style={{ fontSize: 20, marginBottom: 35 }}>
                        {item.product}
                      </Text>
                      <Text>Rp. {item.price}</Text>
                    </View>
                  </View>
                </View>
              )}
            />
            {/* <FlatList
                            data={[{ key: 'a' }, { key: 'b' }]}
                            renderItem={({ item }) => <View style={{ borderStyle: "solid" }}>
                                <Text>{item.key}</Text>
                                {console.log('DATA: ' + JSON.stringify(item.id))}
                            </View>}
                        /> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
    return {
      product: state.product
    }
}
export default connect(mapStateToProps)(ListProduct);
