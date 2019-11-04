import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'

import moment from 'moment'

import { connect } from 'react-redux'
import {
  UserActions
} from '../../actions'


import styles from './styles';
import { Colors } from '../../utils/Themes';

const HISTORY = [
  {
    "transferType": 0,
    "id": "5dc04311450d201af477a9c7",
    "fromType": "BLOOD_CAMP",
    "fromId": "5d1b0c33c6aa1d71acf7f3e8",
    "fromName": "UIT",
    "toType": "BLOOD_TEST_CENTER",
    "toId": "5d1f0b850f2be14df8ec8d7d",
    "toName": "Test Blood Test Center X",
    "description": "fdsfsdfds",
    "transferedAt": "2019-11-04T15:26:30.000Z"
  }
]
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.renderInfo = this.renderInfo.bind(this)
  }

  componentDidMount() {
    // this.props.getUserInfo()
  }

  renderInfo(info, iconName) {
    return (
      <React.Fragment>
        <View style={styles.ovalView}>
          <FeatherIcon name={iconName} size={20} color={Colors.white} />
          <Text style={styles.infoText}>{info}</Text>
        </View>
      </React.Fragment>
    )
  }

  render() {
    const { user } = this.props;
    let isMale = user.gender === 'Male';
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../../images/profile_background.jpg')} style={styles.imageHeader} resizeMode={'cover'} />
        <View style={styles.infoView}>
          <View style={styles.leftInfo}>
            <View style={styles.avatar}>
              <Image source={{ uri: user.photo.url }} style={{ flex: 1 }} />
            </View>
            <Text style={styles.nameText} >{`${user.firstName} ${user.lastName}`}</Text>
            <View style={styles.subInfo}>
              <Text style={styles.birthdayText}>{moment(user.birthday).format('L')}</Text>
              <IonIcon
                name={isMale ? 'ios-male' : 'ios-female'}
                size={24}
                color={isMale ? Colors.dodgerBlue : Colors.strawberryPink} />
            </View>
          </View>
          <View style={styles.rightInfo}>
            {this.renderInfo(user.address, 'home')}
            {this.renderInfo(user.phone, 'phone')}
            {this.renderInfo(user.email, 'mail')}
          </View>
        </View>
        <View style={{ flex: 1 }}>

        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(UserActions.getUserInfo())
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
