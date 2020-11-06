import React from 'react';

import { useBuildTestId } from '../testing';

import { formatFiatAsset, formatCryptoAsset } from './';

export default {
  title: 'FormattingAssets',
};

export const Fiat = () => {
  const { buildTestId } = useBuildTestId();
  return (
    <>
      <div data-testid={buildTestId('en')}>
        {formatFiatAsset({ amount: 12345.67, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid={buildTestId('es')}>
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'EUR' })}
      </div>
      <div data-testid={buildTestId('es-usd')}>
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'USD' })}
      </div>
      <div data-testid={buildTestId('es-cny')}>
        {formatFiatAsset({ amount: 12345.67, locale: 'es-ES', currency: 'CNY' })}
      </div>
      <div data-testid={buildTestId('en-integer')}>
        {formatFiatAsset({ amount: 12345, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid={buildTestId('en-too-many-digist')}>
        {formatFiatAsset({ amount: 12345.6789, locale: 'en-US', currency: 'USD' })}
      </div>
      <div data-testid={buildTestId('en-zero')}>
        {formatFiatAsset({ amount: 0, locale: 'en-US', currency: 'USD' })}
      </div>
    </>
  );
};

export const Crypto = () => {
  const { buildTestId } = useBuildTestId();
  return (
    <>
      <div data-testid={buildTestId('en')}>
        {formatCryptoAsset({ amount: 12345.67, locale: 'en-US', displaySymbol: 'BTC' })}
      </div>
      <div data-testid={buildTestId('es')}>
        {formatCryptoAsset({ amount: 12345.67, locale: 'es-ES', displaySymbol: 'BTC' })}
      </div>
      <div data-testid={buildTestId('en-integer')}>
        {formatCryptoAsset({ amount: 12345, locale: 'en-US', displaySymbol: 'BTC' })}
      </div>
      <div data-testid={buildTestId('en-too-many-digist')}>
        {formatCryptoAsset({ amount: 12345.6789, locale: 'en-US', displaySymbol: 'BTC' })}
      </div>
      <div data-testid={buildTestId('en-zero')}>
        {formatCryptoAsset({ amount: 0, locale: 'en-US', displaySymbol: 'BTC' })}
      </div>
    </>
  );
};
