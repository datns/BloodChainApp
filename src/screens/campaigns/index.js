import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { FlatList } from 'react-navigation'
import { connect } from 'react-redux'
import Modalize from 'react-native-modalize'
import Icon from 'react-native-vector-icons/Feather'
import _ from 'lodash'

import {
  CampaignActions,
} from '../../actions';

import moment from 'moment';

import ModalDetail from '../../components/modal-detail';
import styles from './styles';
import { Colors } from '../../utils/Themes';

class CampaignsScreen extends Component {
  modal = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      item: {},
      searchText: '',
      page: 1
    };
    this.handleDetail = this.handleDetail.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onPressLocation = this.onPressLocation.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeTextDelayed = _.debounce(this.onChangeText, 200);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.props.getCampaigns(this.state.page);
  }

  renderItem({ item }) {
    const { bloodCamp, description, startDate, endDate, photos, name } = item;
    const isExpired = moment().isAfter(endDate);
    const isInProgress = moment().isBetween(startDate, endDate)
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{'Name'}</Text>
        <Text style={styles.content}>{name}</Text>
        <Text style={styles.title}>{'Location'}</Text>
        <Text style={styles.content}>{bloodCamp.name}</Text>
        <Text style={styles.title}>{'Time'}</Text>
        <Text style={styles.content}>{`${moment(startDate).format('DD.MM.YYYY')} - ${moment(endDate).format('DD.MM.YYYY')}`}</Text>
        <Text style={styles.statusText}>{isExpired ? 'Finished' : isInProgress ? 'Happenning' : 'Upcoming'}</Text>
        <TouchableOpacity onPress={() => this.handleDetail(item)} style={styles.detailButton}>
          <Text style={styles.detailText}>{'DETAIL'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleDetail(item) {
    this.setState({ item });
    if (this.modal.current) {
      this.modal.current.open();
    }
  }

  renderSeparator() {
    return (
      <View style={{ backgroundColor: 'white', height: 15, width: '100%' }}></View>
    )
  }

  onPressLocation() {
    this.props.navigation.navigate('Details', { location: this.state.item.bloodCamp });
  }

  onChangeText(searchText) {
    this.setState({ searchText });
    this.props.getCampaignsByName(searchText)
  }

  handleLoadMore() {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }),
      () => this.props.getCampaigns(this.state.page));
  }

  handleRefresh() {
    this.setState((prevState) => ({
      page: 1
    }),
      () => this.props.getCampaigns(this.state.page)
    )
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.page !== this.state.page)
  //     this.props.getCampaigns(this.state.page)
  // }

  render() {
    const modalHeight = Dimensions.get('window').height * 0.5;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CAMPAIGN</Text>
          <View style={styles.inputView}>
            <TextInput
              value={this.state.searchText}
              onChangeText={this.onChangeText}
              style={styles.searchInput}
              autoCompleteType={'name'}
              autoCapitalize={'none'}
              placeholder={'Search campaign\'s name'}
              placeholderTextColor={Colors.foggyGrey}
            />
            <View style={styles.iconView}>
              <Icon name={'search'} size={22} color={Colors.white} />
            </View>
          </View>
        </View>
        <FlatList
          data={this.state.searchText === '' ? this.props.campaigns : this.props.searchCampaigns}
          renderItem={this.renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
          refreshing={this.props.fetching}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.01}
        />
        <Modalize
          ref={this.modal}
          modalHeight={modalHeight}
          scrollViewProps={{
            showsVerticalScrollIndicator: false,
          }}

        >
          <ModalDetail item={this.state.item} handlePressLocation={this.onPressLocation} />
        </Modalize>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaign.campaigns,
  searchCampaigns: state.campaign.searchCampaigns,
  fetching: state.campaign.fetching
})

const mapDispatchToProps = dispatch => ({
  getCampaigns: (page) => dispatch(CampaignActions.getCampaigns(page)),
  getCampaignsByName: (name) => dispatch(CampaignActions.getCampaignsByName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsScreen);
