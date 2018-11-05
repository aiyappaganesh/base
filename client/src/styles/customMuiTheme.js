import {
  blue500,
  blueGrey700,
  orange200,
  orange400,
  grey300,
  grey400,
  orange500,
  white,
  darkBlack,
  fullBlack,
  red500,
  pink500,
  lightGreen500,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export default {
  spacing,
  fontFamily: 'PT Sans, sans-serif',
  color: fullBlack,
  palette: {
    primary1Color: blue500,
    primary2Color: blueGrey700,
    primary3Color: grey400,
    accent1Color: 'rgba(4, 147, 114, 0.2)',
    accent2Color: 'rgba(4, 147, 114, 0.4)',
    accent3Color: 'rgba(4, 147, 114, 0.5)',
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    red1Color: red500,
    pink1Color: pink500,
    lightGreen1Color: lightGreen500
  },
}
