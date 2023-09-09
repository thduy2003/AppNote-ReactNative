import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './screens/AddScreen';
import MyNoteProvider from './context/MyNoteProvider';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyNoteProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </MyNoteProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
