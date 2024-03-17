import { StyleSheet } from "react-native"
import { defaultStyle } from "."

export const formStyles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyle.Colors.primary,
    flexGrow: 1
  },

  titleContainer: {
    alignItems: "center"
  },

  imageContainer: {
    marginLeft: -23,
    flexDirection: "row",
    gap: 3
  },

  image: {
    width: 20,
    height: 20
  },

  title: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: defaultStyle.Colors.textWhite
  },

  text: {
    width: 200,
    fontSize: 18,
    textAlign: "center",
    color: defaultStyle.Colors.textWhite
  },

  inputContainer: {
    marginTop: 50,
    marginBottom: 40,
    gap: 10,
    width: 300
  },

  input: {
    fontSize: 16,
    width: "100%",
    padding: 10,
    color: defaultStyle.Colors.textWhite
  },

  inputErrors: {
    fontSize: 12,
    paddingHorizontal: 10,
    color: defaultStyle.Colors.error
  },

  link: {
    paddingHorizontal: 10,
    textDecorationLine: "underline",
    color: defaultStyle.Colors.textWhite
  },

  buttonContainer: {
    gap: 20,
    width: 200,
    alignSelf: "center"
  },

  secondaryButton: {
    fontSize: 18,
    textDecorationLine: "underline",
    textAlign: "center",
    color: defaultStyle.Colors.textWhite
  }
})
