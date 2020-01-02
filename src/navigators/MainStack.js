//Página que carrega o preload e a tela inicial de boas vindas do app
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Preload from '../screens/Preload'
import StarterStack from './StarterStack'
//import AppTab from './AppTab'

const MainStack = createStackNavigator({
    Preload,
    StarterStack,
    //AppTab
},{
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        header:null
    }
})

export default createAppContainer(MainStack)