import React, { useState } from 'react';
import { Layout, ErrorBoundary } from '@monorepo/components';
import { Programs as ProgramsPage } from '@/pages';
import { formSearchType } from '@/types';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { PageContext } from '@/context';

/**
 * Main App.
 *
 * @return {JSX.Element}
 * @constructor
 */
const App = () => {
  const [formState, setFormState] = useState<formSearchType>(
    DEFAULT_SEARCH_PARAMS);

  return (
    <ErrorBoundary>
      <PageContext.Provider value={{ formState, setFormState }}>
        <Layout>
          <ProgramsPage/>
        </Layout>
      </PageContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
