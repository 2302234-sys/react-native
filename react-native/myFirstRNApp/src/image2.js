import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20, 
    alignItems: 'center', 
    width: '100%',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => (
  <View style={styles.container}> 
    
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>Stretched Image Example</Text>
    
    <Image
      style={styles.stretch}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />

    <Text style={{ fontSize: 12, color: '#555' }}>
        Image uses resizeMode: 'stretch'
    </Text>
    
  </View>
);

export default DisplayAnImageWithStyle;