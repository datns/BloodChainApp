import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux'
import { CampaignActions } from '../../actions';

import moment from 'moment';

import styles from './styles';

class CampaignsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getCampaigns()
  }

  renderItem({ item }) {
    const { bloodCamp, description, startDate, endDate, photos, name } = item;
    const isExpired = moment().isAfter(endDate);
    return (
      <View style={styles.item}>
        {isExpired && (
          <View style={styles.wrapExpired}>
            <Text style={styles.textExpired}>Expired</Text>
          </View>
        )}
        <View style={styles.wrapImage}>
          <Image source={{ uri: photos[0].url }} style={styles.image} resizeMode={'cover'} />
        </View>
        <View style={styles.wrapContent}>
          <Text style={styles.title}>
            {name}
          </Text>
          <Text style={styles.content}>
            {`${bloodCamp.name} - ${bloodCamp.address}`}
          </Text>
          {moment(startDate).isAfter(moment()) && <Text style={styles.content}>{`Starts ${moment(startDate).startOf('day').fromNow()}`}</Text>}
          {moment().isBetween(startDate, endDate) && <Text style={styles.content}>{`Ends ${moment(endDate).endOf('day').fromNow()}`}</Text>}
        </View>
      </View>
    )
  }

  renderSeparator() {
    return (
      <View style={{ backgroundColor: '#f5f5f5', height: 15, width: '100%' }}></View>
    )
  }

  render() {
    console.log('campaigns', this.props.campaigns)
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>CAMPAIGNS</Text>
        </View>
        <FlatList
          data={this.props.campaigns}
          renderItem={this.renderItem}
          keyExtractor={item => item._id}
          style={{ paddingVertical: 20 }}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaign.campaigns
})

const mapDispatchToProps = dispatch => ({
  getCampaigns: () => dispatch(CampaignActions.getCampaigns())
})

export default connect(mapStateToProps, mapDispatchToProps)(CampaignsScreen);
