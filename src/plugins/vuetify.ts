// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440
    }
  },
  theme: {
    defaultTheme: 'main',
    themes: {
      main: {
        dark: false,
        colors: {
          'black': '#000000',
          'white': '#ffffff',
          'background-main': '#4E6F99',
          'background-secondary': '#27374D'
        }
      }
    }
  }
})
