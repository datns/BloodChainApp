import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './styles'

import { TouchableHighlight } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { LocationActions } from '../../actions';
import { Colors } from '../../utils/Themes';

class ListLocation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.renderHeader = this.renderHeader.bind(this)
    this._renderItem = this._renderItem.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
  }

  _renderItem({ item, index }) {
    const borderTop = { borderTopWidth: 1 };
    const borderBot = { borderBottomWidth: 1 }
    const location = {
      latitude: item.location.coordinates[1],
      longitude: item.location.coordinates[0],
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
    return (
      <View style={[styles.item, index == 0 && borderTop, index == this.props.data.length - 1 && borderBot]}>
        <View style={styles.itemInfo}>
          <Text style={styles.address} numberOfLines={1}>{item.address}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <TouchableHighlight onPress={() => this.props.selectLocation(location)}>
          <View style={styles.moveButton}>
            <FeatherIcon name={'send'} size={15} color={'#EA504C'} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  renderHeader() {
    return (
      <React.Fragment>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.props.goBack} style={styles.iconButton}>
            <FeatherIcon name={'arrow-left'} size={25} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </React.Fragment>
    )
  }

  renderFooter() {
    return (
      <React.Fragment>
        <TouchableOpacity style={styles.footer} onPress={this.props.loadMore}>
          {this.props.loading ? <ActivityIndicator size={'small'} color={Colors.easternBlue} /> :
            <Text style={styles.textLoadMore}>Load more</Text>
          }
        </TouchableOpacity>
      </React.Fragment>
    )
  }

  renderSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  render() {
    return (
      <View style={{}}>
        <FlatList
          data={this.props.data}
          style={styles.container}
          renderItem={this._renderItem}
          keyExtractor={item => item._id}
          ListHeaderComponent={this.renderHeader()}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.props.loadMore && this.renderFooter()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  selectLocation: location => dispatch(LocationActions.selectLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListLocation);
