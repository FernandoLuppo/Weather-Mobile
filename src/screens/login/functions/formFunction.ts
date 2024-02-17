import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "@/hooks"
import { useForm } from "react-hook-form"
import { loginSchema } from "../../../utils"
import type { ILoginFormValues, ISubmitData, IUseLoginForm } from "@/types"

interface ILoginBody extends ISubmitData {
  body: ILoginFormValues
  reset: () => void
}

export const handleForm = (): IUseLoginForm => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const { errors, isSubmitting } = formState

  return { register, handleSubmit, errors, isSubmitting, reset }
}

export const submitData = async ({
  reset,
  body
}: ILoginBody): Promise<void> => {
  try {
    const { content, error, isError } = await useAuth({
      url: "/user/login",
      method: "POST",
      body
    })

    if (isError) {
      alert(error)
      return
    }

    localStorage.setItem("userInfos", JSON.stringify(content))
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}
