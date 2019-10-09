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
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal
} from 'react-native';

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
import BloodBankSvg from '../../images/blood-bank.svg';
import BloodCampSvg from '../../images/blood-camp1.svg';
import HospitalSvg from '../../images/hospital.svg';
import TestCenterSvg from '../../images/test-center1.svg';
import SeparationCenterSvg from '../../images/separation-center.svg';

const { height } = Dimensions.get('window')

const CATEGORIES = [
  {
    id: 1,
    name: 'Blood camp',
    image:
      <BloodCampSvg width={40} height={40} />
  },
  {
    id: 2,
    name: 'Test center',
    image:
      <TestCenterSvg width={40} height={40} />
  },
  {
    id: 3,
    name: 'Separation center',

    image:
      <SeparationCenterSvg width={40} height={40} />
  },
  {
    id: 4,
    name: 'Blood bank',
    image:
      <BloodBankSvg width={40} height={40} />
  },
  {
    id: 5,
    name: 'Hospital',
    image:
      <HospitalSvg width={40} height={40} />
  },
  {
    id: 6,
    name: '',
    image:
      <View style={{ width: 50, height: 50 }} />
  }
]

const FAKEDATA = [
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73591",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73592",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73593",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73594",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73595",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73596",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73597",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73598",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73599",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e73590",
  },
  {
    address: "353, Yeonhui-ro, Seodaemun-gu, Seoul, Korea",
    createdAt: "2019-07-05T08:44:30.357Z",
    email: "test456@yopmail.com",
    location: {
      coordinates: [126.95189457116396, 37.459882]
    },
    name: "Test Blood Test Center",
    phone: "+41 33 748 05 50",
    _id: "5d1f0deebbe4947da03e735900",
  }
]
class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      textSearch: '',
      selectedCategory: 0,
      modalVisible: false
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.renderItemCategory = this.renderItemCategory.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderListLocation = this.renderListLocation.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getNearbyAll = this.getNearbyAll.bind(this);
    this.onMarkerPress = this.onMarkerPress.bind(this)
  }

  componentDidMount() {
    this.getLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedLocation !== nextProps.selectedLocation) {
      // this.onRegionChange(nextProps.selectedLocation)
      this.mapView.animateToRegion(nextProps.selectedLocation, 1000);
      this.getNearbyAll(`${nextProps.selectedLocation.longitude},${nextProps.selectedLocation.latitude}`)
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
        this.getNearbyAll(`${position.coords.longitude},${position.coords.latitude}`)
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
    );
  }

  onSelectCategory(id) {
    switch (id) {
      case 1: {
        this.props.getBloodCamps()
        break;
      };
      case 2: {
        this.props.getBloodTests();
        break;
      }
      case 3: {
        this.props.getBloodSeparations();
        break;
      }
      case 4: {
        this.props.getBloodBanks();
        break;
      }
      case 5: {
        this.props.getHospitals();
        break;
      }
    }
    this.setState({ selectedCategory: id })
  }

  renderItemCategory({ item }) {
    return (
      <View style={styles.wrapItem}>
        <TouchableOpacity style={styles.wrapImage} onPress={() => this.onSelectCategory(item.id)}>
          {item.image}
        </TouchableOpacity>
        <Text style={styles.placeName}>{item.name}</Text>
      </View>
    )
  }

  renderListLocation(type) {
    let listLocation = [];
    let title = '';
    switch (type) {
      case 1: {
        listLocation = this.props.camps;
        title = 'Blood camps';
        break;
      }
      case 2: {
        listLocation = this.props.tests;
        title = 'Test centers';
        break;
      }
      case 3: {
        listLocation = this.props.separations;
        title = 'Separation centers';
        break;
      }
      case 4: {
        listLocation = this.props.banks;
        title = 'Blood banks';
        break;
      }
      case 5: {
        listLocation = this.props.hospitals;
        title = 'Hospitals';
        break;
      }
    }
    return (
      <ListLocation
        data={FAKEDATA}
        title={title}
        goBack={() => {
          this.setState({
            selectedCategory: 0
          })
        }} />
    )
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
              onChangeText={textSearch => this.setState({ textSearch })}
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
          // region={this.state.region}
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
  nearbyHospitals: state.hospital.nearbyHospitals
})

const mapDispatchToProps = dispatch => ({
  getBloodCamps: () => dispatch(BloodCampActions.getBloodCamps()),
  getNearbyBloodCamps: (position) => dispatch(BloodCampActions.getNearbyBloodCamps(position)),

  getBloodBanks: () => dispatch(BloodBankActions.getBloodBanks()),
  getNearbyBloodBanks: (position) => dispatch(BloodBankActions.getNearbyBloodBanks(position)),

  getBloodTests: () => dispatch(BloodTestActions.getBloodTests()),
  getNearbyBloodTests: (position) => dispatch(BloodTestActions.getNearbyBloodTests(position)),

  getBloodSeparations: () => dispatch(BloodSeparationActions.getBloodSeparations()),
  getNearbyBloodSeparations: (position) => dispatch(BloodSeparationActions.getNearbyBloodSeparations(position)),

  getHospitals: () => dispatch(HospitalActions.getHospitals()),
  getNearbyHospitals: (position) => dispatch(HospitalActions.getNearbyHospitals(position)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
