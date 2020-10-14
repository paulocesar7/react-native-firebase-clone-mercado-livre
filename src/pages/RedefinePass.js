import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from './styles'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import defaultOptions from '../config/navigationOptions'

export default function RedefinePass (){
    return (
        <View style={styles.container_input} >
            <Image source={logo} />
            <TextInput
                name="user"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Email"
                />
            <TextInput
                name="password"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Senha"
                />
            <Button style="outline" >
                <Text>ENTRAR</Text>
            </Button>
            <TouchableOpacity>
                <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    )
}
RedefinePass.navigationOptions = {
    title: "Redefinir senha",
    ... defaultOptions
}