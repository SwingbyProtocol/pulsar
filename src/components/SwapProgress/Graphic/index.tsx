import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { getCoinLogo, logos } from '../../../modules/logos';
import { getStatusColor, SwapStatus } from '../../../modules/swap-statuses';

import cross from './cross.svg';
import { Svg } from './styled';

export const Graphic = ({
  status,
  currencyIn,
  currencyOut,
  className,
}: {
  status: SwapStatus;
  currencyIn: string;
  currencyOut: string;
  className?: string;
}) => {
  const logoFrom = useMemo(() => getCoinLogo({ symbol: currencyIn }), [currencyIn]);
  const logoTo = useMemo(() => getCoinLogo({ symbol: currencyOut }), [currencyOut]);
  const theme = useTheme();
  const pendingColor = theme.pulsar.color.border.normal;

  const progress = (() => {
    switch (status) {
      case 'WAITING':
        return 0;
      case 'PENDING':
      case 'SIGNING':
      case 'SIGNING_REFUND':
        return 1;
      case 'SENDING':
      case 'SENDING_REFUND':
        return 2;
      case 'COMPLETED':
      case 'REFUNDED':
        return 3;
      case 'EXPIRED':
        return 100;
    }
  })();

  const completedColor = useMemo(() => {
    switch (status) {
      case 'PENDING':
      case 'WAITING':
        return getStatusColor({ theme, status: 'SENDING' });
      default:
        return getStatusColor({ theme, status });
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
        href={status === 'EXPIRED' ? cross : logos.SwingbyFlat}
      />
      <image
        x="203"
        y="7"
        width="41"
        height="41"
        href={/refund/i.test(status) ? logoFrom : logoTo}
      />

      <circle
        cx="27.5"
        cy="27.5"
        r="26.5"
        stroke={progress >= 0 ? completedColor : pendingColor}
        strokeWidth="2"
      />
      {status !== 'EXPIRED' && (
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

      {status === 'EXPIRED' && (
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
