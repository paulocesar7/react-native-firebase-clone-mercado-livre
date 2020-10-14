import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function Button(props) {
  return (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={props.style == "outline" ? 
            styles.botao_outline_primary : 
            styles.botao_primary} >
        <Text >{props.children}</Text>
    </TouchableOpacity>
  )
}