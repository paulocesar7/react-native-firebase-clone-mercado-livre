import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import defaultOptions from '../config/navigationOptions'

import auth from '@react-native-firebase/auth';

export default function Login ({navigation}){
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [isAuthenticated, setAuth] = useState()

    async function handleSignin() {

        if (!user || !pass)
            return;

        await auth().signInWithEmailAndPassword(user, pass).then(() => {
            console.log('Autenticado com sucesso')
            setAuth(true)
            navigation.navigate('Index')
        }).catch( error => {
            Alert.alert('Ops', 'Usuário ou Senha Inválidos')

            console.log(error)
            setAuth(false)
        })
    }

    return (
        <View style={styles.container_input} >
            <Image source={logo} />
            <TextInput
                name="user"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={(text) => {setUser(text)}}
                />
            <TextInput
                name="password"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text) => {setPass(text)}}
                />
            <Button style="outline"
                    onPress={handleSignin}
                >
                <Text>ENTRAR</Text>
            </Button>
            <TouchableOpacity onPress={()=> navigation.navigate("RedefinePass")}>
                <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    )
}
Login.navigationOptions = {
    title: "Login",
    ... defaultOptions
}