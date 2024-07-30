import * as stylex from '@stylexjs/stylex';

const DARK = '@media (prefers-color-scheme: dark)'

export const fontSizes = stylex.defineVars({
  xxs: '0.75rem',
  xs: '0.9rem',
  sm: '1rem',
  md: '1.25rem',
  lg: '1.75rem',
  xl: '2.5rem',
  xxl: '4rem',
  h1: {
    default: '3.5625rem',
    '@media (max-width: 800px)': '2.5rem',
  },
  h2: {
    default: '3rem',
    '@media (max-width: 800px)': '2rem',
  },
  h3: {
    default: '2.25rem',
    '@media (max-width: 800px)': '1.75rem',
  },
  h4: {
    default: '2rem',
    '@media (max-width: 800px)': '1.5rem',
  },
  h5: {
    default: '1.75rem',
    '@media (max-width: 800px)': '1.375rem',
  },
  h6: {
    default: '1.5rem',
    '@media (max-width: 800px)': '1.125rem',
  },
  subheading: {
    default: '1rem',
  },
  bodyLarge: {
    default: '1rem',
  },
  bodySmall: {
    default: '0.875rem',
  },
  captionLarge: {
    default: '0.75rem',
  },
  captionSmall: {
    default: '0.625rem',
  }
});

export const breakpoints = stylex.defineVars({
  xxs: '280px',
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
});

export const spacing = stylex.defineVars({
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '20px',
  lg: '40px',
  xl: '60px',
  xxl: '80px',
});

export const colors = stylex.defineVars({
  black: {
    default: '#333333',
    [DARK]: '#F1F7FC',
  },
  black300: {
    default: '#999999',
  },
  navy: {
    default: '#1F3438',
    [DARK]: '#F1F7FC',
  },
  navy300: {
    default: '#8F999B',
  },
  sage: {
    default: '#5E6C51',
    [DARK]: '#F1F7FC',
  },
  sage500: {
    default: '#6B8060',
  },
  sage300: {
    default: '#90A088',
  },
  warmGray: {
    default: '#C9C6B7',
  },
  warmGray300: {
    default: '#E4E3DB',
  },
  cream: {
    default: '#F7E6C1',
    [DARK]: '#233437',
  },
  cream300: {
    default: '#FBF3E0',
  },
  perracotta: {
    default: '#BC522F',
    [DARK]: '#8C3D2E',
  },
  perracotta500: {
    default: '#D47555',
  },
  perracotta300: {
    default: '#DF9780',
  },
  marigold: {
    default: '#F0B323',
    [DARK]: '#C68E1D',
  },
  marigold300: {
    default: '#F7D991',
  },
  burgundy: {
    default: '#6A2828',
  },
  burgundy300: {
    default: '#7A4949',
  },
  mist: {
    default: '#B5C9C0',
  },
  mist300: {
    default: '#DAE4DF',
  },
  babyBlue: {
    default: '#A7CAD4',
  },
  babyBlue300: {
    default: '#D3E5E9',
  },
  slate: {
    default: '#57728B',
  },
  slate300: {
    default: '#ABB8C5',
  },
  white: {
    default: '#FFFFFF',
    [DARK]: '#333333',
  },
  gray: {
    default: '#737373'
  },
  gray500: {
    default: '#9F9F9F',
  },
  gray300: {
    default: '#C7C7C7',
  },
  gray200: {
    default: '#EFEFEF',
  },
  gray100: {
    default: '#F7F7F7',
  },
})

export const surface = stylex.defineVars({
  primary: {
    default: colors.black,
    [DARK]: colors.white,
  },
  secondary: {
    // 1b. Base Color Token converted into a Semantic Token
    default: colors.babyBlue,
    [DARK]: colors.babyBlue300,
  },
  tertiary: {
    default: colors.white,
    [DARK]: colors.black
  }
})

export const text = stylex.defineVars({
  primary: {
    default: colors.white,
    [DARK]: colors.black,
  },
  secondary: {
    default: colors.black,
    [DARK]: colors.white,
  },
})

export const globalTokens = stylex.defineVars({
  pageGap: spacing.xl,
  headerH1: fontSizes.xxl,
  text: fontSizes.md,
  borderRadius: '8px',
  borderRadiusX2: '16px',
  borderWidth: '2px',
  boxShadow: '0 4px 10px 0 rgba(0 0 0 / 15%)',
  boxShadowInvert: '0 -4px 10px 0 rgba(0 0 0 / 5%)',
  fontFamily: 'Roboto, sans-serif',
  primaryFontFamily: 'Moderat, sans-serif',
  secondaryFontFamily: 'Suisse Works, sans-serif',
  maxWidth: breakpoints.xl,
  fontSize: '16px',
  fontWeightBold: '700',
  lineHeight: '1.5',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
})

export const defaultTheme = stylex.defineVars({
  primarySurface: surface.primary,
  secondarySurface: surface.secondary,
  primaryText: text.primary,
  secondaryText: text.secondary,
  primaryCTASurface: surface.secondary,
  primaryCTAText: text.secondary,
  secondaryCTASurface: surface.tertiary,
  secondaryCTAText: colors.navy,
  tertiaryCTASurface: colors.marigold,
  tertiaryCTAText: colors.navy
})
