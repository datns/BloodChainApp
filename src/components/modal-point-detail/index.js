import React, { Component, } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import Modal from 'react-native-modal'

import styles from './styles'

class ModalPointDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderInfo(field, info) {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.field}>{field}</Text>
        <Text style={styles.desc}>{info}</Text>
      </View>
    )
  }

  render() {
    const {
      title,
      rewardName,
      code,
      address,
      amount,
      transactionId,
      onClose
    } = this.props;
    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        avoidKeyboard>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.desc}>{description}</Text> */}
          {rewardName &&
            this.renderInfo('Reward name: ', rewardName)
          }
          {code &&
            this.renderInfo('CODE: ', code)
          }
          {address && <React.Fragment>
            <Text style={styles.field}>{'Address: '}</Text>
            <Text style={styles.desc}>{address}</Text>
          </React.Fragment>}
          {amount && this.renderInfo('Amount: ', amount)}
          {transactionId && <React.Fragment>
            <Text style={styles.field}>{'Transaction ID: '}</Text>
            <Text style={styles.desc}>{transactionId}</Text>
          </React.Fragment>}
        </View>
      </Modal>
    );
  }
}

export default ModalPointDetail;
