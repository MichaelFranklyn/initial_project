import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { Metadata } from 'next';
import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Project',
  description: 'Project Next 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/avatar-drivops.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
