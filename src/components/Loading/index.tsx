'use client';

import { Typography, useTheme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export function Loading() {
  const theme = useTheme();

  console.log(theme.palette);

  return (
    <Grid
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <CircularProgress
        size="200px"
        sx={{
          color: 'red',
        }}
      />
      <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
        Carregando...
      </Typography>
    </Grid>
  );
}
