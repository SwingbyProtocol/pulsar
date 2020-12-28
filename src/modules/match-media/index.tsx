import { useState, useEffect, useLayoutEffect as _useLayoutEffect } from 'react';

const useLayoutEffect = typeof window !== 'undefined' ? _useLayoutEffect : useEffect;

export const useMatchMedia = ({
  defaultValue = false,
  query,
}: {
  defaultValue?: boolean;
  query: string;
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const media = window.matchMedia(query);
    const listener = ({ matches }: MediaQueryListEventMap['change']) => {
      setValue(matches);
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
  }, [query]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    setValue(window.matchMedia(query).matches);
  }, [query]);

  return value;
};
