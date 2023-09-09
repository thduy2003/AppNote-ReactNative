import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from './components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = ({navigation}: any) => {
  return (
    <>
      <Header title="my note" icon="bars" />
      <View style={{padding: 15, marginTop: 30}}>
        <View style={{backgroundColor: 'pink', padding: 20, borderRadius: 10}}>
          <Text style={{fontWeight: 'bold', marginBottom: 15}}>Title Note</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            vero nulla non nostrum magni, natus perspiciatis modi quam?
          </Text>
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
export default HomeScreen;
