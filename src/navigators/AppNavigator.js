import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home';

const MySwitch = createSwitchNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    // transition: (
    //   <Transition.Together>
    //     <Transition.Out
    //       type="slide-bottom"
    //       durationMs={400}
    //       interpolation="easeIn"
    //     />
    //     <Transition.In type="fade" durationMs={500} />
    //   </Transition.Together>
    // ),
    initialRouteName: 'Login'
  },
);

export default createAppContainer(MySwitch);