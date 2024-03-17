import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/shared/hooks"
import { INewPasswordForm, INewPasswordBody } from "@/shared/types"
import { CardFormNewPasswordSchema } from "@/shared/utils"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const handleForm = (): INewPasswordForm => {
  const { register, handleSubmit, formState, reset, control } = useForm({
    mode: "all",
    resolver: yupResolver(CardFormNewPasswordSchema),
    defaultValues: {
      code: "",
      password: "",
      confirmPassword: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset, control }
}

export const submitData = async ({
  reset,
  body,
  navigation
}: INewPasswordBody): Promise<void> => {
  try {
    const jsonValue = await AsyncStorage.getItem("emailToken")
    const storageEmailToken = jsonValue != null ? JSON.parse(jsonValue) : null

    const response = await useAuth.patch("/recover-password/new-password", {
      ...body,
      emailToken: storageEmailToken
    })
    if (!response) throw new Error("Request Fail")
    if (response.data.isError) {
      alert(response.data.error)
      return
    }

    navigation.navigate("Login")
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
