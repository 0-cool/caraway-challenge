import {
  spacing,
  defaultTheme as $T,
  globalTokens as $
} from '@/app/themeTokens.stylex';
import themes, { ThemeColors } from '@/app/themeThemes.stylex';

import * as stylex from '@stylexjs/stylex';

const marquee = stylex.keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(calc(-100% - 1rem))',
  },
})

const styles = stylex.create({
  marquee: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    userSelect: 'none',
    gap: '1rem',
    paddingBlock: spacing.lg,
    backgroundColor: $T.primarySurface,
    color: $T.primaryText,
  },
  animation: {
    animationName: marquee,
    animationDuration: '16s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: {
      default: 'running',
      '@media (prefers-reduced-motion: reduce)': 'paused',
    }
  },
  content: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-around',
    gap: '1rem',
    minWidth: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: $.fontWeightBold,
  }
})

const duplicateItems = 2

type MarqueeProps = {
  items: Array<{ text: string, id: string }>;
  theme?: ThemeColors
};

const Marquee = ({ items, theme = 'navy' }: MarqueeProps) => {
  const themeStyles = themes[theme]
  return (
    <section>
      <div
        {...stylex.props(
          themeStyles,
          styles.marquee
        )}
      >
        {[...Array(duplicateItems)].map((_, i) => (
          <div
            key={items[i].id}
            {...(i === 1 && { 'aria-hidden': true })}
            {...stylex.props(styles.content, styles.animation)}
          >
            {items.map((item, index) => (
              <div key={items[index].id} {...stylex.props(styles.item)}>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee
