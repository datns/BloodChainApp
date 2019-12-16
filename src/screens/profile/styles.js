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
    marginTop: -15,
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
    height: 200
  },
  subInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '50%',
    alignItems: 'center',
  },
  bloodPackView: {
    width: 40,
    height: 50,
    borderRadius: 6,
    backgroundColor: Colors.nero,
    overflow: 'hidden',
  },
  bloodPackHeader: {
    flex: 0.2,
    backgroundColor: Colors.primary,
  },
  bloodTypeView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent
  },
  bloodTypeText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.subTitle,
    color: Colors.white,
    textAlign: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1
  },
  bloodPackInfo: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
  bloodCampName: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.title,
    color: Colors.black,
    opacity: 0.7
  },
  infoPackText: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.body,
    color: Colors.darkGray,
  },
  timeText: {
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: FontSizes.subTitle,
    color: Colors.black
  },
  titleHistoryView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  titleHistory: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    color: Colors.black,
  },
  timesText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    backgroundColor: '#f0f8ff',
    borderRadius: 5,
    paddingHorizontal: 5,
    color: Colors.foggyGrey
  },
  descriptionText: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.subTitle,
    color: Colors.gray
  },
  detailContainerStyle: {
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "#BBDAFF",
    borderRadius: 10
  },
  timelineStyle: {
    padding: 20,
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  qrCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
    backgroundColor: Colors.white
  },
  actionButtonContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
    opacity: 0.8
  }
})

export default styles;