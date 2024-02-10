'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { TanstackProvider } from './TanstackProviders';

type TProviders = {
  children: ReactNode;
}

const Providers: FC<TProviders> = ({ children }) => (
  <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
    <TanstackProvider>
      { children }
    </TanstackProvider>
  </ThemeProvider>
);

export default Providers;
