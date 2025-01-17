import { TextInput, StyleSheet } from 'react-native'

import theme from '../theme'

const QueryInput = ({ query, handleChange }) => {
  return (
    <TextInput
      value={query}
      placeholder='Start typing a country you want to search'
      onChangeText={handleChange}
      style={styles.input}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: theme.spacing.small,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.spacing.small,
    backgroundColor: theme.colors.cardBackground,
    fontSize: theme.fontSizes.body,
    marginBottom: theme.spacing.medium,
    marginTop: theme.spacing.large
  },
})

export default QueryInput
