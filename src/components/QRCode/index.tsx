import React from 'react';
import OriginalQRCode from 'qrcode.react';

import { Container, QRWrapper } from './styled';

export type Props = {
  value: string;
  className?: string;
  style?: React.CSSProperties;
};

export const QRCode = ({ value, className, style }: Props) => {
  return (
    <Container className={className} style={style}>
      <QRWrapper>
        <OriginalQRCode
          value={value}
          size={100}
          level="M"
          renderAs="svg"
          bgColor="transparent"
          fgColor="currentColor"
        />
      </QRWrapper>
    </Container>
  );
};

QRCode.displayName = 'QRCode';
