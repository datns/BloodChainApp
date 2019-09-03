import { StyleSheet } from 'react-native';
import { Fonts, FontSizes, Colors } from '../../utils/Themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30
  },
  greetingView: {
    justifyContent: 'flex-end',
    flex: 1
  },
  inputView: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonView: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h1,
    color: 'black',
    marginTop: 30
  },
  signIn: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h2,
    color: '#7a9097',
    marginTop: 10
  },
  input: {
    fontFamily: Fonts.medium,
    fontSize: FontSizes.title,
    height: 50,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#88a0a8'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    width: 190,
    borderRadius: 8,
    backgroundColor: '#e6e6fa',
    marginTop: 50,
  },
  buttonText: {
    fontFamily: Fonts.semi,
    fontSize: FontSizes.h3,
    color: 'black'
  }
});

export default styles;