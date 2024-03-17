import { StackTypes } from "@/routes/StackRoutes"

import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface IRegisterFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface IUseRegisterForm {
  register: UseFormRegister<IRegisterFormValues>
  handleSubmit: UseFormHandleSubmit<IRegisterFormValues>
  errors: FieldErrors<IRegisterFormValues>
  isSubmitting: boolean
  reset: () => void
  control: Control<IRegisterFormValues, any, IRegisterFormValues>
}

export interface IRegisterBody {
  body: IRegisterFormValues
  reset: () => void
  navigation: StackTypes
}
