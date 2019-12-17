import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import _ from 'lodash'

import ListLocation from '../../components/list-location';

import { connect } from 'react-redux';
import {
  BloodCampActions,
  BloodBankActions,
  BloodSeparationActions,
  BloodTestActions,
  HospitalActions
} from '../../actions';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Modalize from 'react-native-modalize';
import FeatherIcons from 'react-native-vector-icons/Feather';

import styles from './styles';
import BloodBankSvg from '../../images/045-first-aid-kit.svg';
import BloodCampSvg from '../../images/048-blood-transfusion.svg';
import HospitalSvg from '../../images/004-hospital.svg';
import TestCenterSvg from '../../images/010-microscope.svg';
import SeparationCenterSvg from '../../images/040-erythrocytes.svg';

const { height } = Dimensions.get('window')


const CATEGORIES = [
  {
    id: 1,
    name: 'Blood camp',
    image:
      <BloodCampSvg width={50} height={50} />
  },
  {
    id: 2,
    name: 'Test center',
    image:
      <TestCenterSvg width={50} height={50} />
  },
  {
    id: 3,
    name: 'Separation center',

    image:
      <SeparationCenterSvg width={50} height={50} />
  },
  {
    id: 4,
    name: 'Blood bank',
    image:
      <BloodBankSvg width={50} height={50} />
  },
  {
    id: 5,
    name: 'Hospital',
    image:
      <HospitalSvg width={50} height={50} />
  },
  {
    id: 6,
    name: '',
    image:
      <View style={{ width: 50, height: 50 }} />
  }
]

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 10.869876,
        longitude: 106.803937,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      textSearch: '',
      selectedCategory: 0,
      modalVisible: false,
      page: 1
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.renderItemCategory = this.renderItemCategory.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderListLocation = this.renderListLocation.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getNearbyAll = this.getNearbyAll.bind(this);
    this.onMarkerPress = this.onMarkerPress.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.requestLocations = this.requestLocations.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeTextDelayed = _.debounce(this.onChangeText, 200);
    this.getLocation = this.getLocation.bind(this);
  }

  async componentDidMount() {
    await this.getLocation();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedLocation !== prevProps.selectedLocation) {
      // this.onRegionChange(nextProps.selectedLocation)
      this.setState({ region: this.props.selectedLocation })
      this.mapView.animateToRegion(this.props.selectedLocation, 1000);
      this.getNearbyAll(`${this.props.selectedLocation.longitude},${this.props.selectedLocation.latitude}`)
    }
  }

  getNearbyAll(position) {
    this.props.getNearbyBloodBanks(position);
    this.props.getNearbyBloodCamps(position);
    this.props.getNearbyBloodSeparations(position);
    this.props.getNearbyBloodTests(position);
    this.props.getNearbyHospitals(position);
  }

  async hasLocationPermission() {
    if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }

  async getLocation() {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;


    Geolocation.getCurrentPosition(
      (position) => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }
        this.setState({ region })
        this.mapView.animateToRegion(region, 1000)
        this.getNearbyAll(`${position.coords.longitude},${position.coords.latitude}`)
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
    );
  }

  loadMore() {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }),
      () => this.requestLocations(this.state.selectedCategory))
  }

  requestLocations(type) {
    let { page } = this.state
    console.log(type)
    switch (type) {
      case 1: {
        this.props.getBloodCamps(page)
        break;
      };
      case 2: {
        this.props.getBloodTests(page);
        break;
      }
      case 3: {
        this.props.getBloodSeparations(page);
        break;
      }
      case 4: {
        this.props.getBloodBanks(page);
        break;
      }
      case 5: {
        this.props.getHospitals(page);
        break;
      }
    }
  }

  onSelectCategory(id) {
    this.requestLocations(id)
    this.setState({ selectedCategory: id })
  }

  renderItemCategory({ item }) {
    return (
      <View style={styles.wrapItem}>
        <TouchableOpacity
          style={styles.wrapImage}
          onPress={() => this.onSelectCategory(item.id)}>
          {item.image}
        </TouchableOpacity>
        <Text style={styles.placeName}>{item.name}</Text>
      </View>
    )
  }

  handleBack() {
    this.setState({
      selectedCategory: 0,
      page: 1
    })
  }

  renderListLocation(type) {
    let listLocation = [];
    let searchLocation = [];
    let isSearching = this.state.textSearch !== '';
    let title = '';
    switch (type) {
      case 1: {
        listLocation = this.props.camps;
        searchLocation = this.props.searchCamps;
        title = 'Blood camps';
        break;
      }
      case 2: {
        listLocation = this.props.tests;
        searchLocation = this.props.searchTests;
        title = 'Test centers';
        break;
      }
      case 3: {
        listLocation = this.props.separations;
        searchLocation = this.props.searchSeparations;
        title = 'Separation centers';
        break;
      }
      case 4: {
        listLocation = this.props.banks;
        searchLocation = this.props.searchBanks;
        title = 'Blood banks';
        break;
      }
      case 5: {
        listLocation = this.props.hospitals;
        searchLocation = this.props.searchHospitals;
        title = 'Hospitals';
        break;
      }
    }
    return (
      <ListLocation
        data={!isSearching ? listLocation : searchLocation}
        title={title}
        loadMore={!isSearching ? this.loadMore : null}
        goBack={this.handleBack} />
    )
  }

  onChangeText(textSearch) {
    this.setState({ textSearch });
    let { selectedCategory } = this.state
    if (textSearch !== '') {
      if (selectedCategory == 1)
        this.props.getBloodCampsByName(textSearch)
      else if (selectedCategory == 2)
        this.props.getBloodTestsByName(textSearch)
      else if (selectedCategory == 3)
        this.props.getBloodSeparationsByName(textSearch)
      else if (selectedCategory == 4)
        this.props.getBloodBanksByName(textSearch)
      else if (selectedCategory == 5)
        this.props.getHospitalsByName(textSearch)
    }
    // textSearch !== '' && this.props.getBloodCampsByName(textSearch);
  }
  renderHeaderModal() {
    return (
      <React.Fragment>
        <View style={styles.contentModal}>
          <Text style={styles.headingModal}>{'Where to ?'}</Text>
          <View style={styles.wrapInput}>
            <FeatherIcons name={'search'} size={20} />
            <TextInput
              style={styles.searchInput}
              value={this.textSearch}
              onChangeText={this.onChangeText}
            />
          </View>
        </View>
        <View style={styles.dividerModal} />
      </React.Fragment>
    )
  }

  renderContent() {
    return (
      <View style={styles.wrapContent}>
        {this.state.selectedCategory === 0 ? (
          <FlatList
            key={'categories'}
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={this.renderItemCategory}
            numColumns={3}
            style={{ flex: 1 }}
          />
        ) : this.renderListLocation(this.state.selectedCategory)}
      </View>
    )
  }

  onRegionChange(region) {
    // this.setState({ region });
    this.mapView.animateToRegion(region, 1000);
  }

  onMarkerPress(location) {
    this.props.navigation.navigate('Details', { location })
  }

  renderMarker(nearbyLocations, marker) {
    return (
      nearbyLocations.map(location => (
        <Marker
          key={location._id}
          coordinate={{
            longitude: location.location.coordinates[0],
            latitude: location.location.coordinates[1]
          }}
          onPress={() => this.onMarkerPress(location)}
        >
          {marker}
        </Marker>
      ))
    )
  }

  render() {
    const alwaysOpen = (height * 40) / 100;
    const modalHeight = height * 70 / 100;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          initialRegion={this.state.region}
          ref={(ref) => this.mapView = ref}
          // onRegionChange={this.onRegionChange}
          showsUserLocation
          showsMyLocationButton
        >
          {this.renderMarker(this.props.nearbyCamps, CATEGORIES[0].image)}
          {this.renderMarker(this.props.nearbyTests, CATEGORIES[1].image)}
          {this.renderMarker(this.props.nearbySeparations, CATEGORIES[2].image)}
          {this.renderMarker(this.props.nearbyBanks, CATEGORIES[3].image)}
          {this.renderMarker(this.props.nearbyHospitals, CATEGORIES[4].image)}
        </MapView>
        <Modalize
          HeaderComponent={
            this.renderHeaderModal()
          }
          modalStyle={styles.modal}
          alwaysOpen={alwaysOpen}
          handlePosition="inside"
          modalHeight={modalHeight}
        >
          {this.renderContent()}
        </Modalize>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  camps: state.bloodCamp.bloodCamps,
  banks: state.bloodBank.bloodBanks,
  separations: state.bloodSeparation.bloodSeparations,
  tests: state.bloodTest.bloodTests,
  hospitals: state.hospital.hospitals,
  selectedLocation: state.location.selectedLocation,
  nearbyCamps: state.bloodCamp.nearbyBloodCamps,
  nearbyBanks: state.bloodBank.nearbyBloodBanks,
  nearbySeparations: state.bloodSeparation.nearbyBloodSeparations,
  nearbyTests: state.bloodTest.nearbyBloodTests,
  nearbyHospitals: state.hospital.nearbyHospitals,
  searchCamps: state.bloodCamp.searchBloodCamps,
  searchBanks: state.bloodBank.searchBloodBanks,
  searchTests: state.bloodTest.searchBloodTests,
  searchSeparations: state.bloodSeparation.searchBloodSeparations,
  searchHospitals: state.hospital.searchHospitals
})

