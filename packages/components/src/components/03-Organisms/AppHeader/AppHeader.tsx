import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const AppHeader = () => {
  return (
    <AppBar
      position="absolute"
      color="default"
      elevation={0}
      sx={{
        position: 'relative',
        borderBottom: (t) => `1px solid ${t.palette.divider}`
      }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Monorepo Example ⚛️
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
