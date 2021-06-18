import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const ThemeProvider = (props) => <MuiThemeProvider theme={theme} {...props} />

export default ThemeProvider
