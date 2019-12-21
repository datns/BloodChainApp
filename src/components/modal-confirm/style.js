import { StyleSheet } from 'react-native'
import { Colors, Fonts, FontSizes } from '../../utils/Themes'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '25%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    // alignItems: 'center',
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
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 35
  },
  button: {
    width: '35%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: Colors.coralRed
  },
  buttonText: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.title,
    color: Colors.white
  },
  infoText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    color: Colors.black,
    textAlign: 'center',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  infoMetric: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.title,
    color: Colors.foggyGrey,
    textAlign: 'center'
  },
})

export default styles;