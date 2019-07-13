import React, {Component} from 'react';
import { Modal, Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

class ModalExample extends Component {
  
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    console.log(transaksi)
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.50)', alignItems:'center', justifyContent:'center' }}>
            <View style={{backgroundColor:'#FFF', borderTopRightRadius:3, borderTopLeftRadius:3, width:'90%', height:'8%', padding:10, elevation:3 }}>
              <View style={{flexDirection:'row', padding:5, elevation:1}}>
                <Image
                  style={{width: 22, height: 22, marginRight:5}}
                  source={{uri: 'https://dumielauxepices.net/sites/default/files/hand-emoji-clipart-air-emoji-png-632601-5302983.png'}}
                />
                <Text style={{fontWeight:'bold', fontSize:17}}>Produk berhasil ditambah</Text>
              </View>
            </View>
            <View style={{backgroundColor:'#f2f0f0', borderBottomRightRadius:3, borderBottomLeftRadius:3, width:'90%', height:'20%', padding:10, elevation:3 }}>
              <View>
                <Button style={{height:46, justifyContent:'center', backgroundColor:'#d5d902'}} mode="contained"
                  onPress={() => {
                    this.props.navigation.openDrawer()
                  }}
                >
                  <Text style={{fontSize:14,color:'black'}}>LANJUT KE KERANJANG</Text>
                </Button>
                <Button style={{height:45, justifyContent:'center', backgroundColor:'#fff', marginTop:15, elevation:3}} mode="contained"
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={{fontSize:14,color:'#c8a8ed'}}>KEMBALI BERBELANJA</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

        <Button style={{height:57, justifyContent:'center'}} mode="text"
          onPress={() => {
            this.setModalVisible(true)
          }}
        >
          <Text style={{fontSize:17,color:'black'}}>BELI</Text>
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    top: 14,
    borderBottomWidth:1,
    borderColor:'#2ED1A2',
    marginLeft:25,
    marginRight:25,
    marginTop:5,
    fontSize:17
  }
})

export default ModalExample;