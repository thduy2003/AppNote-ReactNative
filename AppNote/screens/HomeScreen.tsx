import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNotesContext} from '../context/MyNoteProvider';
import {ItemType} from './interfaces/item.type';
const HomeScreen = ({navigation}: any) => {
  const {notes, getNotes} = useNotesContext();
  const deleteItem = async (item: ItemType) => {
    let newData = notes.filter((e: ItemType) => e.time !== item.time);
    await AsyncStorage.setItem('notes', JSON.stringify(newData));
    //chạy lại để render lại ui sau khi xóa item
    getNotes();
  };
  return (
    <>
      <Header title="my note" icon="bars" />
      <View style={{padding: 15, marginTop: 30}}>
        <FlatList
          data={notes}
          renderItem={({item}) => (
            // truyền thêm object vô cái navigation đó để qua bên trang detail nhận được thông tin đó
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {item})}>
              <View
                style={{
                  backgroundColor: 'pink',
                  padding: 20,
                  borderRadius: 10,
                  marginTop: 30,
                }}>
                <Text style={{fontWeight: 'bold', marginBottom: 15}}>
                  {item.title}
                </Text>
                <Text>{item.content}</Text>
                <TouchableOpacity
                  onPress={() => deleteItem(item)}
                  style={{flexDirection: 'row-reverse'}}>
                  <Icon name="trash-o" size={30} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.btn_add}
        onPress={() => navigation.navigate('Add')}>
        <Icon name="edit" size={30} color="white" />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  btn_add: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});
export default HomeScreen;
