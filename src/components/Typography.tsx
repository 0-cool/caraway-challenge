import { fontSizes, globalTokens, spacing } from '../app/themeTokens.stylex';

import * as stylex from '@stylexjs/stylex';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'caption';
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'h1' | 'h2' | 'h3'
| 'h4' | 'h5' | 'h6' | 'subheading' | 'bodyLarge' | 'bodySmall' | 'captionLarge' | 'captionSmall';

type Props = {
  children: React.ReactNode
  as: Type;
  fontBold?: boolean;
  fontSecondary?: boolean;
  size?: Size;
  underline?: boolean;
  textLeft?: boolean;
  textRight?: boolean;
  textCentered?: boolean;
  textJustified?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  marginBottom?: Size;
  styleProp?: {}
}

const baseTypography = stylex.create({
  h1: {
    fontSize: fontSizes.h1,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  h3: {
    fontSize: fontSizes.h3,
  },
  h4: {
    fontSize: fontSizes.h4,
  },
  h5: {
    fontSize: fontSizes.h5,
  },
  h6: {
    fontSize: fontSizes.h6,
  },
  p: {
    fontSize: fontSizes.xs,
  },
  caption: {
    fontSize: fontSizes.xxs,
  },
});

const baseTypographyBold = stylex.create({
  base: {
    fontWeight: 400,
  },
  thicker: {
    fontWeight: 700,
  },
});

const primaryFontFamily = stylex.create({
  primary: {
    fontFamily: globalTokens.primaryFontFamily,
  },
  secondary: {
    fontFamily: globalTokens.secondaryFontFamily,
  },
});

const fontSize = stylex.create({
  'text-xxs': {
    fontSize: fontSizes.xxs,
  },
  'text-xs': {
    fontSize: fontSizes.xs,
  },
  'text-sm': {
    fontSize: fontSizes.sm,
  },
  'text-md': {
    fontSize: fontSizes.md,
  },
  'text-lg': {
    fontSize: fontSizes.lg,
  },
  'text-xl': {
    fontSize: fontSizes.xl,
  },
  'text-xxl': {
    fontSize: fontSizes.xxl,
  },
  'text-h1': {
    fontSize: fontSizes.h1
  },
  'text-h2': {
    fontSize: fontSizes.h2
  },
  'text-h3': {
    fontSize: fontSizes.h3
  },
  'text-h4': {
    fontSize: fontSizes.h4
  },
  'text-h5': {
    fontSize: fontSizes.h5
  },
  'text-h6': {
    fontSize: fontSizes.h6
  },
  'text-subheading': {
    fontSize: fontSizes.subheading
  },
  'text-bodyLarge': {
    fontSize: fontSizes.bodyLarge
  },
  'text-bodySmall': {
    fontSize: fontSizes.bodySmall
  },
  'text-captionLarge': {
    fontSize: fontSizes.captionLarge
  },
  'text-captionSmall': {
    fontSize: fontSizes.captionSmall
  }
});

const alignText = stylex.create({
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
});

const textDecoration = stylex.create({
  underline: {
    textDecoration: 'underline',
  },
});

const transformText = stylex.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});

const bottomMargin = stylex.create({
  xxs: {
    marginBlockEnd: spacing.xxs,
  },
  xs: {
    marginBlockEnd: spacing.xs,
  },
  sm: {
    marginBlockEnd: spacing.sm,
  },
  md: {
    marginBlockEnd: spacing.md,
  },
  lg: {
    marginBlockEnd: spacing.lg,
  },
  xl: {
    marginBlockEnd: spacing.xl,
  },
  xxl: {
    marginBlockEnd: spacing.xxl,
  },
});

// eslint-disable-next-line complexity
const Typography = ({
  children,
  as: Component = 'h1',
  fontBold,
  fontSecondary,
  size,
  underline,
  textLeft,
  textRight,
  textCentered,
  textJustified,
  uppercase,
  lowercase,
  capitalize,
  marginBottom,
  styleProp
} : Props) => (
  <Component
    {...stylex.props(
      baseTypography[Component as keyof typeof baseTypography],
      !fontBold ? baseTypographyBold.base : baseTypographyBold.thicker,
      !fontSecondary ? primaryFontFamily.primary : primaryFontFamily.secondary,
      size && fontSize[`text-${size}`],
      underline && textDecoration.underline,
      textLeft && alignText.left,
      textRight && alignText.right,
      textCentered && alignText.center,
      textJustified && alignText.justify,
      uppercase && transformText.uppercase,
      lowercase && transformText.lowercase,
      capitalize && transformText.capitalize,
      marginBottom && bottomMargin[marginBottom as keyof typeof bottomMargin],
      styleProp && styleProp
    )}
  >
    {children}
  </Component>
);

export default Typography
