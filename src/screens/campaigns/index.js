import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux'
import {
  CampaignActions,
  BloodCampActions,
  BloodBankActions,
  BloodSeparationActions,
  BloodTestActions,
  HospitalActions
} from '../../actions';

import moment from 'moment';

import styles from './styles';

class CampaignsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getCampaigns();
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
        <Text style={styles.statusText}>{isExpired ? 'Expired' : isInProgress ? 'In Progress' : 'Prepared'}</Text>
        <Text style={styles.detailText}>{'DETAIL'}</Text>
      </View>
    )
  }

  renderSeparator() {
    return (
      <View style={{ backgroundColor: 'white', height: 15, width: '100%' }}></View>
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CAMPAIGN</Text>
        </View>
        <FlatList
          data={this.props.campaigns}
          renderItem={this.renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={{ padding: 10 }}
        // ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaign.campaigns
})

const mapDispatchToProps = dispatch => ({
  getCampaigns: () => dispatch(CampaignActions.getCampaigns()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsScreen);
