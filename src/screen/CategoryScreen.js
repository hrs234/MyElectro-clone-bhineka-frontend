import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { IconButton, Colors, Card } from 'react-native-paper';

import { getCategory } from '../public/action/category'
import { getProduct } from '../public/action/product'
import { connect } from 'react-redux'
// Tab Category
class CategoryScreen extends React.Component {

    getDataCategory(){
        this.props.dispatch(getCategory())
    }

    getDataProduct(id){
        console.log(id,'masuk fungsi')
        this.props.dispatch(getProduct(id))
    }

    componentDidMount = () => {
        this.getDataCategory()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.category.data}
                    renderItem={({ item, index }) => (
                        <TouchableHighlight underlayColor="cyan" onPress={() => this.props.navigation.navigate('Informasi', console.warn('test'))}>
                            <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#33cccc'}}>
                                <Text style={styles.item}>{item.category}</Text>
                                <View style={{justifyContent:'center'}}>
                                    <IconButton
                                        icon='keyboard-arrow-right'
                                        color={Colors.black}
                                        size={25}
                                    />
                                </View>
                            </View>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item,index)=>item.id+' '}
                />
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
      category: state.category,
      product: state.product
    }
}
export default connect(mapStateToProps)(CategoryScreen);

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
