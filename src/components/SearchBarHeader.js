import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

import Search from 'react-native-vector-icons/EvilIcons'

export default function SearchBarHeader() {
  return (
    <View style={styles.input_search}>
        <Search
            name="search"
            size={30}
            color='#CDCDCD'
            style={{marginRight:5, paddingTop:10}}
        />
        <TextInput 
            placeholder='Buscar no Mercado Livre'
            />
    </View>
    )
}