import { NON_BREAKING_SPACE } from '../constants';

export const getCryptoAssetFormatter = ({
  locale,
  displaySymbol,
  minimumFractionDigits = 2,
  maximumFractionDigits = 20,
  minimumSignificantDigits,
  maximumSignificantDigits,
  notation,
}: {
  locale: string;
  displaySymbol: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  maximumSignificantDigits?: number;
  minimumSignificantDigits?: number;
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
}) => {
  const formatter = Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
    minimumSignificantDigits,
    maximumSignificantDigits,
    notation,
  } as any);

  const format: typeof formatter.format = (number: number) =>
    `${formatter.format(number)}${displaySymbol ? NON_BREAKING_SPACE : ''}${displaySymbol}`;

  const formatToParts: typeof formatter.formatToParts = (number) => [
    ...formatter.formatToParts(number),
    { type: 'literal', value: NON_BREAKING_SPACE },
    { type: 'currency', value: displaySymbol },
  ];

  return { format, formatToParts };
};
