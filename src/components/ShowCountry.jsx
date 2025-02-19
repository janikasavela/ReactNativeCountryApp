import { View, Image, StyleSheet, Linking, ScrollView } from 'react-native'
import Text from './Text'
import theme from '../theme'

import ShowWeather from './ShowWeather'

const ShowCountry = ({ selectedCountry }) => {
  const {
    name,
    capital,
    region,
    population,
    languages,
    currencies,
    idd,
    timezones,
    borders,
    maps,
    flags,
    coatOfArms,
  } = selectedCountry

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text fontWeight='bold' fontSize='heading' color='textSecondary'>
          {name.common} ({name.official})
        </Text>
        <Text style={styles.text}>Capital: {capital[0]}</Text>
        <Text>Region: {region}</Text>
        <Text>Population: {population.toLocaleString()}</Text>
        <Text>Timezone(s): {timezones.join(', ')}</Text>
        <Text>
          Phone code: {idd.root}
          {idd.suffixes.join(', ')}
        </Text>

        <View style={styles.section}>
          <Text fontWeight='bold'>Languages:</Text>
          {Object.values(languages).map((lang) => (
            <Text key={lang}>- {lang}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text fontWeight='bold'>Currency:</Text>
          {Object.values(currencies).map((currency) => (
            <Text key={currency.name}>
              {currency.name} ({currency.symbol})
            </Text>
          ))}
        </View>

        {borders && borders.length > 0 && (
          <View style={styles.section}>
            <Text fontWeight='bold'>Neighboring countries:</Text>
            <Text>{borders.join(', ')}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text
            color='red'
            fontWeight='bold'
            onPress={() => Linking.openURL(maps.googleMaps)}
          >
            View on Google Maps
          </Text>
        </View>

        <Image
          source={{ uri: flags.png }}
          style={styles.flag}
          alt={`Flag of ${name.common}`}
        />
        {coatOfArms && (
          <Image
            source={{ uri: coatOfArms.png }}
            style={styles.coatOfArms}
            resizeMode='contain'
            alt={`Coat of arms of ${name.common}`}
          />
        )}
        <ShowWeather selectedCountry={selectedCountry} />
      </View>
    </ScrollView>
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
  section: {
    marginTop: theme.spacing.small,
  },
  flag: {
    height: 250,
    width: '100%',
    marginTop: theme.spacing.medium,
    borderRadius: theme.spacing.small,
  },
  coatOfArms: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: theme.spacing.medium,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  text: {
    marginTop: 10,
  },
})

export default ShowCountry
