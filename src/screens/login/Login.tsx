import React, { useContext } from "react"
import { View, Text, Image, Button, ScrollView } from "react-native"
import { formStyles } from "../../styles"
import { handleForm, submitData } from "./functions"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "@/routes/StackRoutes"
import { Controller } from "react-hook-form"
import { ILoginFormValues } from "@/shared/types"
import { AuthContext } from "@/shared/context"
import { Input } from "@/shared/components"
import { SafeAreaView } from "react-native-safe-area-context"
import { SafeAreaViewStyles } from "@/styles/SafeAreaView.styles"

const Login = () => {
  const navigation = useNavigation<StackTypes>()
  const { setStorageTokens } = useContext(AuthContext)

  const { errors, handleSubmit, isSubmitting, register, reset, control } =
    handleForm()
  const handleSubmitData = async (body: ILoginFormValues): Promise<void> => {
    await submitData({ reset, navigation, body, setStorageTokens })
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
            <Text style={formStyles.text}>Please Login to your account</Text>
          </View>
          <View>
            <View style={formStyles.inputContainer}>
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

              <Text
                onPress={() => navigation.navigate("CheckEmail")}
                style={formStyles.link}
              >
                Forget my password.
              </Text>
            </View>
            <View style={formStyles.buttonContainer}>
              <Button
                title="Login"
                onPress={handleSubmit(handleSubmitData)}
                disabled={isSubmitting}
              />
              <Text
                style={formStyles.secondaryButton}
                onPress={() => navigation.navigate("Register")}
              >
                Register
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Login
