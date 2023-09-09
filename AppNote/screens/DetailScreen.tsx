import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ItemType} from './interfaces/item.type';

const DetailScreen = ({route, navigation}: any) => {
  const {item}: {item: ItemType} = route.params;
  const convertTime = (time: number) => {
    let date = new Date(time);
    return `Ngày ${date.getDate()} tháng ${
      date.getMonth() + 1
    } năm ${date.getFullYear()}`;
  };
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Header icon="close" title="Chi tiết" />
      </TouchableOpacity>
      <View style={{padding: 15, marginTop: 30}}>
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
          <Text style={{paddingTop: 15}}>
            Ngày tạo: {convertTime(item.time)}
          </Text>
          <TouchableOpacity style={{flexDirection: 'row-reverse'}}>
            <Icon name="trash-o" size={30} />
          </TouchableOpacity>
        </View>
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
export default DetailScreen;
