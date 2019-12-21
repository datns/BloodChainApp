import { StyleSheet } from 'react-native';
import { Colors, Fonts, FontSizes } from '../../utils/Themes';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  header: {
    height: 80,
    backgroundColor: Colors.coralRed,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  point: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.h1,
    color: Colors.white
  },
  introCard: {
    height: 120,
    backgroundColor: Colors.white,
    width: '100%',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 3,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  action: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.h3,
    color: Colors.black
  },
  benefit: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.subTitle,
    color: Colors.darkGray
  },
  divider: {
    height: 2,
    width: 20,
    backgroundColor: Colors.black,
    marginVertical: 10
  },
  typeCard: {
    flex: 1,
    height: 120,
    backgroundColor: Colors.white,
    borderRadius: 6,
    elevation: 2,
    marginTop: 15,
    justifyContent: 'space-between',
    padding: 10
  },
  category: {
    flexDirection: 'row',
  },
  type: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.title,
    color: Colors.black
  },
  titleHistory: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    color: Colors.black,
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-between',
    flex: 1
  },
  iconContainer: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3
  },
  descriptionType: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.subTitle,
    color: Colors.black,
    marginBottom: 5
  },
  time: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.body,
    color: Colors.darkGray
  },
  dividerHistory: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: Colors.foggyGrey,
  },
  voucherCardContainer: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    paddingVertical: 20,
    marginTop: 10,
    flex: 1,
  },
  imageContainer: {
    paddingHorizontal: 20,
    flex: 1
  },
  infoContainer: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  voucherName: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.title,
    color: Colors.black
  },
  voucherDesc: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.body,
    color: Colors.foggyGrey
  },
  voucherQuantity: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.subTitle,
    color: Colors.dodgerBlue
  },
  redeemButton: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: Colors.dodgerBlue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  redeemText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.body,
    color: Colors.white
  },
  headerReward: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerRewardText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.subTitle,
    color: Colors.black
  },
  dividerVoucher: {
    height: '15%',
    width: 2,
    backgroundColor: Colors.foggyGrey,
    borderRadius: 8,
  },
  addressInput: {
    height: 35,
    borderRadius: 6,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 15,
    marginTop: 40,
    fontFamily: Fonts.regular,
    fontSize: FontSizes.subTitle
  }
})

export default styles;