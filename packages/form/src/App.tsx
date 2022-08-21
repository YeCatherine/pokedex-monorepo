import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout, ErrorBoundary } from '@/components';
import { Programs as ProgramsPage } from '@/pages';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';

// Create a client
const queryClient = new QueryClient();

/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
  const [formState, setFormState] = useState<formSearchType>(DEFAULT_SEARCH_PARAMS);

  return (
    <ErrorBoundary>
      <PageContext.Provider value={{ formState, setFormState }}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <ProgramsPage />
          </Layout>
        </QueryClientProvider>
      </PageContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
