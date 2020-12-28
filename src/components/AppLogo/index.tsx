import React from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import { Icon } from '../Icon';

import { AppLogoContainer, AppLogoText } from './styles';

type Props = Testable & { productName?: string; onClick?: () => void; className?: string };

export const AppLogo = ({ onClick, 'data-testid': testId, productName, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <AppLogoContainer
      className={className}
      data-testid={buildTestId('')}
      onClick={onClick}
      as={onClick ? 'button' : 'div'}
    >
      <Icon.SwingbyWithName data-testid={buildTestId('swingby-logo')} />
      {productName && <AppLogoText>{productName}</AppLogoText>}
    </AppLogoContainer>
  );
};
