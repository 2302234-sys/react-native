import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const ImageBackgroundExample = () => (
  <View style={styles.container}> 
    <Text style={styles.header}>ImageBackground Example</Text>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 150, 
    width: '100%', 
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden', 
  },
  text: {
    color: 'white',
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0', 
    paddingVertical: 5,
  },
});

export default ImageBackgroundExample;