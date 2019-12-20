import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';


import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Timeline from 'react-native-timeline-flatlist'
import Modal from "react-native-modal";
import QRCode from 'react-native-qrcode-svg';

import moment from 'moment'

import { connect } from 'react-redux'

import {
  UserActions, BloodPackActions
} from '../../actions'

import ModalConfirm from '../../components/modal-confirm';


import styles from './styles';
import { Colors } from '../../utils/Themes';

import { generateInfoPack } from '../../utils/Helpers';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      showQRCode: false,
      showConfirm: false,
    };

    this.renderInfo = this.renderInfo.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this._renderItem = this._renderItem.bind(this)
    this.renderQRCode = this.renderQRCode.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleBloodPack = this.handleBloodPack.bind(this);
  }

  componentDidMount() {
    this.props.getBloodPacks(1)
  }

  async handleLogout() {
    try {
      await AsyncStorage.removeItem('userToken');
      this.props.navigation.navigate('AuthStack');
    }
    catch (err) {

    }
  }

  renderInfo(info, iconName) {
    return (
      <React.Fragment>
        <View style={styles.ovalView}>
          <FeatherIcon name={iconName} size={20} color={Colors.white} />
          <Text style={styles.infoText} >{info}</Text>
        </View>
      </React.Fragment>
    )
  }

  handleBloodPack(id) {
    this.props.getHistories(id)
    this.setState({ isVisible: true });
  }

  _renderItem({ item }) {
    return (
      // <React.Fragment>
      <TouchableOpacity style={styles.itemContainer} onPress={() => this.handleBloodPack(item._id)}>
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
        onBackButtonPress={() => this.setState({ isVisible: false })}
        onBackdropPress={() => this.setState({ isVisible: false })}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropTransitionOutTiming={0}
        style={{ padding: 5 }}
      >
        {this.props.transferFetching ? <ActivityIndicator color={Colors.easternBlue} size={'large'} /> : (
          <View style={styles.timelineStyle}>
            {this.props.histories.length === 0 ? (<Text style={{ textAlign: 'center' }}>No data</Text>) : (
              <Timeline
                // style={styles.timelineStyle}
                data={this.props.histories}
                circleSize={30}
                lineColor={Colors.blood}
                lineWidth={1.5}
                timeContainerStyle={{ minWidth: 52, maxWidth: 80 }}
                timeStyle={styles.timeText}
                titleStyle={styles.timelineTitle}
                descriptionStyle={styles.descriptionText}
                innerCircle={'icon'}
                onEventPress={this.onEventPress}
                detailContainerStyle={styles.detailContainerStyle}
                options={{
                  showsVerticalScrollIndicator: false
                }}
              />
            )}
          </View>
        )}
      </Modal>
    )
  }

  renderQRCode() {
    return (
      <Modal
        isVisible={this.state.showQRCode}
        onBackButtonPress={() => this.setState({ showQRCode: false })}
        onBackdropPress={() => this.setState({ showQRCode: false })}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <View style={styles.qrCodeContainer}>
          <QRCode value={this.props.user._id} size={200} />
        </View>
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
              {user.photo && user.photo.url ? (
                <Image source={{ uri: user.photo.url }} style={{ flex: 1 }} />
              ) : <View style={styles.noAvatarContainer}>
                  <MCIcon name={'face-recognition'} size={40} color={Colors.foggyGrey} />
                </View>}
            </View>
            <Text style={styles.nameText} >{`${user.firstName} ${user.lastName}`}</Text>
            <View style={styles.subInfo}>
              <Text style={styles.birthdayText}>{moment(user.birthday).format('DD/MM/YYYY')}</Text>
              <IonIcon
                name={isMale ? 'ios-male' : 'ios-female'}
                size={24}
                color={isMale ? Colors.dodgerBlue : Colors.strawberryPink} />
            </View>
            <View style={styles.actionButtonContainer}>
              <TouchableOpacity onPress={() => this.setState({ showQRCode: true })}>
                <FAIcon name={'qrcode'} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ showConfirm: true })}>
                <FAIcon name={'sign-out'} size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rightInfo}>
            {this.renderInfo(user.idCardNumber, 'credit-card')}
            {this.renderInfo(user.phone, 'phone')}
            {this.renderInfo(user.email, 'mail')}
            {this.renderInfo(user.address, 'home')}
          </View>
        </View>
        <View style={{ flex: 1.5 }}>
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
            ListEmptyComponent={<Text style={{ textAlign: 'center' }}>No data</Text>}
          />
        </View>
        {this.renderModal()}
        {this.renderQRCode()}
        <ModalConfirm
          isVisible={this.state.showConfirm}
          title={'LOGOUT'}
          description={'Are you sure to logout?'}
          onYesPress={this.handleLogout}
          onNoPress={() => this.setState({ showConfirm: false })}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  packs: state.bloodPack.bloodPacks,
  total: state.bloodPack.total,
  histories: state.bloodPack.transferHistories,
  transferFetching: state.bloodPack.transferFetching
})

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(UserActions.getUserInfo()),
  getBloodPacks: page => dispatch(BloodPackActions.getBloodPacks(page)),
  getHistories: id => dispatch(BloodPackActions.getTransferHistories(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
