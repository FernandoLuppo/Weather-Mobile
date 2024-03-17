import { InputStyles } from "./input.styles"
import { KeyboardTypeOptions, TextInput } from "react-native"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (...event: any[]) => void
  value: string
  register: any
  name: string
  keyboardType?: KeyboardTypeOptions | undefined
  secureTextEntry?: boolean | undefined
  textColor?: "black" | "white"
}

export const Input = ({
  register,
  name,
  onChange,
  value,
  keyboardType = "default",
  secureTextEntry,
  textColor = "white",
  ...props
}: InputProps) => {
  return (
    <>
      <TextInput
        {...register(name)}
        onChangeText={onChange}
        value={value}
        placeholderTextColor="#a4a4a4"
        underlineColorAndroid="#e2e2e2"
        style={
          textColor === "white" ? InputStyles.input : InputStyles.inputBlack
        }
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </>
  )
}
