import { api } from "@/service"

export const get = async (url: string) => {
  try {
    return await api.get(url)
  } catch (error) {
    console.log(error)
  }
}

export const post = async (url: string, data: unknown) => {
  try {
    return await api.post(url, data)
  } catch (error) {
    console.log(error)
  }
}

export const patch = async (url: string, data: unknown) => {
  try {
    return await api.patch(url, data)
  } catch (error) {
    console.log(error)
  }
}

export const remove = async (url: string) => {
  try {
    return await api.delete(url)
  } catch (error) {
    console.log(error)
  }
}
