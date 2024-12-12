'use client';

import { Box, useTheme } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        background: theme.palette.main.third,
      }}
    >
      <Box
        sx={{
          overflow: 'auto',
          borderTopLeftRadius: 30,
          mt: '7.6rem',
          flexGrow: 1,
          p: 4,
          background: theme.palette.main.fourth,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
