import { Component } from './component';
import { Content } from './Content';

export const Modal = Component as typeof Component & { Content: typeof Content };

Modal.Content = Content;
