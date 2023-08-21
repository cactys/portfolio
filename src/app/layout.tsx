'use client';

import './globals.css';
import type { Metadata } from 'next';

import { Providers } from './providers';
import { TheHeader } from '@/components/TheHeader/TheHeader';
import { Body, Main } from './styles';

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
      <Body>
        <Providers>
          <TheHeader />
          <Main>{children}</Main>
        </Providers>
      </Body>
    </html>
  );
}
