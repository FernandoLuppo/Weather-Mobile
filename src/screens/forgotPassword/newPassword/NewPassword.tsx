import React from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "@/routes/StackRoutes"
import { Controller } from "react-hook-form"
import { INewPasswordFormValues } from "@/shared/types"
import { formStyles } from "@/styles"
import { CardForm } from "@/styles/CardForm.styles"
import { handleForm, submitData } from "./function"
import { NewPasswordStyles } from "./newPassword.styles"
import { Input } from "@/shared/components"
import { SafeAreaViewStyles } from "@/styles/SafeAreaView.styles"
import { SafeAreaView } from "react-native-safe-area-context"

const NewPassword = () => {
  const navigation = useNavigation<StackTypes>()

  const { errors, handleSubmit, isSubmitting, register, reset, control } =
    handleForm()
  const handleSubmitData = async (
    body: INewPasswordFormValues
  ): Promise<void> => {
    await submitData({ reset, navigation, body })
  }

  return (
    <SafeAreaView style={SafeAreaViewStyles.safeAreaView}>
      <View style={SafeAreaViewStyles.container}>
        <ScrollView contentContainerStyle={CardForm.mainContainer}>
          <View>
            <Text style={CardForm.title}>Forgot Password</Text>
            <View style={CardForm.titleBorderBottom}></View>
          </View>

          <View style={NewPasswordStyles.card}>
            <Text style={CardForm.cardText}>
              Complete the fields below to create a new password.
            </Text>

            <View>
              <View>
                <Controller
                  control={control}
                  name="code"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      register={register}
                      name="code"
                      key="code"
                      keyboardType="number-pad"
                      autoFocus
                      placeholder="Insert code"
                    />
                  )}
                />

                {errors ? (
                  <Text style={formStyles.inputErrors}>
                    {errors.code?.message}
                  </Text>
                ) : null}
              </View>

              <View>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      register={register}
                      name="password"
                      key="password"
                      placeholder="Password"
                      secureTextEntry
                    />
                  )}
                />

                {errors ? (
                  <Text style={formStyles.inputErrors}>
                    {errors.password?.message}
                  </Text>
                ) : null}
              </View>

              <View>
                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      onChange={onChange}
                      value={value}
                      register={register}
                      name="confirmPassword"
                      key="confirmPassword"
                      placeholder="Confirm your password"
                      secureTextEntry
                    />
                  )}
                />

                {errors ? (
                  <Text style={formStyles.inputErrors}>
                    {errors.confirmPassword?.message}
                  </Text>
                ) : null}
              </View>
            </View>

            <Button
              title="Save New Password"
              onPress={handleSubmit(handleSubmitData)}
              disabled={isSubmitting}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default NewPassword
