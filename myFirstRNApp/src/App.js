// App.js

import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Platform, // 🔑 MUST BE IMPORTED for paddingTop logic to work
  Text // Temporary import for testing visibility
} from 'react-native';

// Import your custom components
import ActivityIndicatorExample from './ActivityIndicator';
import ButtonExample from './Button'; 
import Flatlistexample from './Flatlist'; 


export default function App() {
  return (
    // 1. 'style' makes the ScrollView take up the full screen.
    <ScrollView 
        style={styles.scrollView} 
        // 2. 'contentContainerStyle' styles the content *inside* the ScrollView.
        contentContainerStyle={styles.contentContainer} 
    >
      
      {/* ⚠️ TESTING SECTION: IF YOU SEE THIS TEXT, YOUR LAYOUT IS WORKING!
        If you see this, the issue is inside one of your imported component files (e.g., Flatlist.js).
      */}
      <Text style={styles.testText}>LAYOUT IS WORKING!</Text>
        <View style={styles.section}>
        <ActivityIndicatorExample />
      </View>
      
      <View style={styles.section}>
        <ButtonExample /> 
      </View>

      <View style={styles.section}>
        <Flatlistexample /> 
      </View>
      
      {/* 3. UNCOMMENT YOUR COMPONENTS (ONE BY ONE) AFTER YOU SEE "LAYOUT IS WORKING!"
      
    
      */}
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  // 🔑 scrollView: REQUIRED to make the ScrollView take up the entire screen space.
  scrollView: {
    flex: 1, 
    backgroundColor: '#fff',
    // Adds space above content for the status bar on Android devices.
    paddingTop: Platform.OS === 'android' ? 30 : 0, 
  },
  
  // contentContainer: Styles the view that wraps all components inside the ScrollView.
  contentContainer: {
    // Centers content horizontally.
    alignItems: 'center', 
    // Adds space at the very bottom so the last item is not obscured.
    paddingBottom: 50, 
    // If your content is shorter than the screen, setting flexGrow: 1 can help fill the space.
    flexGrow: 1, 
  },
  
  section: {
    marginVertical: 10,
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    alignItems: 'center',
  },

  testText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
    margin: 50,
  }
});