import { StyleSheet } from "react-native"
import { defaultStyle } from "."

export const SafeAreaViewStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: defaultStyle.Colors.primary
  },

  container: {
    flex: 1,
    backgroundColor: defaultStyle.Colors.primary,
    paddingTop: 60
  }
})
