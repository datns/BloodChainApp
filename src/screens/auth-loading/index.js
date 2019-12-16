import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux'
import { AuthActions } from '../../actions';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('userToken', userToken)

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'HomeStack' : 'AuthStack');
    if (userToken) {
      this.props.relogin(userToken)
      this.props.navigation.navigate('HomeStack')
      return;
    }
    else {
      this.props.navigation.navigate('AuthStack')
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  relogin: (accessToken) => dispatch(AuthActions.relogin(accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading);
