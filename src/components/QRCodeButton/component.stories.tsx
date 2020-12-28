import React from 'react';

import { QRCodeButton } from './';

export default {
  component: QRCodeButton,
  title: 'QRCodeButton',
};

export const Default = () => (
  <>
    <QRCodeButton variant="primary" size="country" shape="square" value="a value here" />
  </>
);
