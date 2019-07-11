import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Icon } from "native-base";
import { Appbar } from "react-native-paper";
// import { FlatList } from 'react-native-gesture-handler';

export default class wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: [
        {
          id: "1",
          nameCategory: "wishlist",
          price: 2000
        },
        {
          id: "2",
          nameCategory: "important",
          price: 2000
        },
        {
          id: "3",
          nameCategory: "work",
          price: 2000
        }
      ]
    };
  }
  static navigationOptions = {
    drawerIcon: (
      <Icon name="store" type="MaterialIcons" style={{ color: "#000000" }} />
    )
  };

  rendered = ({ item }) => {
    <View style={{ borderStyle: "solid" }}>
      <Text>{JSON.stringify(item.id)}</Text>
      {console.log("DATA: " + JSON.stringify(item.id))}
    </View>;
  };

    render() {
        return (
            // Header
            <View style={{ backgroundColor: "#F5F5F5" }}>
                <Appbar.Header style={{ backgroundColor: '#092B51'}}>
                <Appbar.BackAction
                    onPress={() => alert('this back')}
                />
                <Appbar.Content
                    title="Wishlist"
                />
            </Appbar.Header>

        <ScrollView>
          <View style={{ marginTop: 15, marginLeft: 15, marginBottom: 25 }}>
            <Text style={{ fontSize: 20, color: "#9E9E9E" }}>items 25</Text>
          </View>
          <View style={{ marginBottom: 300 }}>
            <FlatList
              data={this.state.dummy}
              keyExtractor={(item, index) => {
                item.id;
              }}
              numColumns={2}
              renderItem={({ item }) => (
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
                      source={require("../icons/indonesia.jpg")}
                      style={{ width: 176, height: 160, marginBottom: 70 }}
                    />
                    <View style={{ marginLeft: 23 }}>
                      <Text style={{ fontSize: 20, marginBottom: 35 }}>
                        {item.nameCategory}
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
