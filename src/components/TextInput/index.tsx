import { Component } from './component';
import { InputContainer } from './styled';

export const TextInput = Component as typeof Component & { InputContainer: typeof InputContainer };

TextInput.InputContainer = InputContainer;
