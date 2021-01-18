import React from 'react';

import { useBuildTestId } from '../testing';

import { getFiatAssetFormatter, getCryptoAssetFormatter } from './';

export default {
  title: 'FormattingAssets',
};

export const Fiat = () => {
  const { buildTestId } = useBuildTestId();
  return (
    <>
      <div data-testid={buildTestId('en')}>
        {getFiatAssetFormatter({ locale: 'en-US', currency: 'USD' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('es')}>
        {getFiatAssetFormatter({ locale: 'es-ES', currency: 'EUR' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('es-usd')}>
        {getFiatAssetFormatter({ locale: 'es-ES', currency: 'USD' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('es-cny')}>
        {getFiatAssetFormatter({ locale: 'es-ES', currency: 'CNY' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('en-integer')}>
        {getFiatAssetFormatter({ locale: 'en-US', currency: 'USD' }).format(12345)}
      </div>
      <div data-testid={buildTestId('en-too-many-digist')}>
        {getFiatAssetFormatter({ locale: 'en-US', currency: 'USD' }).format(12345.6789)}
      </div>
      <div data-testid={buildTestId('en-zero')}>
        {getFiatAssetFormatter({ locale: 'en-US', currency: 'USD' }).format(0)}
      </div>
      <div data-testid={buildTestId('en-compact')}>
        {getFiatAssetFormatter({
          locale: 'en-US',
          currency: 'USD',
          maximumSignificantDigits: 3,
          notation: 'compact',
        }).format(1234567.89)}
      </div>
    </>
  );
};

export const Crypto = () => {
  const { buildTestId } = useBuildTestId();
  return (
    <>
      <div data-testid={buildTestId('en')}>
        {getCryptoAssetFormatter({ locale: 'en-US', displaySymbol: 'BTC' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('es')}>
        {getCryptoAssetFormatter({ locale: 'es-ES', displaySymbol: 'BTC' }).format(12345.67)}
      </div>
      <div data-testid={buildTestId('en-integer')}>
        {getCryptoAssetFormatter({ locale: 'en-US', displaySymbol: 'BTC' }).format(12345)}
      </div>
      <div data-testid={buildTestId('en-too-many-digist')}>
        {getCryptoAssetFormatter({ locale: 'en-US', displaySymbol: 'BTC' }).format(12345.6789)}
      </div>
      <div data-testid={buildTestId('en-zero')}>
        {getCryptoAssetFormatter({ locale: 'en-US', displaySymbol: 'BTC' }).format(0)}
      </div>
      <div data-testid={buildTestId('en-compact')}>
        {getCryptoAssetFormatter({
          locale: 'en-US',
          displaySymbol: 'BTC',
          maximumSignificantDigits: 3,
          notation: 'compact',
        }).format(1234567.89)}
      </div>
    </>
  );
};
