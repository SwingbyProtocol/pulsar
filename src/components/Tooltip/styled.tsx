import styled, { createGlobalStyle, css } from 'styled-components';
import { em } from 'polished';

/* eslint-disable import/no-internal-modules */
import tippy from '../../../node_modules/tippy.js/dist/tippy.css';
import tippyAnimations from '../../../node_modules/tippy.js/animations/shift-away.css';
/* eslint-enable import/no-internal-modules */

export const Styles = createGlobalStyle`
  ${tippy};
  ${tippyAnimations};

  .tippy-box {
    &[data-theme='sb-pulsar-bare'] {
      font-size: 1rem;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      overflow: visible;

      .tippy-content {
        padding: 0;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  box-shadow: ${({ theme }) => theme.pulsar.shadow.tooltip};
  overflow: hidden;

  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
`;

export const Content = styled.div`
  padding: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)}
    ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
`;
