// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ActivityIndicatorExample from './ActivityIndicator';
import ButtonExample from './Button'; 

export default function App() {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.section}>
        <ActivityIndicatorExample />
      </View>
      
      <View style={styles.section}>
        <ButtonExample /> 
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20, 
  },
  section: {
    width: '100%', 
    padding: 10,
    marginBottom: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
  }
});