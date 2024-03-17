import { IUserInfosFormValues } from "@/shared/types"
import { formStyles } from "@/styles"
import { CardForm } from "@/styles/CardForm.styles"
import React, { useContext } from "react"
import { Controller } from "react-hook-form"
import { View, Text, ScrollView, Button } from "react-native"
import { handleForm, submitData } from "./functions/formFunction"
import { AuthContext } from "@/shared/context"
import { Input } from "@/shared/components"

const UserInfos = () => {
  const { tokens } = useContext(AuthContext)
  const { errors, handleSubmit, isSubmitting, register, reset, control } =
    handleForm()
  const handleSubmitData = async (
    body: IUserInfosFormValues
  ): Promise<void> => {
    await submitData({ reset, body, tokens })
  }

  return (
    <ScrollView contentContainerStyle={CardForm.mainContainer}>
      <View style={CardForm.card}>
        <Text style={CardForm.cardText}>Change your information where.</Text>

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
                />
              )}
            />

            {errors ? (
              <Text style={formStyles.inputErrors}>
                {errors.email?.message}
              </Text>
            ) : null}
          </View>

          <View>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  register={register}
                  name="name"
                  key="name"
                  autoFocus
                  placeholder="Name"
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
          title="Save"
          onPress={handleSubmit(handleSubmitData)}
          disabled={isSubmitting}
        />
      </View>
    </ScrollView>
  )
}
export default UserInfos
