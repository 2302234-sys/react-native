// src/ActivityIndicator.js

import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
// Removed: import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ActivityIndicatorExample = () => (
  // Use a standard View to allow App.js to control layout
  <View style={[styles.container, styles.horizontal]}> 
    
    {/* Activity Indicator with a defined color is always a good practice */}
    <ActivityIndicator size="large" color="#0000ff" /> 
    <ActivityIndicator size="small" color="#ff0000" />
    <ActivityIndicator size="large" color="#00ff00" />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    // 🔑 FIX: Removed flex: 1. Let padding/content define height.
    justifyContent: 'center',
    height: 80, // Giving it a fixed height ensures visibility
    width: '100%',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIndicatorExample;