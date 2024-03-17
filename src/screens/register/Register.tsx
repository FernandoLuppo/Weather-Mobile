import React from "react"
import { View, Text, Image, Button, ScrollView } from "react-native"
import { handleForm, submitData } from "./functions"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "@/routes/StackRoutes"
import { Controller } from "react-hook-form"
import { IRegisterFormValues } from "@/shared/types"
import { formStyles } from "@/styles"
import { Input } from "@/shared/components"
import { SafeAreaViewStyles } from "@/styles/SafeAreaView.styles"
import { SafeAreaView } from "react-native-safe-area-context"

const Login = () => {
  const navigation = useNavigation<StackTypes>()

  const { errors, handleSubmit, isSubmitting, register, reset, control } =
    handleForm()
  const handleSubmitData = async (body: IRegisterFormValues): Promise<void> => {
    await submitData({ reset, navigation, body })
  }

  return (
    <SafeAreaView style={SafeAreaViewStyles.safeAreaView}>
      <View style={SafeAreaViewStyles.container}>
        <ScrollView contentContainerStyle={formStyles.mainContainer}>
          <View style={formStyles.titleContainer}>
            <View style={formStyles.imageContainer}>
              <Image
                source={require("../../../public/images/sunLogo.png")}
                style={formStyles.image}
              />
              <Text style={formStyles.title}>Welcome!</Text>
            </View>
            <Text style={formStyles.text}>Please Create your account</Text>
          </View>
          <View>
            <View style={formStyles.inputContainer}>
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
                    {errors.name?.message}
                  </Text>
                ) : null}
              </View>

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
                    {errors.password?.message}
                  </Text>
                ) : null}
              </View>
            </View>
            <View style={formStyles.buttonContainer}>
              <Button
                title="Register"
                onPress={handleSubmit(handleSubmitData)}
                disabled={isSubmitting}
              />
              <Text
                style={formStyles.secondaryButton}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Login
