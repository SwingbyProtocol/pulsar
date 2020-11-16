export const getFiatAssetFormatter = ({
  locale,
  currency,
}: {
  locale: string;
  currency: string;
}) => {
  try {
    // If `narrowSymbol` is not supported (e.g. on Safari), this will throw an error.
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currencyDisplay: 'narrowSymbol',
    });
  } catch (e) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currencyDisplay: 'symbol',
    });
  }
};
