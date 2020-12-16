import React from 'react';
import OriginalQRCode from 'qrcode.react';
import { useTheme } from 'styled-components';

import { Container, QRWrapper } from './styled';

export type Props = {
  value: string;
  className?: string;
  style?: React.CSSProperties;
};

export const QRCode = ({ value, className, style }: Props) => {
  const theme = useTheme();
  return (
    <Container className={className} style={style}>
      <QRWrapper>
        <OriginalQRCode
          value={value}
          size={100}
          level="M"
          renderAs="svg"
          bgColor={theme.pulsar.color.bg.normal}
          fgColor={theme.pulsar.color.text.normal}
        />
      </QRWrapper>
    </Container>
  );
};

QRCode.displayName = 'QRCode';
