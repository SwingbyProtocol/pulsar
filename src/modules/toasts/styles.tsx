import { rem, transitions } from 'polished';
import { css } from 'styled-components';

export const toastStyles = css`
  .Toastify__toast-container {
    padding: ${rem(1)};
    font-size: 0;

    @media (min-height: ${rem(150)}) {
      padding: ${({ theme }) => rem(theme.pulsar.size.box)};
    }
  }

  .Toastify__toast {
    border-radius: ${({ theme }) => rem(theme.pulsar.size.box)};
    padding: ${({ theme }) => rem(theme.pulsar.size.box)};
    font-family: inherit;
    min-height: 0;
    margin-bottom: ${({ theme }) => rem(theme.pulsar.size.box)};
    box-shadow: ${({ theme }) => theme.pulsar.shadow.toast};
    font-size: ${rem(10)};
    ${({ theme }) => transitions(['box-shadow'], theme.pulsar.duration.normal)};

    :hover {
      box-shadow: ${({ theme }) => theme.pulsar.shadow.toastHover};
    }

    @media (min-height: ${rem(150)}) {
      font-size: ${({ theme }) => rem(theme.pulsar.size.closet)};
      padding: ${({ theme }) => rem(theme.pulsar.size.drawer)};
      min-height: ${({ theme }) => rem(theme.pulsar.size.street)};
      margin-bottom: ${({ theme }) => rem(theme.pulsar.size.drawer)};
    }

    @media (min-width: ${rem(768)}) and (min-height: ${rem(150)}) {
      font-size: ${({ theme }) => rem(theme.pulsar.size.closet)};
    }
  }

  .Toastify__close-button {
    align-self: center;
    color: inherit;
    background: transparent;
    font-size: 1em;

    > svg {
      width: 1em;
      height: ${14 / 16}em;
    }
  }

  .Toastify__toast--default {
    background: ${({ theme }) => theme.pulsar.color.bg.masked};
    color: ${({ theme }) => theme.pulsar.color.text.normal};
  }

  .Toastify__toast--success {
    background: ${({ theme }) => theme.pulsar.color.success.normal};
    color: ${({ theme }) => theme.pulsar.color.success.text};
  }

  .Toastify__toast--warning {
    background: ${({ theme }) => theme.pulsar.color.warning.normal};
    color: ${({ theme }) => theme.pulsar.color.warning.text};
  }

  .Toastify__toast--error {
    background: ${({ theme }) => theme.pulsar.color.danger.normal};
    color: ${({ theme }) => theme.pulsar.color.danger.text};
  }
`;
