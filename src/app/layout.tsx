import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { TheHeader } from '../components/TheHeader/TheHeader';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Моё портфолио',
  description: 'Эта страница обо мне и моих навыках',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-theme="light" style={{ colorScheme: 'light' }}>
      <body>
        <Providers>
          <TheHeader />
          <main className={styles.page}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
