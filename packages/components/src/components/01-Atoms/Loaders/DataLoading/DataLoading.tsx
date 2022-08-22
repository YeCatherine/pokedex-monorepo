import React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export function DataLoading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress aria-label="Data loading"/>
    </Box>
  );
}
