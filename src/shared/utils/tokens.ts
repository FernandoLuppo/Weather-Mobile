import { IResult } from "../types"

export const getTokens = (tokens: [string]): IResult => {
  const result: IResult = { content: {}, error: [""], isError: false }

  if (!tokens) {
    result.isError = true
    result.error = ["Missing tokens."]
    return result
  }

  tokens.forEach(token => {
    const accessTokenMatch = token.match(/accessToken=([^;]+)/)
    const refreshTokenMatch = token.match(/refreshToken=([^;]+)/)

    if (!(accessTokenMatch && refreshTokenMatch)) {
      result.isError = true
      result.error = ["Invalid tokens."]
      return result
    }

    result.content = {
      accessToken: accessTokenMatch[1],
      refreshToken: refreshTokenMatch[1]
    }
  })

  return result
}
