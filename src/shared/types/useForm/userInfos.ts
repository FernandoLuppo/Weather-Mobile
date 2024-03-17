import type {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form"

export interface IUserInfosFormValues {
  name: string
  email: string
}

export interface IUserInfosForm {
  register: UseFormRegister<IUserInfosFormValues>
  handleSubmit: UseFormHandleSubmit<IUserInfosFormValues>
  errors: FieldErrors<IUserInfosFormValues>
  isSubmitting: boolean
  reset: () => void
  control: Control<IUserInfosFormValues, any, IUserInfosFormValues>
}

export interface IUserInfosBody {
  body: IUserInfosFormValues
  reset: () => void
  tokens: {
    accessToken: string
    refreshToken: string
  }
}
