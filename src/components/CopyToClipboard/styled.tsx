import styled from 'styled-components';

import { TextInput } from '../TextInput';

export const StyledTextInput = styled(TextInput)`
  ${TextInput.InputContainer} {
    background: ${({ theme }) => theme.pulsar.color.border.normal};
    border-color: transparent;
  }
`;

export const IconContainer = styled.div`
  color: ${({ theme }) => theme.pulsar.color.text.accent};
`;
