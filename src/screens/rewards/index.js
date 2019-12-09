import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-navigation'
import Modalize from 'react-native-modalize';

import styles from './styles';
import GetPointsSvg from '../../images/undraw_deliveries_131a.svg';
import SelectRewardsSvg from '../../images/undraw_selecting_1lx3.svg';
import VouchersSvg from '../../images/undraw_gift_box_byy3.svg';
import EthereumSvg from '../../images/ethereum.svg';
import { Colors, Fonts } from '../../utils/Themes';
import { RewardActions } from '../../actions';

const MOCK_DATA = [
  {
    updatePointType: 0,
    amount: 1000,
    updatedAt: '2019-12-04T14:19:54.000Z',
    descriptionType: 'Donate Blood',
    bloodPackId: '5de7c08720899006e423ec44'
  },
  {
    updatePointType: 0,
    amount: 1000,
    updatedAt: '2019-12-04T15:08:54.000Z',
    descriptionType: 'Donate Blood',
    bloodPackId: '5de7c08720899006e423ec44'
  },
  {
    updatePointType: 1,
    amount: 100,
    updatedAt: '2019-12-04T15:17:17.000Z',
    descriptionType: 'Redeem Voucher',
    rewardId: '5de7c08720899006e423ec44',
    rewardName: 'Test 3',
    code: 'BBB'
  },
  {
    updatePointType: 1,
    amount: 100,
    updatedAt: '2019-12-04T15:21:58.000Z',
    descriptionType: 'Redeem Ethereum',
    ethAddress: '0xd1FECeEBD23fcB2B360c354Dc46B154B0a6880F',
    ethAmount: 0.05,
    transactionId: '0xb30a2ad38db290972a39c71f0dc6fa78b85f74357bda231f022177ecdecab8ee'
  }
]

class Rewards extends Component {
  modal = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSelectReward = this.handleSelectReward.bind(this);
  }

  componentDidMount() {
    this.props.getVouchers();
    this.props.getEthereums();
  }

  renderHeaderReward() {
    return (
      <View style={styles.headerReward}>
        <Text style={styles.headerRewardText}>Choose reward you want</Text>
      </View>
    )
  }

  renderReward(vouchers) {
    return (
      <View>
        <FlatList
          data={vouchers}
          renderItem={this.renderVoucherCard}
          keyExtractor={item => item._id}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
          style={{ marginTop: 40 }}
          scrollEnabled={false}
        />
      </View>
    )
  }

  renderVoucherCard({ item }) {
    return (
      <View style={styles.voucherCardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.photos[0].url }} style={{ width: '100%', height: 80 }} />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <View style={styles.dividerVoucher} />
          <View style={styles.dividerVoucher} />
          <View style={styles.dividerVoucher} />
          <View style={styles.dividerVoucher} />
          <View style={[styles.dividerVoucher, { height: 2 }]} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.voucherName}>
            {item.name.toUpperCase()}
          </Text>
          <Text style={styles.voucherDesc}>{item.description}</Text>
          <Text style={styles.voucherDesc}>{`Voucher cost `}<Text style={{ fontFamily: Fonts.bold, color: 'red' }}>{`${item.point} POINTS`}</Text></Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.voucherDesc}>Remain <Text style={styles.voucherQuantity}>{item.quantity}</Text> voucher(s)</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemText}>Redeem</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  handleSelectReward() {
    if (this.modal.current) {
      this.modal.current.open();
    }
  }

  _renderItem({ item }) {
    let background = '';
    let name = '';
    let colorPoint = '';
    if (item.descriptionType === 'Donate Blood') {
      background = Colors.rose;
      name = 'burn';
      colorPoint = 'green'
    }
    else if (item.descriptionType === 'Redeem Voucher') {
      background = Colors.green;
      name = 'shopping-cart';
      colorPoint = 'red'
    }
    else if (item.descriptionType === 'Redeem Ethereum') {
      background = Colors.blue;
      name = 'ethereum';
      colorPoint = 'red'
    }

    const pointStyle = [styles.descriptionType, { textAlign: 'right', color: colorPoint }];
    return (
      <View style={styles.itemContainer}>
        <View style={styles.left}>
          <View style={[styles.iconContainer, { backgroundColor: background }]}>
            <Icon name={name} size={15} color={Colors.white} />
          </View>
          <View>
            <Text style={styles.descriptionType}>{item.descriptionType}</Text>
            <Text style={styles.time}>{moment(item.updatedAt).format('DD/MM/YYYY  h:mm:ss a')}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={pointStyle}>{item.updatePointType === 0 ? `+ ` : `- `}{item.amount}</Text>
          <Text style={[styles.time, { textAlign: 'right' }]}>{item.ethAmount || item.rewardName || ''}</Text>
        </View>
      </View>
    )
  }

  render() {
    const modalHeight = Dimensions.get('window').height * 0.6;

    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            {/* <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white' }}></View> */}
            <Text style={styles.point}>1500 points</Text>
          </View>
          <View style={styles.introCard}>
            <View>
              <Text style={styles.action}>Donate your blood</Text>
              <View style={styles.divider} />
              <Text style={styles.benefit}>Get reward points</Text>
            </View>
            <GetPointsSvg width={120} height={120} />
          </View>
          <View style={styles.introCard}>
            <SelectRewardsSvg width={120} height={120} />
            <View>
              <Text style={[styles.action, { textAlign: 'right' }]}>Select rewards</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.divider} />
              </View>
              <Text style={[styles.benefit, { textAlign: 'right' }]}>Vouchers or Ethereum</Text>
            </View>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={[styles.typeCard, { marginRight: 15 }]} onPress={this.handleSelectReward}>
              <Text style={styles.type}>Vouchers</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <VouchersSvg height={80} width={80} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeCard}>
              <Text style={styles.type}>Ethereum</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <EthereumSvg height={80} width={80} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleHistory}>Point History</Text>
          <FlatList
            data={MOCK_DATA}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => (<View style={styles.dividerHistory} />)}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </ScrollView>
        <Modalize
          ref={this.modal}
          modalHeight={modalHeight}
          HeaderComponent={this.renderHeaderReward}
          scrollViewProps={{
            showsVerticalScrollIndicator: false
          }}
        >
          {this.renderReward(this.props.vouchers)}
        </Modalize>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  vouchers: state.reward.vouchers,
  ethereums: state.reward.ethereums
});

const mapDispatchToProps = dispatch => ({
  getVouchers: () => dispatch(RewardActions.getVouchers()),
  getEthereums: () => dispatch(RewardActions.getEthereums()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
