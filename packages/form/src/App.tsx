import React, { useState } from 'react';
import { ErrorBoundary, formSearchType, Layout } from '@monorepo/components';
import { Programs as ProgramsPage } from '@/pages';
import { DEFAULT_SEARCH_PARAMS } from '@/constants';
import { FormContext } from '@monorepo/components/src/context';

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
      <FormContext.Provider value={{ formState, setFormState }}>
        <Layout>
          <ProgramsPage/>
        </Layout>
      </FormContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
