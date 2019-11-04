import { StyleSheet } from 'react-native'
import { Colors, Fonts, FontSizes } from '../../utils/Themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    overflow: 'hidden',
    borderRadius: 20,
    // marginTop: 30
  },
  infoView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: Colors.white
  },
  nameText: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.subTitle,
    color: Colors.black,
    marginTop: 15,
    textAlign: 'center',
    // marginBottom: 5
  },
  birthdayText: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.body,
    color: Colors.darkGray,
    // paddingHorizontal: 5
  },
  ovalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 40,
    borderRadius: 10,
    borderColor: Colors.coralRed,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 5,
    backgroundColor: Colors.coralRed
  },
  leftInfo: {
    flex: 1,
    alignItems: 'center',
  },
  rightInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.body,
    color: Colors.white
  },
  imageHeader: {
    width: '100%',
    height: 160
  },
  subInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    alignItems: 'center',
  }


})

export default styles;