import * as React from "react"
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack"
import Login from "../screens/login/Login"
import Home from "../screens/home/Home"
import Register from "../screens/register/Register"
import { Text, View } from "react-native"
import { defaultStyle } from "@/styles"
import NewPassword from "@/screens/forgotPassword/newPassword/NewPassword"
import CheckEmail from "@/screens/forgotPassword/checkEmail/CheckEmail"

export const Stack = createStackNavigator()

type StackNavigation = {
  Login: undefined
  Register: undefined
  Home: undefined
  CheckEmail: undefined
  NewPassword: undefined
}

export type StackTypes = StackNavigationProp<StackNavigation>

const HeaderDefaultText = () => {
  return (
    <Text
      style={{
        fontSize: 18,
        color: defaultStyle.Colors.textWhite,
        fontWeight: "bold"
      }}
    >
      Return
    </Text>
  )
}

const HeaderBackground = () => {
  return (
    <View
      style={{
        backgroundColor: defaultStyle.Colors.primary,
        flex: 1
      }}
    />
  )
}
const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: () => <HeaderDefaultText />,
          headerTintColor: defaultStyle.Colors.textWhite,
          headerBackground: () => <HeaderBackground />
        }}
      />
      <Stack.Screen
        name="CheckEmail"
        component={CheckEmail}
        options={{
          headerTitle: () => <HeaderDefaultText />,
          headerTintColor: defaultStyle.Colors.textWhite,
          headerBackground: () => <HeaderBackground />
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes
