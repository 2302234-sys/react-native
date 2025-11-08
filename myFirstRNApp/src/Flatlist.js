import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
// Since you are using a standard Expo project, 
// SafeAreaView from 'react-native' is often sufficient, 
// and we remove the outer SafeAreaProvider which is not strictly necessary here.

// If you are using the SafeAreaView from the 'react-native-safe-area-context' package, 
// you can keep this import, but we will remove the styling that caused the conflict.
// import {SafeAreaView} from 'react-native-safe-area-context'; 

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  // Add more items here if you want to test scrolling within the fixed height
  { id: '4', title: 'Fourth Item' },
  { id: '5', title: 'Fifth Item' },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListExample = () => (
  // We use a regular View and apply a fixed height.
  <View style={styles.containerFixed}> 
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      // 💡 NOTE: The FlatList itself will handle scrolling if items overflow this 250px height.
    />
  </View>
);

const styles = StyleSheet.create({
  // 🔑 THE CRITICAL FIX: Use a fixed height instead of flex: 1
  containerFixed: { 
    height: 250, // **Adjust this height as needed!**
    width: '100%',
    borderWidth: 2,       // Optional: Add a border to confirm the visible area
    borderColor: 'blue',  // Optional: Add a border to confirm the visible area
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20, // Reduced font size slightly to fit the fixed height better
  },
});

export default FlatListExample;

// ⚠️ Final clean-up: Remove the unused imports from the original file:
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import {StatusBar} from 'react-native';