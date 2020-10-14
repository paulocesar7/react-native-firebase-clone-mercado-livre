import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles'
import logo from '../assets/logo.png'
import Button from '../components/Button'
import defaultOptions from '../config/navigationOptions'

import auth from '@react-native-firebase/auth';

export default function Signup (){
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [isAuthenticated, setAuth] = useState()

    async function handleSignup() {

        await auth().createUserWithEmailAndPassword(user, pass).then(() => {
            Alert.alert('Sucesso', 'Usuário criado com sucesso')
            
            console.log('Usuário criado com sucesso')
            setAuth(true)
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
                onChangeText={(text)=> setUser(text)}
                />
            <TextInput
                name="password"
                keyboardType="default"
                autoCapitalize="none"
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text)=> setPass(text)}
                />
            <Button style="outline"
                    onPress={handleSignup}
                >
                <Text>CRIAR CONTA</Text>
            </Button>
        </View>
    )
}
Signup.navigationOptions = {
    title: "Sign up",
    ... defaultOptions
}