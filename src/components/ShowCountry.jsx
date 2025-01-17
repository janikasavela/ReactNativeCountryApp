import { View, Image, StyleSheet } from 'react-native'

import Text from './Text'
import theme from '../theme'

const ShowCountry = ({ selectedCountry }) => {
  console.log(selectedCountry.flags.svg)
  return (
    <View style={styles.container}>
      <Text fontWeight='bold' fontSize='heading' color='textSecondary'>
        {selectedCountry.name.common}
      </Text>
      <Text>Capital: {selectedCountry.capital[0]}</Text>
      <Text>Region: {selectedCountry.region}</Text>
      <Text>Population: {selectedCountry.population}</Text>
      <View style={styles.languagesContainer}>
        <Text color='primary'>Languages: </Text>
        {Object.values(selectedCountry.languages).map((lang) => (
          <View key={lang}>
            <Text>{lang}</Text>
          </View>
        ))}
      </View>
      <Image
        source={{ uri: selectedCountry.flags.png }}
        style={styles.flag}
        alt={`Flag of ${selectedCountry.name.common}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginTop: theme.spacing.large,
  },
  languagesContainer: {
    marginTop: theme.spacing.small,
  },
  flag: {
    height: 250,
    width: '100%',
    marginTop: theme.spacing.medium,
    borderRadius: theme.spacing.small,
  },
})

export default ShowCountry
