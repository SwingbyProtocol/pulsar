import { SwapProgress as Component } from './component';
import { defaultMessages } from './defaultMessages';

export const SwapProgress = Component as typeof Component & {
  defaultMessages: typeof defaultMessages;
};

SwapProgress.defaultMessages = defaultMessages;
