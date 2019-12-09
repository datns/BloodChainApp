import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Fonts, FontSizes, Colors } from '../../utils/Themes';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.coralRed,
    // height: 50,
    width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h3,
    marginBottom: 10
  },
  item: {
    backgroundColor: Colors.white,
    elevation: 3,
    width: width - 30,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginBottom: 15,
  },
  wrapImage: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 10
  },
  wrapContent: {
    flex: 1,
    padding: 10.
  },
  title: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.subTitle,
    color: Colors.gray,
    marginTop: 15
  },
  content: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.title,
    color: Colors.foggyGrey,
  },
  wrapExpired: {
    position: 'absolute',
    elevation: 1,
    backgroundColor: Colors.foggyGrey,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textExpired: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h2,
    color: '#292926'
  },
  statusText: {
    position: 'absolute',
    top: 15,
    right: 20,
    fontFamily: Fonts.bold,
    fontSize: FontSizes.subTitle,
    color: Colors.coralRed,
    opacity: 0.9
  },
  detailText: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.title,
    color: Colors.coralRed,
    opacity: 0.9
  },
  detailButton: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  modalContainer: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  searchInput: {
    height: 40,
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: FontSizes.title,
    color: Colors.black
  },
  inputView: {
    flexDirection: 'row',
    borderColor: Colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: 6,
    overflow: 'hidden'
  },
  iconView: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  }
});

export default styles;