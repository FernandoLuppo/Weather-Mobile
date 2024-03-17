import React from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { CardForm } from "../../../styles/CardForm.styles"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "@/routes/StackRoutes"
import { Controller } from "react-hook-form"
import { ICheckEmailFormValues } from "@/shared/types"
import { formStyles } from "@/styles"
import { handleForm, submitData } from "./functions"
import { Input } from "@/shared/components"

const CheckEmail = () => {
  const navigation = useNavigation<StackTypes>()

  const { errors, handleSubmit, isSubmitting, register, reset, control } =
    handleForm()
  const handleSubmitData = async (
    body: ICheckEmailFormValues
  ): Promise<void> => {
    await submitData({ reset, navigation, body })
  }

  return (
    <ScrollView contentContainerStyle={CardForm.mainContainer}>
      <View>
        <Text style={CardForm.title}>Forgot Password</Text>
        <View style={CardForm.titleBorderBottom}></View>
      </View>

      <View style={CardForm.card}>
        <Text style={CardForm.cardText}>
          Enter your registered email and we will send you a token so you can
          reset your password.
        </Text>

        <View>
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  register={register}
                  name="email"
                  key="email"
                  keyboardType="email-address"
                  autoFocus
                  placeholder="Email Address"
                  textColor="black"
                />
              )}
            />

            {errors ? (
              <Text style={formStyles.inputErrors}>
                {errors.email?.message}
              </Text>
            ) : null}
          </View>
        </View>
        <Button
          title="Send Email"
          onPress={handleSubmit(handleSubmitData)}
          disabled={isSubmitting}
        />
      </View>
    </ScrollView>
  )
}

export default CheckEmail
