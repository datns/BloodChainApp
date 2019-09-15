import { createBottomTabNavigator } from 'react-navigation'
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

import Profile from '../screens/profile';
import Campaigns from '../screens/campaigns';

const MainTab = createBottomTabNavigator({
  Campaigns,
  Profile
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FeatherIcons;
        let iconName;
        if (routeName === 'Profile') {
          iconName = `user`;
        }
        else if (routeName === 'Campaigns') {
          iconName = `droplet`;
        }

        return <IconComponent name={iconName} size={20} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#FE0813',
      inactiveTintColor: '#B9C4D6',
      showLabel: false
    },
  })

export default MainTab;