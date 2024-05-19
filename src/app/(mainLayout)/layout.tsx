import type { Metadata } from 'next';
import '@/globals.css';
import ThemeSwitcher from '@/components/themeSwitcher/ThemeSwitcher';
import { NavigationList } from '@/(mainLayout)/components/NavigationList';
import { NAVIGATION_LINKS } from '@/(mainLayout)/utils/constants';

export const metadata: Metadata = {
  title: 'Home',
  icons: 'none',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className='h-[50px] bg-slate-400 dark:bg-slate-700 flex items-center'>
        <NavigationList
          navLinks={ NAVIGATION_LINKS }
        />
        <ThemeSwitcher />
      </header>
      <main>
        {children}
      </main>
      <footer className='text-white text-2xl'>
        Footer
      </footer>
    </>
  );
}
