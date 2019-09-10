import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux'
import { CampaignActions } from '../../actions';

class CampaignsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getCampaigns()
  }


  render() {
    console.log('campaigns', this.props.campaigns)
    return (
      <View>
        <Text> Campaigns </Text>
      </View>
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