const mapDispatchToProps = dispatch => ({
  getBloodCamps: (page) => dispatch(BloodCampActions.getBloodCamps(page)),
  getNearbyBloodCamps: (position) => dispatch(BloodCampActions.getNearbyBloodCamps(position)),
  getBloodCampsByName: name => dispatch(BloodCampActions.getBloodCampsByName(name)),

  getBloodBanks: (page) => dispatch(BloodBankActions.getBloodBanks(page)),
  getNearbyBloodBanks: (position) => dispatch(BloodBankActions.getNearbyBloodBanks(position)),
  getBloodBanksByName: name => dispatch(BloodBankActions.getBloodBanksByName(name)),

  getBloodTests: (page) => dispatch(BloodTestActions.getBloodTests(page)),
  getNearbyBloodTests: (position) => dispatch(BloodTestActions.getNearbyBloodTests(position)),
  getBloodTestsByName: name => dispatch(BloodTestActions.getBloodTestsByName(name)),

  getBloodSeparations: (page) => dispatch(BloodSeparationActions.getBloodSeparations(page)),
  getNearbyBloodSeparations: (position) => dispatch(BloodSeparationActions.getNearbyBloodSeparations(position)),
  getBloodSeparationsByName: name => dispatch(BloodSeparationActions.getBloodSeparationsByName(name)),

  getHospitals: (page) => dispatch(HospitalActions.getHospitals(page)),
  getNearbyHospitals: (position) => dispatch(HospitalActions.getNearbyHospitals(position)),
  getHospitalsByName: name => dispatch(HospitalActions.getHospitalsByName(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
