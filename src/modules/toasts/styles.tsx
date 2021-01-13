import { rem, transitions } from 'polished';
import { css } from 'styled-components';

export const toastStyles = css`
  .Toastify__toast {
    border-radius: ${({ theme }) => rem(theme.pulsar.size.box)};
    padding: ${({ theme }) => rem(theme.pulsar.size.drawer)};
    font-family: inherit;
    min-height: ${({ theme }) => rem(theme.pulsar.size.street)};
    margin-bottom: ${({ theme }) => rem(theme.pulsar.size.box)};
    box-shadow: ${({ theme }) => theme.pulsar.shadow.toast};
    ${({ theme }) => transitions(['box-shadow'], theme.pulsar.duration.normal)};

    :hover {
      box-shadow: ${({ theme }) => theme.pulsar.shadow.toastHover};
    }

    @media (min-width: ${rem(768)}) and (min-height: ${rem(375)}) {
      margin-bottom: ${({ theme }) => rem(theme.pulsar.size.drawer)};
    }
  }

  .Toastify__close-button {
    align-self: center;
    color: inherit;
    background: transparent;
  }

  .Toastify__toast--default {
    background: ${({ theme }) => theme.pulsar.color.bg.normal};
    color: ${({ theme }) => theme.pulsar.color.text.normal};
    font-size: ${({ theme }) => rem(theme.pulsar.size.closet)};

    @media (min-width: ${rem(768)}) and (min-height: ${rem(375)}) {
      font-size: ${({ theme }) => rem(theme.pulsar.size.room)};
    }
  }
`;
