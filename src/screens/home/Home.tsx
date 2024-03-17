import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { formStyles } from "@/styles"
import { HomeStyles } from "./home.styles"
import { getWeatherInfos } from "./functions"
import { AuthContext } from "@/shared/context"
import { chosenIcon } from "./utils"
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons"

interface WeatherData {
  weatherAPI: {
    name: string
    sys: {
      country: string
    }
    main: {
      temp: number
      humidity: number
      feels_like: number
    }
    weather: {
      description: string
      icon: string
    }[]
  }
  flags: string
}

const Home = (): React.JSX.Element => {
  const { tokens, setTokens } = useContext(AuthContext)
  const [data, setData] = useState<WeatherData | null>(null)
  const [weatherIcon, setWeatherIcon] = useState("")

  const getInfos = async (city: string) => {
    const response = await getWeatherInfos(city, tokens, setTokens)
    setData(response)
  }

  useEffect(() => {
    getInfos("São Paulo")
  }, [])

  const handleSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    getInfos(event.nativeEvent.text)
    event.nativeEvent.text = ""
  }

  useEffect(() => {
    if (!data) return
    setWeatherIcon(chosenIcon(data?.weatherAPI.weather[0].icon))
  }, [data])

  return (
    <ScrollView contentContainerStyle={formStyles.mainContainer}>
      <View style={HomeStyles.searchContentContainer}>
        <View style={HomeStyles.cityContainer}>
          <View>
            <TextInput
              style={HomeStyles.input}
              placeholder="Search a city"
              keyboardType="web-search"
              placeholderTextColor="#a4a4a4"
              onSubmitEditing={handleSubmitEditing}
            />
          </View>

          {data && (
            <View style={HomeStyles.location}>
              <Text style={HomeStyles.text}>
                {data?.weatherAPI.name}, {data?.weatherAPI.sys.country}
              </Text>
              <Image
                source={{ uri: data.flags }}
                alt="Country flag"
                width={35}
                height={35}
              />
            </View>
          )}
        </View>

        {data && (
          <>
            <View style={HomeStyles.weatherContainer}>
              {weatherIcon && (
                <Image
                  source={weatherIcon}
                  alt="Weather icon"
                  style={HomeStyles.weatherImage}
                  resizeMode="contain"
                />
              )}
              <Text style={HomeStyles.weatherText}>
                {data.weatherAPI.main.temp.toFixed(0)}ºC
              </Text>
              <Text style={HomeStyles.weatherText}>
                {data?.weatherAPI.weather[0].description}
              </Text>
            </View>

            <View style={HomeStyles.weatherSideInfosContainer}>
              <Text style={HomeStyles.date}>
                {new Date().toString().split(":")[0].slice(0, 15)}
              </Text>

              <View style={HomeStyles.weatherSideInfos}>
                <Text style={HomeStyles.text}>Humidity</Text>

                <View style={HomeStyles.weatherSideInfosContent}>
                  <Text style={HomeStyles.text}>
                    {data?.weatherAPI.main.humidity}%
                  </Text>

                  <SimpleLineIcons
                    name="drop"
                    size={20}
                    color="#fff"
                    style={{ marginRight: -3 }}
                  />
                </View>
              </View>

              <View style={HomeStyles.weatherSideInfos}>
                <Text style={HomeStyles.text}>Feels like</Text>

                <View style={HomeStyles.weatherSideInfosContent}>
                  <Text style={HomeStyles.text}>
                    {data?.weatherAPI.main.feels_like.toFixed(0)}ºC
                  </Text>
                  <FontAwesome
                    name="thermometer-three-quarters"
                    size={20}
                    color="#fff"
                  />
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  )
}
export default Home
