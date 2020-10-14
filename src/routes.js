import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RedefinePass from './pages/RedefinePass'
import Index from './pages/AppNavigation/Index'

const Routes = createAppContainer(
    createSwitchNavigator({
     App: createStackNavigator({
        Home,
        Login,
        Signup,
        RedefinePass,
        Index
     })
    }),
);

export default Routes;