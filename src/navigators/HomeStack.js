import { createStackNavigator } from 'react-navigation';
import MainTab from './MainTab';
import DetailsScreen from '../screens/details';

const HomeStack = createStackNavigator({
  Tab: MainTab,
  Details: DetailsScreen
}, {
  headerMode: 'none'
})

export default HomeStack