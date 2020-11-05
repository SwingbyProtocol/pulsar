import React from 'react';

import { StyledText, Variant, Decoration } from './styled';

type Props = React.BaseHTMLAttributes<HTMLElement> & { variant?: Variant; decoration?: Decoration };

export const Component = (props: Props) => {
  return <StyledText {...props} />;
};

Component.displayName = 'Text';
