import * as React from 'react'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import FoodList from '../screens/FoodList/FoodList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { images, icon, colors, fontSizes} from '../constants/index'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Map from '../screens/Map'
import ChatList from '../screens/Chat/ChatList'
import FoodInfo from '../screens/FoodList/FoodInfo'

const Tab = createBottomTabNavigator()
const screenOptions = (({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'white',
    tabBarActiveBackgroundColor: colors.grayText,
    tabBarInactiveBackgroundColor: colors.grayText,
    

    tabBarIcon: ({focused, color, size}) =>{
        let screenName = route.name
        let iconName = 'facebook'

        if (screenName == 'Welcome') iconName = 'coffee'
        else if (screenName == 'Map') iconName = 'map'
        else if (screenName == 'FoodList') iconName = 'tree'
        else if (screenName == 'ChatList') iconName = 'question'
        

        return <Icon 
        name={iconName} 
        size={30} 
        color={focused ? colors.darkPrimary : colors.primary}/>
    }
}))
function UITab(props){
    return <Tab.Navigator screenOptions={screenOptions} tabBarOptions={{ showLabel: false }}>
        <Tab.Screen name={'FoodList'} component={FoodList}/>
        <Tab.Screen name={'Map'} component={Map}/>
        <Tab.Screen name={'ChatList'} component={ChatList}/>

    </Tab.Navigator>
}
export default UITab