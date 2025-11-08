// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ActivityIndicatorExample from './src/ActivityIndicator'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicatorExample /> 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});