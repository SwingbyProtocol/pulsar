export const getFiatAssetFormatter = ({
  locale,
  currency,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
  minimumSignificantDigits,
  maximumSignificantDigits,
  notation,
}: {
  locale: string;
  currency: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  maximumSignificantDigits?: number;
  minimumSignificantDigits?: number;
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
}) => {
  try {
    // If `narrowSymbol` is not supported (e.g. on Safari), this will throw an error.
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits,
      notation,
      currencyDisplay: 'narrowSymbol',
    } as any);
  } catch (e) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
      minimumSignificantDigits,
      maximumSignificantDigits,
      notation,
      currencyDisplay: 'symbol',
    } as any);
  }
};
