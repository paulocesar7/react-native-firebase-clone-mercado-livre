import React from 'react';
import { Text, ScrollView, Image, TouchableOpacity, SafeAreaView, FlatList, View } from 'react-native';

import styles from './styles'

const listProduct = [
    {
        id:'1',
        name: 'TV',
        price: 1250.27,
        condition: 'Novo',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'2',
        name: 'TV',
        price: 1250.27,
        condition: 'Novo',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'3',
        name:'TV',
        price: 1250.27,
        condition: 'Novo',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'4',
        name:'Microondas',
        price: 499.70,
        condition: 'Usado',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'5',
        name:'Microondas',
        price: 499.70,
        condition: 'Usado',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'6',
        name:'Microondas',
        price: 499.70,
        condition: 'Usado',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'7',
        name:'Microondas',
        price: 499.70,
        condition: 'Usado',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    },
    {
        id:'8',
        name:'Microondas',
        price: 499.70,
        condition: 'Usado',
        picture: 'https://novomundo.vtexassets.com/arquivos/ids/2175441-500-500'
    }
]

function Item({item}) {
    return (
        <TouchableOpacity style={styles.item}>
            <Image style={styles.picture}
                   source={{uri: item.picture}}/>
            <View style={styles.title}>
                <Text style={styles.item_title}>
                    Nome: {item.name}
                </Text>
                <Text style={styles.item_price}>
                    Preço: {item.price}
                </Text>
                <Text style={styles.item_subdivision}>
                    Condição: {item.condition}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default function List() {

    return (
        <>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={listProduct}
                    renderItem={({item})=> <Item item={item} />}
                    keyExtractor={(item) => item.id}
                >
                </FlatList>
            </SafeAreaView>
        </>
    )
}