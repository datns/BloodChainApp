import React, { Component, PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import FeatherIcons from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import styles, { sliderWidth, itemWidth } from './styles';
import { Colors } from '../../utils/Themes';

const SLIDER_1_FIRST_ITEM = 1;

class DetailsScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: SLIDER_1_FIRST_ITEM
    };
    this.onClosePress = this.onClosePress.bind(this);
  }

  onClosePress() {
    this.props.navigation.goBack();
  }

  _renderItem({ item, index }, parallaxProps) {
    const even = (index + 1) % 2 === 0;
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
          style={styles.image}
          parallaxFactor={0.4}
          showSpinner={true}
          {...parallaxProps}
        />
      </View>
    )
  }

  renderCardInfo(iconName, title, content) {
    return (
      <React.Fragment>
        <View style={styles.cardInfo}>
          <FeatherIcons name={iconName} size={20} color={Colors.coralRed} />
          <View style={styles.divider} />
          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
        </View>
      </React.Fragment>
    )
  }

  render() {
    const location = this.props.navigation.getParam('location', {});
    console.log('location details', location)
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.coralRed, Colors.white]}
          startPoint={{ x: 1, y: 0 }}
          endPoint={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={this.onClosePress} hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}>
            <FeatherIcons name={'x'} size={30} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.wrapName}>
            <Text style={styles.name}>
              {location.name}
            </Text>

          </View>

        </View>
        <Carousel
          layout={'default'}
          data={location.photos}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          // firstItem={Math.floor(location.photos.length / 2)}
          firstItem={SLIDER_1_FIRST_ITEM}
          hasParallaxImages={true}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          removeClippedSubviews={true}
          containerCustomStyle={styles.carousel}
        // loop={true}
        />
        <Pagination
          dotsLength={location.photos.length > 8 ? 8 : location.photos.length}
          activeDotIndex={this.state.activeSlide}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          dotColor={Colors.coralRed}
          inactiveDotColor={Colors.darkGray}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
        <View style={styles.containerInfo} >
          {this.renderCardInfo('home', 'Address', location.address)}
          {this.renderCardInfo('phone', 'Phone', location.phone)}
          {this.renderCardInfo('mail', 'Email', location.email)}
          {/* {this.renderCardInfo('activity', 'CreatedAt', moment(location.createdAt).format('MMMM Do YYYY'))} */}
        </View>
      </View>
    );
  }
}

export default DetailsScreen;
