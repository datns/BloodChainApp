import React, { Component, Fragment } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { AuthActions } from '../../actions';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { Colors } from '../../utils/Themes';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.props.login('admin', 'password')
  }

  render() {
    console.log('loading', this.props.loading)
    console.log('token', this.props.accessToken)
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.greetingView}>
          <SimpleLineIcons name='drop' size={55} color={Colors.primary} />
          <Text style={styles.welcome}> Welcome, </Text>
          <Text style={styles.signIn}> sign in to continue </Text>
        </View>
        <View style={styles.inputView}>
          <View>
            <TextInput
              placeholder={'Username'}
              style={styles.input}
              placeholderTextColor={'#88a0a8'}
              underlineColorAndroid={'white'}
              selectionColor={Colors.accent}
            />
            <View style={styles.divider} />
          </View>
          <View>
            <TextInput
              placeholder={'Password'}
              style={styles.input}
              placeholderTextColor={'#88a0a8'}
              underlineColorAndroid={'white'}
              selectionColor={Colors.accent}
            />
            <View style={styles.divider} />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.handleLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{'Get started'}</Text>
              <Ionicons name={'ios-arrow-round-forward'} size={38} />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  accessToken: state.auth.accessToken
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(AuthActions.login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
