import { ITokens } from "@/shared/types"
import { createContext } from "react"

interface IAuthContext {
  setStorageTokens: (tokens: [string]) => void
  getStorageTokens: () => Promise<void>
  tokens: {
    accessToken: string
    refreshToken: string
  }
  setTokens: React.Dispatch<React.SetStateAction<ITokens>>
}

export const AuthContext = createContext<IAuthContext>({
  setStorageTokens: () => {},
  getStorageTokens: async () => {
    await new Promise<void>(resolve => resolve())
  },
  tokens: {
    accessToken: "",
    refreshToken: ""
  },
  setTokens: () => {}
})
