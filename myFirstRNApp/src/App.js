// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Platform } from 'react-native';
import ActivityIndicatorExample from './ActivityIndicator';
import ButtonExample from './Button'; 
import Flatlistexample from './Flatlist'; 
import DisplayAnImage from './image1'; 
import DisplayAnImageWithStyle from './image2'; 
import ImageBackgroundExample from './imageBg';
import KeyboardAvoidingComponent from './Keyboard';
export default function App() {
  
  return (
    <View style={styles.container}>
      <Flatlistexample 
        ListHeaderComponent={() => (
          <View>
            <View style={styles.section}>
              <ActivityIndicatorExample />
            </View>
            
            <View style={styles.section}>
              <ButtonExample /> 
            </View>
            
            <View style={styles.section}>
              <DisplayAnImage /> 
            </View>

            <Text style={styles.listHeaderTitle}>--- FlatList Items Below ---</Text>

            <View style={styles.section}>
              <DisplayAnImageWithStyle /> 
            </View>

            <View style={styles.section}>
              <ImageBackgroundExample /> 
            </View>

            <View style={styles.section}>
              <KeyboardAvoidingComponent /> 
            </View>

          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0, 
  },
  section: {
    marginVertical: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    alignItems: 'center',
  },
  listHeaderTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#333',
  }
});