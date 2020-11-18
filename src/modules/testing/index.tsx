import React, { useContext, useMemo } from 'react';

export type Testable = { 'data-testid'?: string };

const PulsarTestContext = React.createContext<string | undefined>(undefined);

export const PulsarTestIdProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: string;
}) => {
  const contextTestId = useContext(PulsarTestContext);
  return (
    <PulsarTestContext.Provider value={genericBuildTestId({ parent: contextTestId, id: value })}>
      {children}
    </PulsarTestContext.Provider>
  );
};

const genericBuildTestId = ({
  context,
  parent,
  id: idParam,
}: {
  context?: string;
  parent?: string;
  id?: string;
}) => {
  const id = (() => {
    if (!idParam || !parent) return idParam;

    const parentArray = parent.split('.');
    const idArray = idParam.split('.');

    for (let i = 0; i < idArray.length; i++) {
      if (parentArray[i] === idArray[i]) continue;
      if (i === 0) return idParam;
      return idArray.slice(i);
    }

    return idParam;
  })();

  const withoutContext = [parent, id].filter((it) => !!it).join('.');
  if (!context || withoutContext.startsWith(context)) {
    return withoutContext;
  }

  return [context, withoutContext].filter((it) => !!it).join('.');
};

export const useBuildTestId = ({ id: parent }: { id?: string } = {}) => {
  const context = useContext(PulsarTestContext);
  return useMemo(() => {
    const buildTestId = (id: string) => {
      return genericBuildTestId({ context, parent, id });
    };

    return { buildTestId } as const;
  }, [parent, context]);
};
