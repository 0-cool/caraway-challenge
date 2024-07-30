import {
  colors,
  defaultTheme as $T,
} from './themeTokens.stylex'

import * as stylex from '@stylexjs/stylex'

export type ThemeColors =
  'babyBlue' | 'babyBlue300' | 'black' | 'black300' | 'burgundy' | 'burgundy300' |
  'cream' | 'cream300' | 'gray' | 'gray100' | 'gray200' | 'gray300' | 'gray500' |
  'marigold' | 'marigold300' | 'mist' | 'mist300' | 'navy' | 'navy300' | 'perracotta' |
  'perracotta300' | 'perracotta500' | 'sage' | 'sage300' | 'sage500' | 'slate' |
  'slate300' | 'warmGray' | 'warmGray300' | 'white'

const babyBlue = stylex.createTheme($T, {
  primarySurface: colors.babyBlue,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
  secondaryCTASurface: colors.marigold,
  secondaryCTAText: colors.navy,
})

const babyBlue300 = stylex.createTheme($T, {
  primarySurface: colors.babyBlue300,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
  secondaryCTASurface: colors.marigold,
  secondaryCTAText: colors.navy,
})

const black = stylex.createTheme($T, {
  primarySurface: colors.black,
  primaryText: colors.white,
  primaryCTASurface: colors.cream,
  primaryCTAText: colors.navy,
})

const black300 = stylex.createTheme($T, {
  primarySurface: colors.black300,
  primaryText: colors.white,
  primaryCTASurface: colors.black,
  primaryCTAText: colors.white,
})

const burgundy = stylex.createTheme($T, {
  primarySurface: colors.burgundy,
  primaryText: colors.white,
  primaryCTASurface: colors.marigold,
  primaryCTAText: colors.navy,
})

const burgundy300 = stylex.createTheme($T, {
  primarySurface: colors.burgundy300,
  primaryText: colors.cream,
  primaryCTASurface: colors.marigold,
  primaryCTAText: colors.navy,
})

const cream = stylex.createTheme($T, {
  primarySurface: colors.cream,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
  secondaryCTASurface: colors.perracotta,
  secondaryCTAText: colors.white,
})

const cream300 = stylex.createTheme($T, {
  primarySurface: colors.cream300,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
  secondaryCTASurface: colors.perracotta,
  secondaryCTAText: colors.white,
})

const gray = stylex.createTheme($T, {
  primarySurface: colors.gray,
  primaryText: colors.white,
})

const gray100 = stylex.createTheme($T, {
  primarySurface: colors.gray100,
  primaryText: colors.navy,
})

const gray200 = stylex.createTheme($T, {
  primarySurface: colors.gray200,
  primaryText: colors.navy,
})

const gray300 = stylex.createTheme($T, {
  primarySurface: colors.gray300,
  primaryText: colors.navy,
})

const gray500 = stylex.createTheme($T, {
  primarySurface: colors.gray500,
  primaryText: colors.navy,
})

const marigold = stylex.createTheme($T, {
  primarySurface: colors.marigold,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const marigold300 = stylex.createTheme($T, {
  primarySurface: colors.marigold300,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const mist = stylex.createTheme($T, {
  primarySurface: colors.mist,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const mist300 = stylex.createTheme($T, {
  primarySurface: colors.mist300,
  primaryText: colors.navy,
})

const navy = stylex.createTheme($T, {
  primarySurface: colors.navy,
  primaryText: colors.white,
})

const navy300 = stylex.createTheme($T, {
  primarySurface: colors.navy300,
  primaryText: colors.navy,
})

const perracotta = stylex.createTheme($T, {
  primarySurface: colors.perracotta,
  primaryText: colors.white,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const perracotta300 = stylex.createTheme($T, {
  primarySurface: colors.perracotta300,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const perracotta500 = stylex.createTheme($T, {
  primarySurface: colors.perracotta500,
  primaryText: colors.navy,
})

const sage = stylex.createTheme($T, {
  primarySurface: colors.sage,
  primaryText: colors.cream,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const sage300 = stylex.createTheme($T, {
  primarySurface: colors.sage300,
  primaryText: colors.white,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const sage500 = stylex.createTheme($T, {
  primarySurface: colors.sage500,
  primaryText: colors.navy,
  primaryCTASurface: colors.navy,
  primaryCTAText: colors.white,
})

const slate = stylex.createTheme($T, {
  primarySurface: colors.slate,
  primaryText: colors.white,
})

const slate300 = stylex.createTheme($T, {
  primarySurface: colors.slate300,
  primaryText: colors.navy,
  primaryCTASurface: colors.perracotta,
  primaryCTAText: colors.white,
})

const warmGray = stylex.createTheme($T, {
  primarySurface: colors.warmGray,
  primaryText: colors.navy,
  primaryCTASurface: colors.perracotta,
  primaryCTAText: colors.white,
})

const warmGray300 = stylex.createTheme($T, {
  primarySurface: colors.warmGray300,
  primaryText: colors.navy,
})

const white = stylex.createTheme($T, {
  primarySurface: colors.white,
  primaryText: colors.navy,
  secondaryCTASurface: colors.perracotta,
  secondaryCTAText: colors.white,
})

const themes = {
  babyBlue,
  babyBlue300,
  black,
  black300,
  burgundy,
  burgundy300,
  cream,
  cream300,
  gray,
  gray100,
  gray200,
  gray300,
  gray500,
  marigold,
  marigold300,
  mist,
  mist300,
  navy,
  navy300,
  perracotta,
  perracotta300,
  perracotta500,
  sage,
  sage300,
  sage500,
  slate,
  slate300,
  warmGray,
  warmGray300,
  white,
}

export default themes
