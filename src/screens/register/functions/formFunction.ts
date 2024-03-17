import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/shared/hooks"
import { IRegisterBody, IUseRegisterForm } from "@/shared/types"
import { registerSchema } from "@/shared/utils"

export const handleForm = (): IUseRegisterForm => {
  const { register, handleSubmit, formState, reset, control } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
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
  navigation
}: IRegisterBody): Promise<void> => {
  try {
    const response = await useAuth.post("/user/register", body)

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
