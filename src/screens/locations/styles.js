import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts, FontSizes } from '../../utils/Themes';

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mapView: {
    width,
    height: '65%',
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 6,
    marginTop: 10,
    overflow: 'hidden',
    width: '100%',
    height: 50,
    paddingHorizontal: 10
  },
  searchInput: {
    width: '100%',
    height: 50,
    marginRight: 10
  },
  contentModal: {
    padding: 20,
  },
  modal: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
  },
  headingModal: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h2,
    color: Colors.black
  },
  dividerModal: {
    height: 10,
    width: '100%',
    backgroundColor: 'whitesmoke',
    marginVertical: 5
  },
  wrapItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 1,
  },
  wrapImage: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.tacao,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeName: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.body,
    color: Colors.foggyGrey
  }
})

export default styles;