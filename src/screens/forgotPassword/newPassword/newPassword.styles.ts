import { StyleSheet } from "react-native"
import { defaultStyle } from "@/styles"

export const NewPasswordStyles = StyleSheet.create({
  card: {
    padding: 20,
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: defaultStyle.Colors.textWhite,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    gap: 30
  }
})
