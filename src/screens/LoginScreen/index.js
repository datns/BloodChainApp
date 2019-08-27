import React, { Component, Fragment } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Icon name='drop' size={60} color='#D61B1F' />
          <Text> Welcome </Text>
          <Text> sign in to continue </Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
