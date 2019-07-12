import React, { Component } from "react";
import { Container, Header, Body, Input, Icon } from "native-base";
import { FlatList, Text, View, Image } from "react-native";

const faker = [
  {
    id: 1,
    title: "ASUS Notebook X441MA-GA004T - White",
    image: "https://www.asus.com/media/global/products/KXZoWM1TwHAoC115/P_setting_fff_1_90_end_500.png",
    price: "4.000.000"
  },
  {
    id: 2,
    title: "Asus Notebook B",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "3.000.000"
  },
  {
    id: 3,
    title: "Asus Notebook C",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "5.000.000"
  },
  {
    id: 4,
    title: "Asus Notebook D",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "7.000.000"
  },
  {
    id: 5,
    title: "Asus Notebook E",
    image:
      "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/ASUS_ROG_Strix_GL503/ASUS_ROG_Strix_GL503_L_1.jpg",
    price: "1.000.000"
  }
];



export default class Search extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        isLoading: false
      };
    }
  }

  componentDidMount() {}

  _keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: "row", marginBottom: 3,borderBottomWidth:1, borderBottomColor:"#E0E0E0" }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 80, height: 80, margin: 5 }}
      />
      <View style={{ flex: 1, marginLeft: 5, marginTop:15 }}>
        <Text style={{fontSize:15}}>{item.title}</Text>
        <Text style={{ fontWeight: "bold", marginTop:5 }}>Rp. {item.price}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", alignItems: "center" }}>
          <Body style={{ flexDirection: "row" }}>
            <Icon
              name="md-arrow-back"
              style={{ alignSelf: "center", marginRight: 35, marginLeft: 10 }}
            />
            <Input
              
              placeholder="Cari Produk Asli"
              placeholderTextColor="gray"
            />
          </Body>
        </Header>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={faker}
          renderItem={this.renderItem}
          style={{marginTop: 5}}
        />
      </Container>
    );
  }
}

// export default App;
