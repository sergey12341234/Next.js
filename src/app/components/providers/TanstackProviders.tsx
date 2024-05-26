'use client';

import React, { useState, ReactNode, FC } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type TTanstackProvider = {
  children: ReactNode
}

const TanstackProvider: FC<TTanstackProvider> = ({ children }) => {
  const [ client ] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={ client }>
      {children}
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
};

export { TanstackProvider };
