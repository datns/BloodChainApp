import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts, FontSizes } from '../../utils/Themes';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  imageContainer: {
    flex: 1,
    marginBottom: -1,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  imageContainerEven: {
    backgroundColor: Colors.black
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  item: {
    width: viewportWidth - 100,
    height: (viewportWidth - 100) * 2 / 3,
  },
  closeButton: {
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  wrapName: {
    height: 30,
    justifyContent: 'center',
    marginTop: 20
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h2,
    color: Colors.white,
    textAlign: 'center',
    // flex: 1
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: '50%'
  },
  carousel: {
    marginTop: 20
  },
  pagination: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
  cardInfo: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 10,
    // borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGray,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  divider: {
    height: '60%',
    width: 1,
    backgroundColor: Colors.darkGray,
    marginHorizontal: 15
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    height: '50%'
  },
  title: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.body,
    color: Colors.coralRed,
    marginBottom: 5
  },
  content: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.body,
    color: Colors.black,
  },
  info: {
    flex: 1,
    paddingVertical: 5,
  }
})

export default styles;