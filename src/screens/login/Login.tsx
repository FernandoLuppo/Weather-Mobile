import React from "react"
import { View, Text, Image, TextInput, Button } from "react-native"
import { styles } from "./login.styles"

const Login = () => {
  const error = false

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../public/images/sunLogo.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Welcome!</Text>
        </View>
        <Text style={styles.text}>Please Login to your account</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              autoFocus
              editable
              multiline
              numberOfLines={1}
              placeholder="E-mail: your_email@gmail.com"
              placeholderTextColor="#a4a4a4"
              underlineColorAndroid="#e2e2e2"
              style={styles.input}
            />
            {error ? <Text>{error}</Text> : null}
          </View>

          <View>
            <TextInput
              numberOfLines={1}
              placeholder="Password: ********"
              placeholderTextColor="#a4a4a4"
              underlineColorAndroid="#e2e2e2"
              style={styles.input}
              secureTextEntry
            />
            {error ? <Text>{error}</Text> : null}
          </View>

          <Text onPress={() => {}} style={styles.link}>
            Forget my password.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Login" />
          <Text onPress={() => {}} style={styles.registerButton}>
            Register
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Login
