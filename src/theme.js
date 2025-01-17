import { Platform } from 'react-native'

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#384B70',
    primary: '#507687',
    backgroundColor: '#f9f9f9',
    cardBackground: '#FCFAEE',
    border: '#e0e0e0',
    red: '#B8001F',
    buttonText: '#ffffff',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 24,
  },
  fonts: {
    main:
      Platform.OS === 'android'
        ? 'Roboto'
        : Platform.OS === 'ios'
        ? 'Arial'
        : 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
}

export default theme
