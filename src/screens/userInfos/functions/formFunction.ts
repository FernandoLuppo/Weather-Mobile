import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useAuth } from "@/shared/hooks"
import { IUserInfosForm, IUserInfosBody } from "@/shared/types"
import { userInfosSchema } from "@/shared/utils"
export const handleForm = (): IUserInfosForm => {
  const { register, handleSubmit, formState, reset, control } = useForm({
    mode: "all",
    resolver: yupResolver(userInfosSchema),
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
  tokens
}: IUserInfosBody): Promise<void> => {
  try {
    const response = await useAuth.patchWithTokens(
      "/user/update-infos",
      body,
      tokens
    )

    if (!response) throw new Error("Request Fail")
    if (response.data.isError) {
      alert(response.data.error)
      return
    }
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
