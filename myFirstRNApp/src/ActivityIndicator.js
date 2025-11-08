

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const ActivityIndicatorExample = () => (
  <View style={[styles.container, styles.horizontal]}> 
    
    <ActivityIndicator size="large" color="#0000ff" /> 
    <ActivityIndicator size="small" color="#ff0000" />
    <ActivityIndicator size="large" color="#00ff00" />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
 
    justifyContent: 'center',
    height: 80, 
    width: '100%',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIndicatorExample;