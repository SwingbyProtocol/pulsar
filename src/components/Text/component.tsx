import React from 'react';

import { StyledText, Variant } from './styled';

type Props = React.BaseHTMLAttributes<HTMLElement> & { variant: Variant };

export const Component = (props: Props) => {
  return <StyledText {...props} />;
};

Component.displayName = 'Text';
