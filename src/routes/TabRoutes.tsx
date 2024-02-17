import * as React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/home/Home"
import UserInfos from "../screens/userInfos/UserInfos"

const tab = createBottomTabNavigator()

const TabRoutes = () => {
  return (
    <tab.Navigator>
      <Home />
      <UserInfos />
    </tab.Navigator>
  )
}

export default TabRoutes
