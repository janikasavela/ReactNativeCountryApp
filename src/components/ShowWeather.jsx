import { View, Text, Image, StyleSheet } from 'react-native'
import useWeather from '../hooks/useWeather'

const ShowWeather = ({ selectedCountry }) => {
  const { weather, loading, error } = useWeather(
    selectedCountry.capitalInfo.latlng[0],
    selectedCountry.capitalInfo.latlng[1]
  )

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error fetching weather data!</Text>
  if (!weather) return null

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString()
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather in {selectedCountry.capital}</Text>
      <Text style={styles.temp}>
        Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C
      </Text>
      <Text style={styles.feelsLike}>
        Feels Like: {(weather.main.feels_like - 273.15).toFixed(2)} °C
      </Text>
      <Text style={styles.wind}>Wind Speed: {weather.wind.speed} m/s</Text>
      <Text style={styles.cloudCoverage}>
        Cloud Coverage: {weather.clouds.all} %
      </Text>
      <Text style={styles.sunrise}>Sunrise: {sunrise}</Text>
      <Text style={styles.sunset}>Sunset: {sunset}</Text>

      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temp: {
    fontSize: 18,
    marginBottom: 5,
  },
  tempRange: {
    fontSize: 16,
    marginBottom: 5,
  },
  feelsLike: {
    fontSize: 16,
    marginBottom: 5,
  },
  humidity: {
    fontSize: 16,
    marginBottom: 5,
  },
  pressure: {
    fontSize: 16,
    marginBottom: 5,
  },
  wind: {
    fontSize: 16,
    marginBottom: 5,
  },
  windDirection: {
    fontSize: 16,
    marginBottom: 5,
  },
  cloudCoverage: {
    fontSize: 16,
    marginBottom: 5,
  },
  sunrise: {
    fontSize: 16,
    marginBottom: 5,
  },
  sunset: {
    fontSize: 16,
    marginBottom: 10,
  },
  icon: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
})

export default ShowWeather
