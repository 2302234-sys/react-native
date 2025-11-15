

import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  imageSection: {
    marginVertical: 10,
    alignItems: 'center',
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  logo: {
    width: 66,
    height: 58,
    marginBottom: 10,
  },
  placeholderText: {
    marginBottom: 10,
    color: 'gray',
    fontSize: 12,
  }
});

const DisplayAnImage = () => (
  <View style={styles.container}> 
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Image Component Example</Text>

    <View style={styles.imageSection}>
      <Text style={styles.placeholderText}>
          (First image source skipped for remote testing)
      </Text>
    </View>

    <View style={styles.imageSection}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>Remote Image (tiny_logo.png)</Text>
    </View>

    <View style={styles.imageSection}>
      {/* Base64 Image */}
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgYGBgbmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Text>Base64 Data Image</Text>
    </View>

  </View>
);

export default DisplayAnImage;