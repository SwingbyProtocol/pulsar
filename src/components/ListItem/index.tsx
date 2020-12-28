import { Component } from './component';
import { Left, Right, Content } from './styled';

export const ListItem = Component as typeof Component & {
  Left: typeof Left;
  Right: typeof Right;
  Content: typeof Content;
};

ListItem.Left = Left;
ListItem.Right = Right;
ListItem.Content = Content;
