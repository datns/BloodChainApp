import React, { Component, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Modal from 'react-native-modal'

import styles from './style'
import { Colors } from '../../utils/Themes';

class ModalConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { onYesPress, onNoPress } = this.props;
    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackButtonPress={onNoPress}
        onBackdropPress={onNoPress}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <View style={styles.container}>
          <Text style={styles.title}>LOGOUT</Text>
          <Text style={styles.desc}>Are you sure to logout?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onYesPress}>
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onNoPress}>
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ModalConfirm;
