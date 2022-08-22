import React from 'react';
import Container from '@mui/material/Container';
import { AppHeader } from '../../index';

export default function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <Container component="main" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        {children}
      </Container>
    </>
  );
}
