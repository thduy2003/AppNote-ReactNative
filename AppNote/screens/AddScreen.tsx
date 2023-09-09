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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNotesContext} from '../context/MyNoteProvider';
const AddScreen = ({navigation}: any) => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const {notes, setNotes} = useNotesContext();
  const save = async () => {
    let formData = {
      title,
      content,
      time: Date.now(),
    };
    const pushNotes = [...notes, formData];
    setNotes(pushNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(pushNotes));
    navigation.navigate('Home');
  };
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Header icon="close" title="Thêm mới" />
      </TouchableOpacity>
      {/* click ra ngoài thì tự động mất thằng keyboard */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{padding: 30}}>
          <View>
            <TextInput
              onChangeText={value => setTitle(value)}
              style={styles.title_input}
              placeholder="Tiêu đề"
            />
          </View>
          <View
            style={{
              marginTop: 30,
              height: 300,
              borderRadius: 10,
              borderWidth: 1,
            }}>
            <TextInput
              onChangeText={value => setContent(value)}
              multiline={true}
              placeholder="Nội dung"
            />
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: 'green',
              padding: 15,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={save}>
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
