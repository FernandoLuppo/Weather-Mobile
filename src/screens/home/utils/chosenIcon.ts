export const chosenIcon = (currentIcon: string): string => {
  const chosenIcon: Record<string, string> = {
    "01n": require("../../../../public/icons/sun-weather.png"),
    "01d": require("../../../../public/icons/sun-weather.png"),
    "02n": require("../../../../public/icons/sun-cloud.png"),
    "02d": require("../../../../public/icons/sun-cloud.png"),
    "03n": require("../../../../public/icons/cloud.png"),
    "03d": require("../../../../public/icons/cloud.png"),
    "04n": require("../../../../public/icons/clouds.png"),
    "04d": require("../../../../public/icons/clouds.png"),
    "09n": require("../../../../public/icons/rain.png"),
    "09d": require("../../../../public/icons/rain.png"),
    "10n": require("../../../../public/icons/rain-sun.png"),
    "10d": require("../../../../public/icons/rain-sun.png"),
    "11n": require("../../../../public/icons/thunder.png"),
    "11d": require("../../../../public/icons/thunder.png"),
    "13n": require("../../../../public/icons/snow.png"),
    "13d": require("../../../../public/icons/snow.png"),
    "50n": require("../../../../public/icons/fog.png"),
    "50d": require("../../../../public/icons/fog.png")
  }

  return chosenIcon[currentIcon]
}
