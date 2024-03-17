import { useCallback, useState } from "react"
import { AuthContext } from "./AuthContext"
import { getTokens } from "@/shared/utils"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ITokens } from "@/shared/types"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [tokens, setTokens] = useState<ITokens>({
    accessToken: "",
    refreshToken: ""
  })

  const setStorageTokens = useCallback(async (tokens: [string]) => {
    const { content, error, isError } = getTokens(tokens)

    try {
      if (isError) throw new Error(error[0])

      setTokens(content)
      await AsyncStorage.setItem("tokens", JSON.stringify(content))
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getStorageTokens = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tokens")
      const storageTokens = jsonValue != null ? JSON.parse(jsonValue) : null
      if (storageTokens === null) throw new Error("Missing Tokens.")

      setTokens(storageTokens)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ setStorageTokens, getStorageTokens, tokens, setTokens }}
    >
      {children}
    </AuthContext.Provider>
  )
}
