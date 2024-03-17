import { StackTypes } from "@/routes/StackRoutes"
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface ILoginFormValues {
  email: string
  password: string
}

export interface IUseLoginForm {
  register: UseFormRegister<ILoginFormValues>
  handleSubmit: UseFormHandleSubmit<ILoginFormValues>
  errors: FieldErrors<ILoginFormValues>
  isSubmitting: boolean
  reset: () => void
  control: Control<ILoginFormValues, any, ILoginFormValues>
}

export interface ILoginBody {
  body: ILoginFormValues
  reset: () => void
  navigation: StackTypes
  setStorageTokens: (tokens: [string]) => void
}
