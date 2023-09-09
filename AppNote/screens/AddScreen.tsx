import React from 'react';
import Header from './components/Header';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const AddScreen = ({navigation}: any) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Header icon="close" title="Thêm mới" />
      </TouchableOpacity>
      {/* click ra ngoài thì tự động mất thằng keyboard */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{padding: 30}}>
          <View>
            <TextInput style={styles.title_input} placeholder="Tiêu đề" />
          </View>
          <View
            style={{
              marginTop: 30,
              height: 300,
              borderRadius: 10,
              borderWidth: 1,
            }}>
            <TextInput multiline={true} placeholder="Tiêu đề" />
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: 'green',
              padding: 15,
              marginTop: 30,
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
const styles = StyleSheet.create({
  title_input: {
    borderWidth: 1,
    borderRadius: 10,
  },
  content_input: {
    borderWidth: 1,
  },
});
export default AddScreen;
