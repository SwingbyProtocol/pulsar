import { useCallback } from 'react';

export type Testable = { 'data-testid'?: string };

export const buildTestId = ({ parent, id }: { parent?: string; id?: string } = {}):
  | string
  | undefined => {
  if (!parent) return undefined;
  if (!id) return parent;
  return `${parent}.${id}`;
};

export const useBuildTestId = ({ parent }: { parent?: string } = {}) => {
  return useCallback((id?: string) => buildTestId({ parent, id }), [parent]);
};
