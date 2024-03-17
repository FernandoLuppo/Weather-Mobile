import { defaultStyle } from "@/styles"
import { StyleSheet } from "react-native"

const maxWidth = 300

export const HomeStyles = StyleSheet.create({
  searchContentContainer: {
    padding: 30,
    flex: 1,
    maxWidth: maxWidth,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: defaultStyle.Colors.primary,
    flexGrow: 1
  },

  cityContainer: {
    gap: 20
  },

  weatherContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  weatherImage: {
    width: 50,
    height: 50,
    marginBottom: 30
  },

  location: {
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  input: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: defaultStyle.Colors.textWhite
  },

  text: {
    fontSize: 16,
    color: defaultStyle.Colors.textWhite
  },

  weatherText: {
    fontSize: 23,
    textAlign: "center",
    fontWeight: "600",
    color: defaultStyle.Colors.textWhite
  },

  weatherSideInfosContainer: {
    justifyContent: "center",
    gap: 20
  },

  weatherSideInfosContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 8
  },

  weatherSideInfos: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: maxWidth
  },

  date: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    color: defaultStyle.Colors.textWhite
  }
})
