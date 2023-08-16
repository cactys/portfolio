import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Моё портфолио",
  description: "Эта страница обо мне и моих навыках",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" data-theme="light" style={{ colorScheme: "light" }}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
