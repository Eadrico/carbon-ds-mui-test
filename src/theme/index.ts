import { createTheme } from '@mui/material/styles'
import { carbonColors } from './tokens'
import { carbonTypography } from './typography'
import { carbonComponents } from './components'

export const carbonTheme = createTheme({
  // ─── Palette ───────────────────────────────────────────────────────
  palette: {
    mode: 'light',
    primary: {
      main: carbonColors.interactive01,
      dark: carbonColors.interactive01Hover,
      contrastText: '#ffffff',
    },
    secondary: {
      main: carbonColors.interactive02,
      dark: '#333333',
      contrastText: '#ffffff',
    },
    error: {
      main: carbonColors.support01,
      light: carbonColors.support01Light,
    },
    success: {
      main: carbonColors.support02,
      light: carbonColors.support02Light,
    },
    warning: {
      main: carbonColors.support03,
      light: carbonColors.support03Light,
    },
    info: {
      main: carbonColors.support04,
      light: carbonColors.support04Light,
    },
    text: {
      primary: carbonColors.text01,
      secondary: carbonColors.text02,
      disabled: carbonColors.text03,
    },
    divider: carbonColors.ui03,
    background: {
      default: carbonColors.uiBackground,
      paper: carbonColors.ui01,
    },
    action: {
      hover: carbonColors.hoverUi,
      selected: carbonColors.selectedUi,
      disabledBackground: '#c6c6c6',
    },
  },

  // ─── Typography ────────────────────────────────────────────────────
  typography: carbonTypography,

  // ─── Shape ─────────────────────────────────────────────────────────
  // Carbon uses sharp (square) corners by default
  shape: {
    borderRadius: 0,
  },

  // ─── Spacing ───────────────────────────────────────────────────────
  // Carbon uses 4px base unit (MUI default is already 8px, we keep 8px
  // but provide carbon-aligned spacing via tokens)
  spacing: 4,

  // ─── Component Overrides ───────────────────────────────────────────
  components: carbonComponents,
})

export default carbonTheme
