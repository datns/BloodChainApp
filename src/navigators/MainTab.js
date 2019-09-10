import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from '../screens/profile';
import Campaigns from '../screens/campaigns';

const MainTab = createBottomTabNavigator({
  Profile,
  Campaigns
}, {
    initialRouteName: 'Campaigns'
  })

export default MainTab;