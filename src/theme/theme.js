import { createMuiTheme } from '@material-ui/core/styles'
import { green, red, cyan } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: green,
    action: red,
    green,
    default: cyan,
  },
})

export default theme