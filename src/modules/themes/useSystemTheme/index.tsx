import { useState, useEffect, useLayoutEffect as _useLayoutEffect } from 'react';

const useLayoutEffect = typeof window !== 'undefined' ? _useLayoutEffect : useEffect;

export const useSystemTheme = ({
  defaultTheme = 'light',
}: { defaultTheme?: 'light' | 'dark' } = {}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = ({ matches }: MediaQueryListEventMap['change']) => {
      setTheme(matches ? 'dark' : 'light');
    };

    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => {
        media.removeEventListener('change', listener);
      };
    }

    media.addListener(listener);
    return () => {
      media.removeListener(listener);
    };
  }, []);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme]);

  return theme;
};
