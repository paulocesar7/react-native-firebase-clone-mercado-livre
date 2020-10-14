import React from 'react';
import { Text, ScrollView } from 'react-native';

import styles from '../styles'

export default function Main() {
    return (
        <ScrollView contentContainerStyle={styles.main_container}>
            <Text>Página Principal</Text>
        </ScrollView>
    )
}