import React, { useState } from 'react';
import { AppHeader, ErrorBoundary, formSearchType, Layout } from '@monorepo/components';
import { FormContext } from '@monorepo/components/src/context';
import { useRoutes } from 'react-router-dom';
import { Programs as ProgramsPage } from '@/pages';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';

const DashboardMessages = () => <h1>DashboardMessages</h1>;
const DashboardTasks = () => <h1>DashboardTasks</h1>;
const AboutPage = () => <h1>About</h1>;

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
      element: <ProgramsPage />,
    },
    { path: 'team', element: <AboutPage /> },
  ]);

  const [formState, setFormState] = useState<formSearchType>(DEFAULT_SEARCH_PARAMS);
  return (
    <ErrorBoundary>
      <FormContext.Provider value={{ formState, setFormState }}>
        <Layout header={<AppHeader />}>{element}</Layout>
      </FormContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
