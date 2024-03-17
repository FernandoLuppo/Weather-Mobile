import * as React from "react"
import {
  createBottomTabNavigator,
  BottomTabNavigationProp
} from "@react-navigation/bottom-tabs"
import Home from "../screens/home/Home"
import UserInfos from "../screens/userInfos/UserInfos"
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

type BottomNavigation = {
  Home: undefined
  UserInfos: undefined
  StackRoutes: {
    Login: undefined
    Register: undefined
    Home: undefined
    CheckEmail: undefined
    NewPassword: undefined
  }
}

export type BottomTabTypes = BottomTabNavigationProp<BottomNavigation>

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <FontAwesome5 name="home" size={size} color={color} />
          } else if (route.name === "UserInfos") {
            return <FontAwesome6 name="user-gear" size={size} color={color} />
          }
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserInfos" component={UserInfos} />
    </Tab.Navigator>
  )
}

export default TabRoutes
