import {
  spacing,
  defaultTheme as $T
} from '../app/themeTokens.stylex';
import themes, { ThemeColors } from '../app/themeThemes.stylex';

import * as stylex from '@stylexjs/stylex';

type Type = 'section' | 'div' | 'article' | 'aside' | 'footer' | 'header' | 'main' | 'nav'
type Size = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Align = 'left' | 'center' | 'right'

type Props = {
  children: React.ReactNode;
  as: Type;
  theme?: ThemeColors
  flex?: boolean;
  flexRow?: boolean;
  flexCentered?: boolean;
  grid?: boolean;
  gridCentered?: boolean;
  gridColumns?: boolean;
  gridAutoFit?: boolean;
  gridAutoFill?: boolean;
  gridPile?: boolean;
  gap?: Size;
  size?: Size;
  align?: Align;
  paddingBlock?: Size;
  styleProp?: {}
}

const styles = stylex.create({
  root: {
    backgroundColor: $T.primarySurface,
    color: $T.primaryText,
  },
})

const layoutFlex = stylex.create({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCentered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
  },
  gridColumns: {
    display: 'grid',
    gridAutoFlow: 'column',
  },
  gridAutoFit: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(30ch, 100%), 1fr))',
  },
  gridAutoFill: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(30ch, 100%), 1fr))',
  },
  gridCentered: {
    display: 'grid',
    placeContent: 'center',
  },
  gridPile: {
    display: 'grid',
    gridTemplateAreas: 'pile',
  }
})

// NOTE: These styles are used for element spacing including gap
const elementGap = stylex.create({
  1: {
    gap: `calc(1 * ${spacing.xs})`
  },
  2: {
    gap: `calc(2 * ${spacing.xs})`
  },
  3: {
    gap: `calc(3 * ${spacing.xs})`
  },
  4: {
    gap: `calc(4 * ${spacing.xs})`
  },
  5: {
    gap: `calc(5 * ${spacing.xs})`
  },
  6: {
    gap: `calc(6 * ${spacing.xs})`
  },
  7: {
    gap: `calc(7 * ${spacing.xs})`
  },
  8: {
    gap: `calc(8 * ${spacing.xs})`
  },
  9: {
    gap: `calc(9 * ${spacing.xs})`
  },
  10: {
    gap: `calc(10 * ${spacing.xs})`
  },
});

const containerSize = stylex.create({
  1: {
    width: '100%',
    maxWidth: '30rem',
  },
  2: {
    width: '100%',
    maxWidth: '40rem',
  },
  3: {
    width: '100%',
    maxWidth: '50rem',
  },
  4: {
    width: '100%',
    maxWidth: '60rem',
  },
  5: {
    width: '100%',
    maxWidth: '70rem',
  },
  6: {
    width: '100%',
    maxWidth: '80rem',
  },
  7: {
    width: '100%',
    maxWidth: '90rem',
  },
  8: {
    width: '100%',
    maxWidth: '100rem',
  },
  9: {
    width: '100%',
    maxWidth: '110rem',
  },
  10: {
    width: '100%',
    maxWidth: '120rem',
  }
});

const alignContainer = stylex.create({
  left: {
    marginInlineEnd: 'auto',
  },
  center: {
    marginInline: 'auto',
  },
  right: {
    marginInlineStart: 'auto',
  }
})

const elementPadding = stylex.create({
  1: {
    paddingBlock: `calc(1 * ${spacing.xs})`
  },
  2: {
    paddingBlock: `calc(2 * ${spacing.xs})`
  },
  3: {
    paddingBlock: `calc(3 * ${spacing.xs})`
  },
  4: {
    paddingBlock: `calc(4 * ${spacing.xs})`
  },
  5: {
    paddingBlock: `calc(5 * ${spacing.xs})`
  },
  6: {
    paddingBlock: `calc(6 * ${spacing.xs})`
  },
  7: {
    paddingBlock: `calc(7 * ${spacing.xs})`
  },
  8: {
    paddingBlock: `calc(8 * ${spacing.xs})`
  },
  9: {
    paddingBlock: `calc(9 * ${spacing.xs})`
  },
  10: {
    paddingBlock: `calc(10 * ${spacing.xs})`
  },
})

// eslint-disable-next-line complexity
const Container = ({
  children,
  as,
  theme,
  flex,
  flexRow,
  flexCentered,
  grid,
  gridCentered,
  gridColumns,
  gridAutoFit,
  gridAutoFill,
  gridPile,
  gap,
  size,
  align,
  paddingBlock,
  styleProp = false
}: Props) => {
  const Component = as || 'div'
  return (
    <Component
      {...stylex.props(
        theme && [styles.root, themes[theme]],
        flex && layoutFlex.flex,
        flexRow && layoutFlex.flexRow,
        flexCentered && layoutFlex.flexCentered,
        grid && layoutFlex.grid,
        gridCentered && layoutFlex.gridCentered,
        gridColumns && layoutFlex.gridColumns,
        gridAutoFit && layoutFlex.gridAutoFit,
        gridAutoFill && layoutFlex.gridAutoFill,
        gridPile && layoutFlex.gridPile,
        gap && elementGap[gap],
        size && containerSize[size],
        align && alignContainer[align],
        paddingBlock && elementPadding[paddingBlock],
        styleProp && styleProp
      )}
    >
      {children}
    </Component>
  );
}

export default Container
