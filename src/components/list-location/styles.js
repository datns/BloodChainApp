import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Colors } from '../../utils/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 5,
    paddingHorizontal: 20
  },
  icon: {
    // margin: 10
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    // alignItems: 'flex-end'
  },
  title: {
    flex: 1,
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    textAlign: 'right',
    color: Colors.black,
  },
  address: {
    color: Colors.darkGray,
    fontFamily: Fonts.regular,
    fontSize: FontSizes.body,
    fontStyle: 'italic',
    marginBottom: 5
  },
  name: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.title,
    color: Colors.black
  },
  item: {
    height: '15%',
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    borderColor: Colors.whiteSmoke
  },
  itemInfo: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: Colors.whiteSmoke,
    width: '100%',
  },
  moveButton: {
    height: '100%',
    width: 50,
    borderLeftWidth: 1,
    borderColor: Colors.whiteSmoke,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tacao
  },
})

export default styles;