import { Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import { Button } from '../../components/Button';

import { PulsarToastContainer } from './PulsarToastContainer';
import { createToast } from './createToast';

const meta: Meta = {
  title: 'Toasts',
};

export default meta;

export const Default = () => {
  useEffect(() => {
    createToast({ content: 'A toast', position: 'top-left' });
    createToast({ content: 'A toast', type: 'success' });
    createToast({ content: 'A toast', type: 'warning' });
    createToast({ content: 'A toast', type: 'error' });
    createToast({ content: 'A toast', type: 'info' });
    createToast({ content: 'A toast', type: 'dark' });
  }, []);

  return (
    <>
      <Button variant="primary" size="state" onClick={() => createToast({ content: 'A toast' })}>
        Create toast
      </Button>
      <PulsarToastContainer />
    </>
  );
};

Default.parameters = { theme: 'light' };
