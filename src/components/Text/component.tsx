import React from 'react';

import { StyledText, Variant, Decoration } from './styled';

type Props = React.BaseHTMLAttributes<HTMLElement> & {
  variant?: Variant;
  decoration?: Decoration;
  htmlTag?: 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
};

export const Component = ({ htmlTag = 'span', ...props }: Props) => {
  return <StyledText {...props} as={htmlTag} />;
};

Component.displayName = 'Text';
