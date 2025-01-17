import { Button, View, StyleSheet } from 'react-native'

import ShowCountry from './ShowCountry'
import Text from './Text'
import theme from '../theme'

const CountryList = ({
  query,
  filteredCountries,
  selectedCountry,
  setFilteredCountries,
  setSelectedCountry,
}) => {
  return (
    <>
      {!query && <Text>Start typing to search for a country</Text>}
      {query && filteredCountries.length === 0 && !selectedCountry && (
        <Text>No matches found</Text>
      )}
      {query && filteredCountries.length > 10 && (
        <Text>Too many matches, specify another filter</Text>
      )}
      {query &&
        filteredCountries.length <= 10 &&
        filteredCountries.length > 1 &&
        filteredCountries.map((country) => (
          <View key={country.name.common} style={styles.card}>
            <Text>{country.name.common}</Text>
            <Button
              title='Show'
              color={theme.colors.red}
              onPress={() => {
                setSelectedCountry(country)
                setFilteredCountries([])
              }}
            />
          </View>
        ))}
      {query && selectedCountry && (
        <ShowCountry selectedCountry={selectedCountry} />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.cardBackground,
    padding: theme.spacing.medium,
    borderRadius: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.small,
  },
})

export default CountryList
