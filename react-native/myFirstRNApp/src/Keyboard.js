import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          
          <Text style={styles.header}>Keyboard Demo</Text>
          <TextInput placeholder="Enter text here..." style={styles.textInput} />
          
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
          
        </View>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    height: 300, 
    width: '90%',
    marginVertical: 15,
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  inner: {
    padding: 24,
    flex: 1, 
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    width: '80%',
    paddingHorizontal: 5,
  },
  btnContainer: {
    width: '80%',
    backgroundColor: 'white',
    marginTop: 12,
  },
});

export default KeyboardAvoidingComponent;