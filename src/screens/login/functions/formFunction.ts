import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/shared/hooks"
import { ILoginBody, IUseLoginForm } from "@/shared/types"
import { loginSchema } from "@/shared/utils"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const handleForm = (): IUseLoginForm => {
  const { register, handleSubmit, formState, reset, control } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset, control }
}

export const submitData = async ({
  reset,
  body,
  navigation,
  setStorageTokens
}: ILoginBody): Promise<void> => {
  try {
    const response = await useAuth.post("/user/login", body)

    if (!response) throw new Error("Request Fail")
    if (response.data.isError) {
      alert(response.data.error)
      return
    }

    setStorageTokens(response.headers["set-cookie"])
    await AsyncStorage.setItem(
      "userInfos",
      JSON.stringify(response.data.content)
    )

    navigation.navigate("Home")
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
