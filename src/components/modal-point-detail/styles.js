import { StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes } from '../../utils/Themes'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '30%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h2,
    color: Colors.coralRed,
    textAlign: 'center'
  },
  desc: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.title,
    color: Colors.black,
    // textAlign: 'center'
  },
  field: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.title,
    color: Colors.black,
    textAlign: 'left'
  }
})

export default styles;