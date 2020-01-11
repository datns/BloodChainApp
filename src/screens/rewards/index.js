import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, TextInput, RefreshControl } from 'react-native';
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
import GoldSvg from '../../images/gold.svg';
import SilverSvg from '../../images/silver.svg';
import BronzeSvg from '../../images/bronze.svg';

import { Colors, Fonts } from '../../utils/Themes';
import { RewardActions, UserActions } from '../../actions';
import ModalConfirm from '../../components/modal-confirm';
import ModalPointDetail from '../../components/modal-point-detail';
import I18n from '../../utils/I18n';
class Rewards extends Component {
  modalVoucher = React.createRef();
  modalEthereum = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false,
      selectedVoucher: {},
      showConfirmEthereum: false,
      selectedPlan: {},
      showResult: false,
      address: '',
      showDetail: false,
      selectedItem: {}
    };

    this.handleSelectReward = this.handleSelectReward.bind(this);
    this.handleSelectEthereum = this.handleSelectEthereum.bind(this);
    this.renderVoucherCard = this.renderVoucherCard.bind(this);
    this.renderEthereumPlan = this.renderEthereumPlan.bind(this);
    this.requestRedeemVoucher = this.requestRedeemVoucher.bind(this);
    this.requestRedeemEthereum = this.requestRedeemEthereum.bind(this);
    this.handleRedeemVoucher = this.handleRedeemVoucher.bind(this);
    this.handleRedeemEthereum = this.handleRedeemEthereum.bind(this);
    this.handleShowDetail = this.handleShowDetail.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    this.props.getVouchers();
    this.props.getEthereums();
    this.props.getPoint();
    this.props.getPointHistories();
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.redeemedVoucher !== this.props.redeemedVoucher
      || prevProps.redeemedEthereum !== this.props.redeemedEthereum)
      this.setState({ showResult: true })
  }

  renderHeaderReward() {
    return (
      <View style={styles.headerReward}>
        <Text style={styles.headerRewardText}>{I18n.t('reward.header')}</Text>
      </View>
    )
  }

  renderVoucher(vouchers) {
    return (
      <View>
        <FlatList
          key={'voucher'}
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

  renderEthereum(plans) {
    return (
      <View>
        <TextInput
          value={this.state.address}
          onChangeText={text => this.setState({ address: text })}
          style={styles.addressInput}
          placeholder={I18n.t('reward.ethereumHolder')}
        />
        <FlatList
          key={'ethereum'}
          data={plans}
          renderItem={this.renderEthereumPlan}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}
          style={{ marginTop: 10 }}
          scrollEnabled={false}
        />
      </View>
    )
  }

  renderVoucherCard({ item }) {
    const isUnavailable = this.props.point < item.point || item.quantity <= 0;
    const backgroundButton = { backgroundColor: isUnavailable ? Colors.darkGray : Colors.dodgerBlue }
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
          <Text style={styles.voucherDesc}>{I18n.t('reward.voucherCost')}<Text style={{ fontFamily: Fonts.bold, color: 'red' }}>{`${item.point} ${I18n.t('reward.points')}`}</Text></Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.voucherDesc}>{I18n.t('reward.remain')}<Text style={styles.voucherQuantity}>{item.quantity}</Text>{I18n.t('reward.voucher')}</Text>
            <TouchableOpacity style={[styles.redeemButton, backgroundButton]} onPress={() => this.requestRedeemVoucher(item)} disabled={isUnavailable}>
              <Text style={styles.redeemText}>{I18n.t('reward.redeem')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  renderEthereumPlan({ item }) {
    const isUnavailable = this.props.point < item.point || !this.isValidAddress(this.state.address);
    const backgroundButton = { backgroundColor: isUnavailable ? Colors.darkGray : Colors.dodgerBlue }
    return (
      <View style={styles.voucherCardContainer}>
        <View style={styles.imageContainer}>
          {item.name == 'GOLD' ? <GoldSvg width={100} height={80} /> : item.name == 'SILVER' ? <SilverSvg width={100} height={80} /> : <BronzeSvg width={100} height={80} />}
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
          <Text style={styles.voucherDesc}><Text style={styles.voucherQuantity}>{item.eth}</Text> ETH</Text>
          <Text style={styles.voucherDesc}>{I18n.t('reward.planCost')}<Text style={{ fontFamily: Fonts.bold, color: 'red' }}>{`${item.point} ${I18n.t('reward.points')}`}</Text></Text>
          <TouchableOpacity style={[styles.redeemButton, backgroundButton]} disabled={isUnavailable} onPress={() => this.requestRedeemEthereum(item)}>
            <Text style={styles.redeemText}>{I18n.t('reward.redeem')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  handleSelectReward() {
    if (this.modalVoucher.current) {
      this.modalVoucher.current.open();
    }
  }

  handleSelectEthereum() {
    if (this.modalEthereum.current) {
      this.modalEthereum.current.open();
    }
  }

  requestRedeemVoucher(selectedVoucher) {
    this.setState({ showConfirm: true, selectedVoucher })
  }

  requestRedeemEthereum(selectedPlan) {
    this.setState({ showConfirmEthereum: true, selectedPlan })
  }

  handleRedeemVoucher() {
    this.props.redeemVoucher(this.state.selectedVoucher._id);
    // this.setState({ showConfirm: false })
  }

  handleRedeemEthereum() {
    this.props.redeemEthereum(this.state.selectedPlan.name, this.state.address);
    // this.setState({ showConfirmEthereum: false })
  }

  handleShowDetail(selectedItem) {
    this.setState({ selectedItem, showDetail: true })
  }

  _renderItem({ item }) {
    let background = '';
    let name = '';
    let colorPoint = '';
    let title = '';
    if (item.descriptionType === 'Donate Blood') {
      background = Colors.rose;
      name = 'burn';
      colorPoint = 'green';
      title = I18n.t('reward.donateBlood')
    }
    else if (item.descriptionType === 'Redeem Voucher') {
      background = Colors.green;
      name = 'shopping-cart';
      colorPoint = 'red';
      title = I18n.t('reward.redeemVoucher')
    }
    else if (item.descriptionType === 'Redeem Ethereum') {
      background = Colors.blue;
      name = 'ethereum';
      colorPoint = 'red';
      title = I18n.t('reward.redeemEthereum')
    }

    const pointStyle = [styles.descriptionType, { textAlign: 'right', color: colorPoint }];
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => this.handleShowDetail(item)} disabled={item.descriptionType === 'Donate Blood'}>
        <View style={styles.left}>
          <View style={[styles.iconContainer, { backgroundColor: background }]}>
            <Icon name={name} size={15} color={Colors.white} />
          </View>
          <View>
            <Text style={styles.descriptionType}>{title}</Text>
            <Text style={styles.time}>{moment(item.updatedAt).format('DD/MM/YYYY  h:mm:ss a')}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={pointStyle}>{item.updatePointType === 0 ? `+ ` : `- `}{item.amount}</Text>
          <Text style={[styles.time, { textAlign: 'right' }]}>{item.ethAmount || item.rewardName || ''}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  isValidAddress(address) {
    return address.length === 42
  }

  render() {
    const modalHeight = Dimensions.get('window').height * 0.55;
    const title = this.state.selectedItem.descriptionType === 'Donate Blood' ? I18n.t('reward.donateBlood') : this.state.selectedItem.descriptionType === 'Redeem Voucher' ? I18n.t('reward.redeemVoucher') : I18n.t('reward.redeemEthereum')
    return (
      <React.Fragment>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={this.props.historiesFetching} onRefresh={this.loadData} />}
        >
          <View style={styles.header}>
            {/* <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: 'white' }}></View> */}
            <Text style={styles.point}>{`${this.props.point} ${(I18n.t('reward.points')).toLowerCase()}`} </Text>
          </View>
          <View style={styles.introCard}>
            <View>
              <Text style={styles.action}>{I18n.t('reward.action1')}</Text>
              <View style={styles.divider} />
              <Text style={styles.benefit}>{I18n.t('reward.benefit1')}</Text>
            </View>
            <GetPointsSvg width={120} height={120} />
          </View>
          <View style={styles.introCard}>
            <SelectRewardsSvg width={120} height={120} />
            <View>
              <Text style={[styles.action, { textAlign: 'right' }]}>{I18n.t('reward.action2')}</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <View style={styles.divider} />
              </View>
              <Text style={[styles.benefit, { textAlign: 'right' }]}>{I18n.t('reward.benefit2')}</Text>
            </View>
          </View>
          <View style={styles.category}>
            <TouchableOpacity style={[styles.typeCard, { marginRight: 15 }]} onPress={this.handleSelectReward}>
              <Text style={styles.type}>{I18n.t('reward.vouchers')}</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <VouchersSvg height={80} width={80} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.typeCard} onPress={this.handleSelectEthereum}>
              <Text style={styles.type}>Ethereum</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <EthereumSvg height={80} width={80} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleHistory}>{I18n.t('reward.history')}</Text>
          <FlatList
            data={this.props.pointHistories}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => (<View style={styles.dividerHistory} />)}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            ListEmptyComponent={<Text style={{ textAlign: 'center' }}>{I18n.t('profile.noData')}</Text>}
          />
          <ModalConfirm
            isVisible={this.state.showConfirm}
            title={I18n.t('reward.confirm')}
            description={`${I18n.t('reward.textConfirm')} ${this.state.selectedVoucher.name}?`}
            onYesPress={this.handleRedeemVoucher}
            onNoPress={() => this.setState({ showConfirm: false, showResult: false })}
            loading={this.props.redeemVoucherFetching}
            voucher={this.props.redeemedVoucher && this.props.redeemedVoucher.code}
            showResult={this.state.showResult}
          />
          <ModalConfirm
            address={this.state.address}
            isVisible={this.state.showConfirmEthereum}
            title={I18n.t('reward.confirm')}
            description={`${I18n.t('reward.textConfirm')} ${this.state.selectedPlan.name}?`}
            onYesPress={this.handleRedeemEthereum}
            onNoPress={() => this.setState({ showConfirmEthereum: false, showResult: false })}
            loading={this.props.redeemEthereumFetching}
            ethereum={this.props.redeemedEthereum && this.props.redeemedEthereum.transactionId}
            showResult={this.state.showResult}
          />
          <ModalPointDetail
            isVisible={this.state.showDetail}
            title={title}
            rewardName={this.state.selectedItem.rewardName}
            code={this.state.selectedItem.code}
            address={this.state.selectedItem.ethAddress}
            amount={this.state.selectedItem.ethAmount}
            transactionId={this.state.selectedItem.transactionId}
            onClose={() => this.setState({ showDetail: false })}
          />
        </ScrollView>
        <Modalize
          ref={this.modalVoucher}
          modalHeight={modalHeight}
          HeaderComponent={this.renderHeaderReward}
          scrollViewProps={{
            showsVerticalScrollIndicator: false
          }}
        >
          {this.renderVoucher(this.props.vouchers)}
        </Modalize>
        <Modalize
          ref={this.modalEthereum}
          modalHeight={modalHeight}
          HeaderComponent={this.renderHeaderReward}
          scrollViewProps={{
            showsVerticalScrollIndicator: false
          }}
        >
          {this.renderEthereum(this.props.ethereums)}
        </Modalize>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  vouchers: state.reward.vouchers,
  ethereums: state.reward.ethereums,
  point: state.user.point,
  pointHistories: state.user.pointHistories,
  redeemVoucherFetching: state.reward.redeemVoucherFetching,
  redeemEthereumFetching: state.reward.redeemEthereumFetching,
  redeemedVoucher: state.reward.redeemedVoucher,
  redeemedEthereum: state.reward.redeemedEthereum,
  historiesFetching: state.user.historiesFetching
});

const mapDispatchToProps = dispatch => ({
  getVouchers: () => dispatch(RewardActions.getVouchers()),
  getEthereums: () => dispatch(RewardActions.getEthereums()),
  getPoint: () => dispatch(UserActions.getUserPoint()),
  getPointHistories: () => dispatch(UserActions.getPointHistories()),
  redeemVoucher: (id) => dispatch(RewardActions.redeemVoucher(id)),
  redeemEthereum: (planName, address) => dispatch(RewardActions.redeemEthereum(planName, address))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
