import { defaultStyle } from "@/styles"
import { StyleSheet } from "react-native"

export const InputStyles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: defaultStyle.Colors.textWhite
  },

  inputBlack: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: defaultStyle.Colors.textBlack
  }
})
