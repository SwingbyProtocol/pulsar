import React, { useMemo } from 'react';

import { COLORS } from '../colors';

export type Props = { values: number[]; startIndex: number };

export const Square = ({ values, startIndex }: Props) => {
  const x = values[startIndex];
  const y = values[startIndex + 1];
  const size = values[startIndex + 2];
  const angle = useMemo(() => (values[startIndex + 3] / 15) * 360, [values, startIndex]);

  const color = useMemo(() => {
    const index = values[startIndex] % COLORS.length;
    return COLORS[index];
  }, [values, startIndex]);

  const shape = useMemo(() => {
    const shape = values[startIndex + 4] < 13 ? 'square' : 'triangle';
    if (shape === 'triangle') {
      return (
        <polygon
          points={[
            [x, y],
            [x + size, y],
            [x + size / 2, y + size],
          ]
            .map((it) => it.join(','))
            .join(' ')}
          fill={color}
        />
      );
    }

    return <rect x={x} y={y} width={size} height={size} fill={color} />;
  }, [values, startIndex, x, y, size, color]);

  return <g transform={`rotate(${angle} ${(x + size) / 2} ${(y + size) / 2})`}>{shape}</g>;
};
