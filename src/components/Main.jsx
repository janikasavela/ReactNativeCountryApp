import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

import QueryInput from './Input'
import CountryList from './CountryList'
import { useState } from 'react'
import useCountries from '../hooks/useCountries'
import theme from '../theme'

const Main = () => {
  const [query, setQuery] = useState('')
  const [countries] = useCountries()

  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  function handleChange(text) {
    setQuery(text)

    if (text === '') {
      setFilteredCountries([])
      setSelectedCountry(null)
    } else {
      const newFilteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(text.toLowerCase())
      )

      console.log(newFilteredCountries)

      if (newFilteredCountries.length === 1)
        setSelectedCountry(newFilteredCountries[0])
      else setSelectedCountry(null)

      setFilteredCountries(newFilteredCountries)
    }
  }

  return (
    <View style={styles.container}>
      <QueryInput query={query} handleChange={handleChange} />
      <CountryList
        query={query}
        filteredCountries={filteredCountries}
        selectedCountry={selectedCountry}
        setFilteredCountries={setFilteredCountries}
        setSelectedCountry={setSelectedCountry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
  },
})

export default Main
