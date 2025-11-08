// src/Button.js

import React from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
// Removed: import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

const ButtonExample = () => (
  // Use a standard View
  <View style={styles.container}> 
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // 🔑 FIX: Removed flex: 1. Content defines the height.
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingVertical: 20, // Added padding for better spacing
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonExample;