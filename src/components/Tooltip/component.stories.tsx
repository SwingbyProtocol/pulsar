import { Meta } from '@storybook/react';
import React from 'react';

import { PulsarThemeProvider } from '../../modules/themes';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { Tooltip } from './';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

export const Default = () => {
  return (
    <Tooltip
      content={<Tooltip.Content>Some tooltip content...</Tooltip.Content>}
      data-testid="tooltip"
    >
      Tooltip
    </Tooltip>
  );
};

export const MixedThemes = () => {
  return (
    <>
      <PulsarThemeProvider theme="light">
        <Tooltip content={<Tooltip.Content>Light theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </PulsarThemeProvider>
      <div style={{ height: '50px' }} />
      <PulsarThemeProvider theme="dark">
        <Tooltip content={<Tooltip.Content>Dark theme.</Tooltip.Content>} visible>
          Tooltip
        </Tooltip>
      </PulsarThemeProvider>
    </>
  );
};

export const DefaultTarget = () => {
  const tooltip = (target: React.ReactNode) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip
          content={<Tooltip.Content padding="small">Some tooltip content...</Tooltip.Content>}
          placement="bottom"
          arrow={true}
          radius="micro"
          variant="accent"
          visible
        >
          {target}
        </Tooltip>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {tooltip(
        <Button variant="secondary" shape="square" size="city">
          <Icon.ArrowUp />
        </Button>,
      )}
      {tooltip(
        <Tooltip.DefaultTarget>
          <Icon.Search />
        </Tooltip.DefaultTarget>,
      )}
      {tooltip(<Tooltip.DefaultTarget>Tooltip</Tooltip.DefaultTarget>)}
    </div>
  );
};
