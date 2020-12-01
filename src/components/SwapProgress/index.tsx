import React from 'react';

import { Graphic } from './Graphic';
import { Status } from './statuses';

export const SwapProgress = ({
  status,
  currencyIn,
  currencyOut,
  className,
}: {
  status: Status;
  currencyIn: string;
  currencyOut: string;
  className?: string;
}) => {
  return <Graphic status={status} currencyIn={currencyIn} currencyOut={currencyOut} />;
};
