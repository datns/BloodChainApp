import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'

import Timeline from 'react-native-timeline-flatlist'
import Modal from "react-native-modal";

import moment from 'moment'

import { connect } from 'react-redux'
import {
  UserActions, BloodPackActions
} from '../../actions'


import styles from './styles';
import { Colors } from '../../utils/Themes';

import { convertTranferHistories, generateInfoPack } from '../../utils/Helpers';

const HISTORY = [
  {
    description: "dat test",
    fromId: "5d1b0c33c6aa1d71acf7f3e8",
    fromName: "UIT",
    fromType: "BLOOD_CAMP",
    id: "5dc978be13d7ad43181cc885",
    toId: "5d1f0b850f2be14df8ec8d7d",
    toName: "Test Blood Test Center X",
    toType: "BLOOD_TEST_CENTER",
    transferType: 0,
    transferedAt: "2019-11-11T15:07:20.000Z",
  },
  {
    description: "dat test",
    fromId: "5d1f0b850f2be14df8ec8d7d",
    fromName: "Test Blood Test Center X",
    fromType: "BLOOD_TEST_CENTER",
    id: "5dc978be13d7ad43181cc885",
    toId: "5d1f1472bd12f83f30eec1c3",
    toName: "Test Blood Separation Center X",
    toType: "BLOOD_SEPARATION_CENTER",
    transferType: 0,
    transferedAt: "2019-11-11T15:11:19.000Z",
  },
  {
    description: "dat test",
    fromId: "5d1f1472bd12f83f30eec1c3",
    fromName: "Test Blood Separation Center X",
    fromType: "BLOOD_SEPARATION_CENTER",
    id: "5dc97ac013d7ad43181cc8a7",
    toId: "5d1f1ddeb61e7761e8a9f469",
    toName: "Test Blood Bank X",
    toType: "BLOOD_BANK",
    transferType: 1,
    transferedAt: "2019-11-11T15:14:44.000Z",
  },
  {
    description: "dat test",
    fromId: "5d1f1ddeb61e7761e8a9f469",
    fromName: "Test Blood Bank X",
    fromType: "BLOOD_BANK",
    id: "5dc97ac013d7ad43181cc8a7",
    toId: "5d1f4bbad8ffd05cb4a31f25",
    toName: "Test Hospital",
    toType: "HOSPITAL",
    transferType: 1,
    transferedAt: "2019-11-11T15:22:54.000Z",
  },
  {
    description: "dat test",
    fromId: "5d1f4bbad8ffd05cb4a31f25",
    fromName: "Test Hospital",
    fromType: "HOSPITAL",
    id: "5dc97ac013d7ad43181cc8a7",
    toId: "",
    toName: "Dat",
    toType: "",
    transferType: 2,
    transferedAt: "2019-11-11T15:23:36.000Z",
  }
]
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      data: [
        { time: '09:00', title: 'Archery Training Archery Training Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ' },
        { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
        { time: '12:00', title: 'Lunch' },
        { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ' },
        { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)' },
      ]
    };

    this.renderInfo = this.renderInfo.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this._renderItem = this._renderItem.bind(this)
  }

  componentDidMount() {
    // this.props.getUserInfo()
    this.props.getBloodPacks(1)
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

  _renderItem({ item }) {
    return (
      // <React.Fragment>
      <TouchableOpacity style={styles.itemContainer} onPress={() => this.setState({ isVisible: true })}>
        <View style={styles.bloodPackView}>
          <View style={styles.bloodPackHeader} />
          <View style={styles.bloodTypeView}>
            <Text style={styles.bloodTypeText}>{`${item.volume}\tml`}</Text>
          </View>
        </View>
        <View style={styles.bloodPackInfo}>
          <Text style={styles.bloodCampName}>{item.bloodCamp.name}</Text>
          <Text style={styles.infoPackText}>{
            generateInfoPack(item)
          }
          </Text>
        </View>
      </TouchableOpacity>
      // </React.Fragment>
    )
  }

  renderModal() {
    return (
      <Modal
        isVisible={this.state.isVisible}
        // onBackdropPress={() => this.setState({ isVisible: false })}
        onBackButtonPress={() => this.setState({ isVisible: false })}
        onBackdropPress={() => this.setState({ isVisible: false })}
      >

        <Timeline
          style={styles.timelineStyle}
          data={convertTranferHistories(HISTORY)}
          circleSize={30}
          // circleColor='rgb(45,156,219)'
          lineColor={Colors.blood}
          lineWidth={1.5}
          timeContainerStyle={{ minWidth: 52, maxWidth: 80 }}
          timeStyle={styles.timeText}
          descriptionStyle={styles.descriptionText}
          // options={{
          //   style: { paddingTop: 5 }
          // }}
          innerCircle={'icon'}
          onEventPress={this.onEventPress}
          detailContainerStyle={styles.detailContainerStyle}
        />
      </Modal>
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
        <View style={{ flex: 1.3 }}>
          <View style={styles.titleHistoryView}>
            <Text style={styles.titleHistory}>{`Donation History`}</Text>
            {/* <View style={styles.timeView}> */}
            <Text style={styles.timesText}>{`${this.props.total} times`}</Text>
            {/* </View> */}
          </View>
          <FlatList
            data={this.props.packs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          />
        </View>
        {this.renderModal()}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  packs: state.bloodPack.bloodPacks,
  total: state.bloodPack.total
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(UserActions.getUserInfo()),
  getBloodPacks: page => dispatch(BloodPackActions.getBloodPacks(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
