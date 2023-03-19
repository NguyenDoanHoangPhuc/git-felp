import * as React from 'react'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import FoodList from '../screens/FoodList/FoodList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { images, icon, colors, fontSizes } from '../constants/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import FoodInfo from '../screens/FoodList/FoodInfo'
import UITab from './UITab'
import ChatList from '../screens/Chat/ChatList'
import Chat from '../screens/Chat/Chat'
import Register from '../screens/Register'
const Stack =createNativeStackNavigator()
function App(props){
    return <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}} 
            >
            
                <Stack.Screen name={"Welcome"} component ={Welcome} />
                <Stack.Screen name={"Login"} component ={Login} />
                <Stack.Screen name={"FoodList"} component ={FoodList} />
                <Stack.Screen name={"FoodInfo"} component ={FoodInfo} />
                <Stack.Screen name={"UITab"} component ={UITab} />
                <Stack.Screen name={"Chat"} component ={Chat} />
                <Stack.Screen name={"ChatList"} component ={ChatList} />
                <Stack.Screen name={"Register"} component ={Register} />

            </Stack.Navigator>
    </NavigationContainer>
}

export default App