import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/shared/hooks"
import { ICheckEmailForm, ICheckEmailBody } from "@/shared/types"
import { CardFormCheckEmailSchema } from "@/shared/utils"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const handleForm = (): ICheckEmailForm => {
  const { register, handleSubmit, formState, reset, control } = useForm({
    mode: "all",
    resolver: yupResolver(CardFormCheckEmailSchema),
    defaultValues: {
      email: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset, control }
}

export const submitData = async ({
  reset,
  body,
  navigation
}: ICheckEmailBody): Promise<void> => {
  try {
    const response = await useAuth.post("/recover-password/check-email", body)
    if (!response) throw new Error("Request Fail")
    if (response.data.isError) {
      alert(response.data.error)
      return
    }

    await AsyncStorage.setItem(
      "emailToken",
      JSON.stringify(response.data.content.emailToken)
    )

    navigation.navigate("NewPassword")
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
