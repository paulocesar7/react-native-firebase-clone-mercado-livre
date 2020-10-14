import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import NavIcon from 'react-native-vector-icons/AntDesign'

import styles from '../components/styles';
import mercadoPagoIcon from '../assets/mercado_pago.png'

var currentScreen = 0
export default function DrawerContent({navigation}) {
    const items = [
        {
            navOptionThumb: 'home',
            navOptionName: 'Home',
            screenToNavigate: 'Main',
        },
        {
            navOptionThumb: 'search1',
            navOptionName: 'Procurar',
            screenToNavigate: 'List',
        },
    ]
  return (
      <View style={localStyles.sideMenuContainer}>
        <View styles={{backgroundColor:"#ffe600"}}>
            <Text> Olá Paulo </Text>
            <Text> 2 pontos - Mercado ponto</Text>
            <View style={styles.mercado_pago}>
                <Image source={mercadoPagoIcon} />
                <Text style={styles.mercado_pago_text}>Mercado Pago</Text>
            </View>
        </View>
        <View
            style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
            }}
        />
        <View style={{width:"100%"}}>
            {
                items.map((item, key) =>(
                    <View style={{backgroundColor: currentScreen === key ? '#FFF589' : '#ffffff',...styles.drawer_content_items}}
                        key={key} >
                        <View style={styles.drawer_content_icon}>
                            <NavIcon name={item.navOptionThumb} size={25} color="#808080"/>
                        </View>
                        <Text onPress={() => {
                                currentScreen = key;
                                navigation.navigate(item.screenToNavigate)}}
                              color={currentScreen === key ? 'red' : 'black'}>
                            {item.navOptionName}
                        </Text>
                    </View>
                )
            )}
        </View>
    </View>
    );
}

const localStyles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20,
    },
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 150,
      height: 150,
      marginTop: 20,
      borderRadius: 150 / 2,
    },
  });