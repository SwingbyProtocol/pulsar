import { PulsarLight } from './themes/PulsarLight';
import { PulsarDark } from './themes/PulsarDark';
import { PulsarAccent } from './themes/PulsarAccent';

export const PulsarTheme = { PulsarLight, PulsarDark, PulsarAccent } as const;

export { PulsarThemeType } from './themes/PulsarThemeType';
export { PulsarThemeProvider } from './PulsarThemeProvider';
