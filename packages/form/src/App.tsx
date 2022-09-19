import React, { useState } from 'react';
import {
  AppHeader,
  ErrorBoundary,
  formSearchType,
  Layout
} from '@monorepo/components';
import { FormContext } from '@monorepo/components/src/context';
import { Link, useRoutes } from 'react-router-dom';
import { Programs as ProgramsPage } from '@/pages';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { Container } from '@mui/material';
import Dashboard from '@/pages/Dashboard/Dashboard';


function Navigation() {
  return (
    <Container>
      <Link to={'/'}>Home</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/table'}>Table</Link>
    </Container>
  );
}


/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <ProgramsPage />
    },
    {
      path: '/table',
      element: <ProgramsPage />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    }
]);

  const [formState, setFormState] = useState<formSearchType>(
    DEFAULT_SEARCH_PARAMS);
  return (
    <ErrorBoundary>
      <FormContext.Provider value={{ formState, setFormState }}>
        <Layout header={<AppHeader/>} top={<Navigation/>}>{element}</Layout>
      </FormContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
