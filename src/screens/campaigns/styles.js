import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Fonts, FontSizes, Colors } from '../../utils/Themes';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.accent,
    height: 50,
    width: '100%',
    position: 'absolute',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    elevation: 2,
    flex: 1,
    width: width - 30,
    borderRadius: 10,
    overflow: 'hidden',
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
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h3,
    marginBottom: 10,
    color: Colors.black
  },
  content: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.title,
    color: Colors.darkGray,
    marginBottom: 10
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
  }
});

export default styles;