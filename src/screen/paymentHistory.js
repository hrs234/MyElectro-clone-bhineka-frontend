import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import {Appbar} from 'react-native-paper';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

//redux
import { connect } from "react-redux";
import { getHistory } from '../public/action/action';

class paymentHistory extends Component {
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

    componentDidMount() {
        this.getData(27);

    }

    filter_date = (date) => {
        let filterA = date.split('T');

        return filterA[0];
    }

    formatNumber = (nums) => {
        return nums.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }


    getData = (id) => {
        return this.props.dispatch(getHistory(id));
    }

    render() {
        console.log(this.props.reducer.data.id_transaction);
        return (
            <View style={styles.back}>
                <Appbar.Header style={styles.Head}>
                    <Appbar.BackAction
                        onPress={() => alert('this back')}
                    />
                    <Appbar.Content
                        title="Riwayat Pembayaran"
                    />
                </Appbar.Header>
                <View>
                    <ScrollView>
                        <FlatList
                            data={this.props.reducer.data}
                            keyExtractor={this.props.reducer.data.id_transaction}
                            renderItem={({ item }) =>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <View style={styles.FlatContainer}>
                                        <Image style={styles.imgs} source={{ uri: `${item.image}` }} />
                                        <View style={styles.TextDetails}>
                                            <Text style={styles.TextInner}>{item.product}</Text>
                                            <Text style={styles.TextInner}>{this.filter_date(item.date)}</Text>
                                            <Text style={styles.TextInner}>Rp. {this.formatNumber(item.price)}</Text>
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

const mapStateToProps = state => {
    return {
        reducer: state.reducer
    };
};

export default connect(mapStateToProps)(paymentHistory);


const styles = StyleSheet.create({
    Head: {
        backgroundColor: "#092B51"
    },
    back: {
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
    TextInner: {
        marginBottom: 10
    }

})