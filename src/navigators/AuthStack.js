import { createStackNavigator } from 'react-navigation'
import Login from '../screens/login';
const AuthStack = createStackNavigator({
  Login: Login
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  })

export default AuthStack