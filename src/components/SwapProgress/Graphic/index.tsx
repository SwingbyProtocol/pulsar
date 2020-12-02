import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { getCoinLogo, logos } from '../../../modules/logos';
import { Status } from '../statuses';

import cross from './cross.svg';
import { Svg } from './styled';

export const Graphic = ({
  status,
  currencyIn,
  currencyOut,
  className,
}: {
  status: Status;
  currencyIn: string;
  currencyOut: string;
  className?: string;
}) => {
  const theme = useTheme();
  const logoFrom = useMemo(() => getCoinLogo({ symbol: currencyIn }), [currencyIn]);
  const logoTo = useMemo(() => getCoinLogo({ symbol: currencyOut }), [currencyOut]);

  const progress = (() => {
    switch (status) {
      case 'invalidated':
        return -1;
      case 'waiting':
        return 0;
      case 'pending':
      case 'signing':
      case 'signing-refund':
        return 1;
      case 'sending':
      case 'sending-refund':
        return 2;
      case 'completed':
      case 'refunded':
        return 3;
    }
  })();

  const pendingColor = useMemo(() => {
    switch (status) {
      case 'invalidated':
        return theme.pulsar.color.danger.normal;
      default:
        return theme.pulsar.color.border.normal;
    }
  }, [theme, status]);

  const completedColor = useMemo(() => {
    switch (status) {
      case 'signing-refund':
      case 'sending-refund':
      case 'refunded':
        return theme.pulsar.color.secondary.normal;
      case 'invalidated':
        return theme.pulsar.color.danger.normal;
      default:
        return theme.pulsar.color.primary.normal;
    }
  }, [theme, status]);

  return (
    <Svg className={className} viewBox="0 0 251 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <image x="7" y="7" width="41" height="41" href={logoFrom} />
      <image
        x="104"
        y="7"
        width="41"
        height="41"
        href={status === 'invalidated' ? cross : logos.SwingbyFlat}
      />
      <image
        x="203"
        y="7"
        width="41"
        height="41"
        href={/refund/.test(status) ? logoFrom : logoTo}
      />

      <circle
        cx="27.5"
        cy="27.5"
        r="26.5"
        stroke={progress >= 0 ? completedColor : pendingColor}
        strokeWidth="2"
      />
      {status !== 'invalidated' && (
        <>
          <rect
            x="53"
            y="27"
            width="46"
            height="2"
            fill={progress >= 1 ? completedColor : pendingColor}
          />
          <rect
            x="53"
            y="27"
            width="23"
            height="2"
            fill={progress >= 0 ? completedColor : pendingColor}
          />
        </>
      )}

      {status === 'invalidated' && (
        <>
          <path d="M81.2682 27H99V29H81.2682V27Z" fill={completedColor} />
          <path d="M53 27H72.7829V29H53V27Z" fill={completedColor} />
          <path
            d="M79.854 19.5147L71.3687 28L72.3687 29H73.1971L81.2682 20.9289L79.854 19.5147Z"
            fill={completedColor}
          />
          <path
            d="M80.854 27L72.7829 35.0711L74.1971 36.4853L82.6824 28L81.6824 27H80.854Z"
            fill={completedColor}
          />
        </>
      )}

      <circle
        cx="124.5"
        cy="27.5"
        r="26.5"
        stroke={progress >= 1 ? completedColor : pendingColor}
        strokeWidth="2"
      />
      <rect
        x="152"
        y="27"
        width="46"
        height="2"
        fill={progress >= 3 ? completedColor : pendingColor}
      />
      <rect
        x="152"
        y="27"
        width="23"
        height="2"
        fill={progress >= 2 ? completedColor : pendingColor}
      />

      <circle
        cx="223.5"
        cy="27.5"
        r="26.5"
        stroke={progress >= 3 ? completedColor : pendingColor}
        strokeWidth="2"
      />
    </Svg>
  );
};
