import { useAuth } from "@/shared/hooks"
import { ITokens } from "@/shared/types"

export const getWeatherInfos = async (
  city: string = "São Paulo",
  tokens: {
    accessToken: string
    refreshToken: string
  },
  setTokens: React.Dispatch<React.SetStateAction<ITokens>>
) => {
  if (city.length < 3) return

  try {
    const response = await useAuth.postWithTokens(
      "/weather/location",
      { city },
      tokens
    )

    if (!response) throw new Error("Request Fail")
    if (response.data.isError) return

    return response.data.content
  } catch (error) {
    setTokens({ accessToken: "", refreshToken: "" })
    console.log(error)
  }
}
