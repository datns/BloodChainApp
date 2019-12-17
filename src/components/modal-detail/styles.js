import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Colors } from '../../utils/Themes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  header: {

  },
  body: {
    paddingTop: 20
  },
  title: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h2,
    color: Colors.black
  },
  date: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.title,
    color: Colors.darkGray,
    marginTop: 5
  },
  description: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.subTitle,
    color: Colors.black
  },
  imageList: {
    marginTop: 20,
    marginBottom: 10
  },
  campName: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.h3,
    color: Colors.coralRed
  }
})

export default styles;