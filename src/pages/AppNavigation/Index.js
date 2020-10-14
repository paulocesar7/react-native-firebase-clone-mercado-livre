import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native'
import Routes from './Routes'
import defaultOptions from '../../config/navigationOptions'
import SearchBarHeader from '../../components/SearchBarHeader'

import Hamburger from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Index extends Component{

    static navigationOptions = ({navigation}) => ({
        title: "Mercado Livre",
        headerTitle: ()=> ( <SearchBarHeader/> ),
        headerLeft:()=> (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={()=>navigation.navigate('DrawerToggle')}
                    title="Info"
                >
                <Hamburger name="align-left" size={24} color="black" />
            </TouchableOpacity>
        ),
        headerRight:()=> (
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => Alert.alert("Ops", "O Carrinho ainda está vazio")}
                    title="Info"
                >
                <EvilIcons name="cart" size={24} color="#0D0D0D" />
            </TouchableOpacity>
        ),
        ... defaultOptions
    });

    render() {    
        return(
            <Routes/>
        )
    }
};