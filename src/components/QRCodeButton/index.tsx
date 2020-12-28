import React, { useCallback, useState } from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Modal } from '../Modal';
import { QRCode } from '../QRCode';

import { QRContainer } from './styled';

export type Props = Pick<
  React.ComponentPropsWithoutRef<typeof Button>,
  'variant' | 'size' | 'shape'
> &
  Pick<React.ComponentPropsWithoutRef<typeof QRCode>, 'value'>;

export const QRCodeButton = ({ value, size, variant, shape }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <Button variant={variant} size={size} shape={shape} onClick={open}>
        <Icon.QR />
      </Button>
      <Modal open={isOpen} onClose={close}>
        <QRContainer>
          <QRCode value={value} />
        </QRContainer>
      </Modal>
    </>
  );
};

QRCodeButton.displayName = 'QRCodeButton';
