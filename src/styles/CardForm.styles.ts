import { StyleSheet } from "react-native"
import { defaultStyle } from "./global.styles"

export const CardForm = StyleSheet.create({
  mainContainer: {
    padding: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: defaultStyle.Colors.primary,
    flexGrow: 1
  },

  title: {
    color: defaultStyle.Colors.textWhite,
    fontSize: 30,
    fontWeight: "bold"
  },

  titleBorderBottom: {
    marginTop: 4,
    borderBottomWidth: 1,
    borderBottomColor: defaultStyle.Colors.textWhite
  },

  card: {
    padding: 20,
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: defaultStyle.Colors.textWhite,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    gap: 20
  },

  cardText: {
    textAlign: "center",
    fontSize: 18,
    color: defaultStyle.Colors.primary
  },

  cardInput: {
    fontSize: 16,
    width: "100%",
    padding: 10,
    color: defaultStyle.Colors.primary
  }
})
