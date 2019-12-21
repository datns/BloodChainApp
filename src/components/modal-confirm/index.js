import React, { Component, } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import Modal from 'react-native-modal'

import styles from './style'
import { Colors } from '../../utils/Themes';
import { TextInput } from 'react-native-gesture-handler';

class ModalConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      onYesPress,
      onNoPress,
      title,
      description,
      loading,
      voucher,
      ethereum,
      showResult,
    } = this.props;
    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackButtonPress={loading ? () => { } : onNoPress}
        onBackdropPress={loading ? () => { } : onNoPress}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        avoidKeyboard>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onYesPress} disabled={loading}>
              {loading ? <ActivityIndicator size={'small'} color={Colors.white} /> : (
                <Text style={styles.buttonText}>YES</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onNoPress} disabled={loading}>
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
          </View>
          {showResult && (<View style={styles.infoContainer}>
            {voucher && <React.Fragment>
              <Text style={styles.infoText}>{`Code:`}</Text>
              <Text style={styles.infoMetric}>{voucher}</Text>
            </React.Fragment>}
            {ethereum && <React.Fragment>
              <Text style={styles.infoText}>{`Transaction Id:`}</Text>
              <Text style={styles.infoMetric}>{ethereum}</Text>
            </React.Fragment>
            }
          </View>)}
        </View>
      </Modal>
    );
  }
}

export default ModalConfirm;
