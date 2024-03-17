import { StackTypes } from "@/routes/StackRoutes"
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface INewPasswordFormValues {
  code: string
  password: string
  confirmPassword: string
}

export interface INewPasswordForm {
  register: UseFormRegister<INewPasswordFormValues>
  handleSubmit: UseFormHandleSubmit<INewPasswordFormValues>
  errors: FieldErrors<INewPasswordFormValues>
  isSubmitting: boolean
  reset: () => void
  control: Control<INewPasswordFormValues, any, INewPasswordFormValues>
}

export interface INewPasswordBody {
  body: INewPasswordFormValues
  reset: () => void
  navigation: StackTypes
}
