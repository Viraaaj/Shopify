import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import {v4 as uuid} from 'uuid'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

 
const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Coffee' },
    {id: uuid(), text: 'Bread' },
    {id: uuid(), text: 'Biscuit' },
    {id: uuid(), text: 'Coke' },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  // const addItem = text => {
  //   if(!text){
  //     Alert.alert('Error', 'Item cannot be empty', {text: 'Ok'});
  //   } else {
  //     setItems(prevItems => {
  //       return [{id: uuid(), text}, ...prevItems];
  //     });
  //   }
  // };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Item cannot be empty! Please enter an item',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  };


  return (
    <View style={styles.container}>

      <Header />

      <AddItem addItem={addItem} />

      <FlatList 
      data={items} 
      renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} />} 
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;