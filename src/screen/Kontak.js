import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Appbar } from "react-native-paper";
import { Icon } from "native-base";

export default class Kontak extends Component {

    static navigationOptions = {
        drawerLabel: 'Kontak Kami',
        drawerIcon: (
          <Icon name="forum" type="MaterialIcons" style={{ color: "#000000", marginRight:-5 }} />
        )
    };
    
    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <Appbar.Header style={{ backgroundColor: '#092B51'}}>
                        <Appbar.BackAction
                            onPress={() => this.props.navigation.goBack()}
                        />
                        <Appbar.Content
                            title="Kontak Kami"
                        />
                    </Appbar.Header>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Image
                        style={{width: '70%', height: '40%',}}
                        source={{uri: 'https://giordanos.com/wp-content/uploads/coming-soon-v2.png'}}
                    />
                </View>
            </View>
        )
    }
}
