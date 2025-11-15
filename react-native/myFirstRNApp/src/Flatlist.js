import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  { id: '1', title: 'First Item (List Body)' },
  { id: '5', title: 'Fifth Item (List Body)' },
  { id: '6', title: 'Sixth Item (List Body)' },
  { id: '7', title: 'Seventh Item (List Body)' },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListExample = ({ ListHeaderComponent }) => ( 
  <View style={styles.container}> 
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      
      ListHeaderComponent={ListHeaderComponent} 
    />
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20, 
  },
});

export default FlatListExample;