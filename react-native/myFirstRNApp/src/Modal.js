import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.outerContainer}> 
      
      <Text style={styles.header}>Modal Example</Text>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
        
      </Modal>
   
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  outerContainer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    minHeight: 100, 
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  centeredView: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12, 
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    width: '80%', 
  },
  button: {
    borderRadius: 8, 
    padding: 12,
    elevation: 2,
    minWidth: 120,
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#6A0DAD', 
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ModalExample;