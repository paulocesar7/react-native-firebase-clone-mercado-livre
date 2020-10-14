import React, { Component } from 'react';
import { View, Image, Text,  } from 'react-native'

import styles from './styles'
import logo from '../assets/logo.png'

import Button from '../components/Button'
import defaultOptions from '../config/navigationOptions'

export default class Home extends Component {

  static navigationOptions = {
    title: "Home",
    ... defaultOptions
  }

  handleLogin = () => {
    const {navigation} = this.props
    navigation.navigate("Login")
  }
  handleSignup = () => {
    const {navigation} = this.props
    navigation.navigate("Signup")
  }

  render() {
    return (
      <View style={styles.container}>
          <Image source={logo} />
          <Button style="outline"
                  onPress={ this.handleLogin }>
            <Text> ENTRAR </Text>
          </Button>
          <Button onPress={this.handleSignup}> 
            <Text style={styles.text_branco}> CRIAR CONTA </Text>
          </Button>
      </View>
    )
}
};
