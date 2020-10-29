import 'styled-components';
import { PulsarThemeType } from './themes/PulsarThemeType';

declare module 'styled-components' {
  export interface DefaultTheme extends PulsarThemeType {}
}
