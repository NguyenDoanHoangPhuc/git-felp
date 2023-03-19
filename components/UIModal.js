import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {images, icon, colors, fontSizes} from '../constants/index'

const UIModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const grownDatas = props.data;
  
  return <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[ styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon name={'times'} style={styles.textCloseStyle}>  </Icon>
            </Pressable>
            <View>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40
    }}>
        <Icon name={'tree'} size={20} color={'#FFFDE2'} />
        <Text style={{
            fontSize: fontSizes.h2,
            fontWeight: 'bold',
            color: '#FFFDE2',
            marginBottom: 5,
            marginLeft: 15,
           
        }}>Mẹo nhỏ khi trồng cây </Text>
    </View>

    
    <View style={{ height: 1, backgroundColor: '#FFFDE2' }}></View>
    
    {grownDatas.map(grownData => <Text style={{
        fontSize: fontSizes.h4,
        color: 'white',
        textAlign: 'left',
        marginTop: 12,
        lineHeight: 25
    }}>{grownData}</Text>)}
    
  

</View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Icon name={'tree'} size={20} color={colors.grayText} style={{marginRight:12}} />
        <Text style={styles.textStyle}>Hướng dẫn trồng cây</Text>
      </Pressable>
    </View>
  
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#240402',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 15,
    width: '90%',
    marginBottom: 30,
  },
  buttonOpen: {
    backgroundColor: '#EDFFF7',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row'
  },
  buttonClose: {
    padding: 10,
    elevation: 2,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  textStyle: {
    color: colors.grayText,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.h3
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'black'
  },
  textCloseStyle: {
    fontSize: 30,
  }
});

export default UIModal;