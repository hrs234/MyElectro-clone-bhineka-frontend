import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, RefreshControl, ActivityIndicator } from 'react-native';
import { IconButton, Colors, Card } from 'react-native-paper';

import { getCategory } from '../public/action/category'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';

// Tab Category
class CategoryScreen extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    getDataCategory(){
        this.props.dispatch(getCategory());
        this.setState({ refreshing: false });

    }

    componentDidMount = () => {
        this.getDataCategory()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    
                >
                {
                this.props.category.isLoading 
                ? 
                    <ActivityIndicator size="large" color="#CFD8DC" style={{ marginTop: 100 }} />
                :
                <FlatList
                        
                    data={this.props.category.data}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.props.dispatch(getCategory())}
                        />
                    }
                    renderItem={({ item }) => (
                        
                        <TouchableHighlight underlayColor="#F5F5F5" onPress={() => this.props.navigation.navigate('ListProduct', item)}>
                            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor:'#E0E0E0'}}>
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
                }
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
      category: state.category
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
