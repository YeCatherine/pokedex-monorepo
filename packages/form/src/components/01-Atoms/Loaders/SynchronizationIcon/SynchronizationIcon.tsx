import React from 'react';
import { Box, Chip } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

interface ISynchronizationIconProps {
  /**
   * Is component Loading.
   */
  loading: boolean;
}

export default function SynchronizationIcon({ loading }: ISynchronizationIconProps) {
  if (!loading) {
    return null;
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <SyncIcon aria-label="Please Wait...." />
      <Chip label="Please Wait...." />
    </Box>
  );
}
