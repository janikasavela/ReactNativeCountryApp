import { useEffect, useState } from 'react'
import Constants from 'expo-constants'

const apiKey = Constants.expoConfig.extra.apiKey

const fetchWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  console.log('DATA', data)
  return data
}

const useWeather = (lat, lon) => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const weatherData = await fetchWeather(lat, lon)
        setWeather(weatherData)
      } catch (err) {
        setError(err)
        console.error('Error fetching weather data:', err)
      } finally {
        setLoading(false)
      }
    }

    if (lat && lon) {
      fetchData()
    }
  }, [lat, lon])

  return { weather, loading, error }
}

export default useWeather
