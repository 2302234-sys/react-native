import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const PressableExample = () => { 
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.outerContainer}>
        <Text style={styles.header}>Pressable Example</Text>
        
        <Pressable
          onPress={() => {
            setTimesPressed(current => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
        
        <View style={styles.logBox}>
          <Text testID="pressable_press_console">{textLog}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  wrapperCustom: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logBox: {
    padding: 10,
    marginVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#777',
    backgroundColor: '#f9f9f9',
    width: '80%',
    alignItems: 'center',
  },
});

export default PressableExample; 