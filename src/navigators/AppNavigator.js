import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const MySwitch = createSwitchNavigator(
  {
    HomeStack: HomeStack,
    AuthStack: AuthStack,
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
    initialRouteName: 'AuthStack'
  },
);

export default createAppContainer(MySwitch);