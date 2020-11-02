import 'styled-components';
import { PulsarThemeType } from './PulsarThemeType';

declare module 'styled-components' {
  export interface DefaultTheme extends PulsarThemeType {}
}
