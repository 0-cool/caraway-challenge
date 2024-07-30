import Typography from './Typography';
import Container from './Container';
import { ThemeColors } from '../app/themeThemes.stylex';

type TextBannerProps = {
  subheader?: string,
  header: string,
  body: string,
  theme?: ThemeColors
}

const TextBanner = ({
  subheader,
  header,
  body,
  theme = 'cream'
}: TextBannerProps) => (
  <Container
    as="section"
    theme={theme}
    flexCentered
    gap="2"
    paddingBlock="6"
  >
    <Typography as="p" size="xs" uppercase>{subheader}</Typography>
    <Typography as="h2" size="h3" fontBold fontSecondary>{header}</Typography>
    <Typography as="p" size="bodyLarge" textCentered>{body}</Typography>
  </Container>
)

export default TextBanner
