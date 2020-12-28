import React, { useMemo } from 'react';
import { ThemeProvider as Provider, DefaultTheme } from 'styled-components';

import { PulsarAccent } from '../PulsarAccent';
import { PulsarDark } from '../PulsarDark';
import { PulsarLight } from '../PulsarLight';
import { useSystemTheme } from '../useSystemTheme';

export type Theme = 'light' | 'dark' | 'accent';

export type Props = {
  children?: React.ReactNode;
  theme?: Theme;
  defaultTheme?: 'dark' | 'light';
  localTheme?: Omit<DefaultTheme, 'pulsar'>;
};

export const PulsarThemeProvider = ({
  children,
  theme: themeProp,
  defaultTheme,
  localTheme,
}: Props) => {
  const systemTheme = useSystemTheme({ defaultTheme });

  const theme = useMemo(() => {
    const pulsarTheme = themeProp ?? systemTheme;
    return {
      ...localTheme,
      ...(() => {
        if (pulsarTheme === 'light') return PulsarLight;
        if (pulsarTheme === 'dark') return PulsarDark;
        if (pulsarTheme === 'accent') return PulsarAccent;
        throw new Error(`Invalid theme "${pulsarTheme}"`);
      })(),
    };
  }, [localTheme, systemTheme, themeProp]);

  return <Provider theme={theme}>{children}</Provider>;
};
