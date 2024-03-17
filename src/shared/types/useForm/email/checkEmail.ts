import { StackTypes } from "@/routes/StackRoutes"
import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface ICheckEmailFormValues {
  email: string
}

export interface ICheckEmailForm {
  register: UseFormRegister<ICheckEmailFormValues>
  handleSubmit: UseFormHandleSubmit<ICheckEmailFormValues>
  errors: FieldErrors<ICheckEmailFormValues>
  isSubmitting: boolean
  reset: () => void
  control: Control<ICheckEmailFormValues, any, ICheckEmailFormValues>
}

export interface ICheckEmailBody {
  body: ICheckEmailFormValues
  reset: () => void
  navigation: StackTypes
}
