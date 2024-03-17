import { api } from "../service"
import { IResponse, IResult } from "../types"

export const useAuth = {
  get: async (url: string): Promise<IResult> => {
    const response: IResult = { content: {}, error: [""], isError: false }
    try {
      return await api.get(url)
    } catch (error) {
      console.log(error)
      response.isError = true
      response.error = [error as string]
      return response
    }
  },

  post: async (url: string, data: unknown): Promise<IResponse | void> => {
    try {
      return await api.post(url, data)
    } catch (error) {
      console.log(error)
    }
  },

  postWithTokens: async (
    url: string,
    data: unknown,
    tokens: {
      accessToken: string
      refreshToken: string
    }
  ): Promise<IResponse | void> => {
    try {
      return await api.post(url, data, {
        headers: { Authorization: JSON.stringify(tokens) }
      })
    } catch (error) {
      console.log(error)
    }
  },

  patch: async (url: string, data: unknown): Promise<IResponse | void> => {
    try {
      return await api.patch(url, data)
    } catch (error) {
      console.log(error)
    }
  },

  patchWithTokens: async (
    url: string,
    data: unknown,
    tokens: {
      accessToken: string
      refreshToken: string
    }
  ): Promise<IResponse | void> => {
    try {
      return await api.patch(url, data, {
        headers: { Authorization: JSON.stringify(tokens) }
      })
    } catch (error) {
      console.log(error)
    }
  },

  remove: async (url: string): Promise<IResult> => {
    const response: IResult = { content: {}, error: [""], isError: false }
    try {
      return await api.delete(url)
    } catch (error) {
      console.log(error)
      response.isError = true
      response.error = [error as string]
      return response
    }
  }
}
