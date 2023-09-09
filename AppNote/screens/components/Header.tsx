/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
type HeaderProps = {
  icon: string;
  title: string;
};
const Header = ({title, icon}: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'gray',
      }}>
      <Icon name={icon} size={30} color="#fff" />
      <Text
        style={{fontWeight: 'bold', textTransform: 'uppercase', color: '#fff'}}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
