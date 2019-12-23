import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthActions } from '../../actions';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors } from '../../utils/Themes';
import SplashScreen from 'react-native-splash-screen';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  handleLogin() {
    let { username, password } = this.state
    console.log(username, password)
    this.props.login(username, password)
  }

  async componentDidUpdate(prevProps) {
    if (this.props.accessToken !== prevProps.accessToken) {
      await AsyncStorage.setItem('userToken', this.props.accessToken)
      this.props.navigation.navigate('HomeStack')
    }
  }

  render() {
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
              value={this.state.username}
              autoCompleteType={'username'}
              onChangeText={text => this.setState({ username: text })}
              autoCapitalize={'none'}
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
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              autoCapitalize={'none'}
            />
            <View style={styles.divider} />
          </View>
        </View>
        {this.props.error && <Text style={styles.error}>Username or password is incorrect</Text>}
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.handleLogin} disabled={this.props.loading}>
            <View style={styles.button}>
              {this.props.loading ? <ActivityIndicator color={Colors.easternBlue} size={'large'} /> : (
                <React.Fragment>
                  <Text style={styles.buttonText}>{'Get started'}</Text>
                  <Ionicons name={'ios-arrow-round-forward'} size={38} />
                </React.Fragment>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  accessToken: state.auth.accessToken,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(AuthActions.login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
